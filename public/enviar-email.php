<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['message' => 'Metodo nao permitido.']);
  exit;
}

$to = 'contato@bouwobra.com.br';
$from = 'contato@bouwobra.com.br';

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

$name = field_value('name');
$email = field_value('email');
$cnpj = field_value('cnpj');
$phone = field_value('phone');
$message = field_value('message');

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
