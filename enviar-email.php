<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['message' => 'Metodo nao permitido.']);
  exit;
}

$to = 'contato@bouwobra.com.br';
$from = 'contato@bouwobra.com.br';
$recaptchaMinScore = 0.5;
$recaptchaExpectedAction = 'contact_submit';

function field_value($name) {
  return trim($_POST[$name] ?? '');
}

function json_error($message, $status = 400) {
  http_response_code($status);
  echo json_encode(['message' => $message]);
  exit;
}

function clean_header($value) {
  return str_replace(["\r", "\n"], '', $value);
}

function client_ip() {
  return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function too_many_attempts($ip, $limit = 3, $windowSeconds = 900) {
  $file = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'bouwobra-contact-rate.json';
  $now = time();
  $key = hash('sha256', $ip);
  $rateData = [];

  $handle = fopen($file, 'c+');

  if (!$handle) {
    return false;
  }

  flock($handle, LOCK_EX);
  $contents = stream_get_contents($handle);

  if ($contents !== false && $contents !== '') {
    $decoded = json_decode($contents, true);

    if (is_array($decoded)) {
      $rateData = $decoded;
    }
  }

  foreach ($rateData as $storedKey => $attempts) {
    $recentAttempts = array_values(array_filter(
      is_array($attempts) ? $attempts : [],
      function ($timestamp) use ($now, $windowSeconds) {
        return is_int($timestamp) && $timestamp > $now - $windowSeconds;
      }
    ));

    if ($recentAttempts) {
      $rateData[$storedKey] = $recentAttempts;
    } else {
      unset($rateData[$storedKey]);
    }
  }

  $attempts = $rateData[$key] ?? [];

  if (count($attempts) >= $limit) {
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($rateData));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    return true;
  }

  $attempts[] = $now;
  $rateData[$key] = $attempts;

  ftruncate($handle, 0);
  rewind($handle);
  fwrite($handle, json_encode($rateData));
  fflush($handle);
  flock($handle, LOCK_UN);
  fclose($handle);

  return false;
}

function env_value($name) {
  $value = getenv($name);

  if ($value !== false && $value !== '') {
    return $value;
  }

  return $_ENV[$name] ?? $_SERVER[$name] ?? '';
}

function verify_recaptcha($token, $expectedAction, $minScore) {
  $secret = env_value('RECAPTCHA_SECRET');

  if ($secret === '') {
    json_error('reCAPTCHA nao configurado no servidor.', 500);
  }

  if ($token === '') {
    json_error('Nao foi possivel validar o reCAPTCHA.', 400);
  }

  $payload = http_build_query([
    'secret' => $secret,
    'response' => $token,
    'remoteip' => client_ip(),
  ]);

  $context = stream_context_create([
    'http' => [
      'method' => 'POST',
      'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
      'content' => $payload,
      'timeout' => 5,
    ],
  ]);

  $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);

  if ($response === false) {
    json_error('Nao foi possivel validar o reCAPTCHA agora.', 500);
  }

  $data = json_decode($response, true);

  if (!is_array($data)) {
    json_error('Resposta invalida do reCAPTCHA.', 500);
  }

  $score = $data['score'] ?? 0;
  $action = $data['action'] ?? '';

  if (
    empty($data['success']) ||
    $action !== $expectedAction ||
    !is_numeric($score) ||
    (float) $score < $minScore
  ) {
    json_error('Validacao anti-spam reprovada. Tente novamente.', 403);
  }
}

$name = field_value('name');
$email = field_value('email');
$cnpj = field_value('cnpj');
$phone = field_value('phone');
$message = field_value('message');
$website = field_value('website');
$startedAt = field_value('startedAt');
$recaptchaToken = field_value('recaptchaToken');
$recaptchaAction = field_value('recaptchaAction');

if ($website !== '') {
  echo json_encode(['message' => 'Mensagem enviada com sucesso.']);
  exit;
}

if (!ctype_digit($startedAt) || (time() * 1000 - (int) $startedAt) < 3000) {
  json_error('Aguarde alguns segundos antes de enviar a mensagem.', 429);
}

if (too_many_attempts(client_ip())) {
  json_error('Muitas tentativas em pouco tempo. Tente novamente mais tarde.', 429);
}

if ($recaptchaAction !== $recaptchaExpectedAction) {
  json_error('Validacao anti-spam invalida.', 400);
}

verify_recaptcha($recaptchaToken, $recaptchaExpectedAction, $recaptchaMinScore);

if ($name === '' || $email === '' || $cnpj === '' || $phone === '' || $message === '') {
  json_error('Preencha nome, email, CNPJ, telefone e mensagem.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  json_error('Informe um email valido.');
}

$safeName = clean_header($name);
$safeEmail = clean_header($email);
$subject = 'Novo contato pelo site - ' . $safeName;

$body = "Nome: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "CNPJ: {$cnpj}\n";
$body .= "Telefone: {$phone}\n\n";
$body .= "Mensagem:\n{$message}\n";

$headers = [
  'From: Bouw Obra <' . $from . '>',
  'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  json_error('Nao foi possivel enviar a mensagem agora.', 500);
}

echo json_encode(['message' => 'Mensagem enviada com sucesso.']);
