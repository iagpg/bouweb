import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function getEnvValue(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Preencha nome, email e mensagem.' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: getEnvValue('SMTP_HOST'),
      port: Number(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: getEnvValue('SMTP_USER'),
        pass: getEnvValue('SMTP_PASS'),
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || getEnvValue('SMTP_USER'),
      to: process.env.CONTACT_TO_EMAIL || getEnvValue('SMTP_USER'),
      replyTo: email,
      subject: `Novo contato pelo site - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ message: 'Mensagem enviada com sucesso.' });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message.includes('Missing environment variable')
          ? 'Configure as variaveis SMTP antes de enviar emails.'
          : 'Nao foi possivel enviar a mensagem agora.'
        : 'Nao foi possivel enviar a mensagem agora.';

    return NextResponse.json({ message }, { status: 500 });
  }
}
