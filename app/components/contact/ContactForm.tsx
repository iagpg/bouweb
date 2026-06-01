'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

type FormStatus = {
  kind: 'success' | 'error';
  message: string;
} | null;

type FormValues = {
  name: string;
  email: string;
  cnpj: string;
  phone: string;
  message: string;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  cnpj: '',
  phone: '',
  message: '',
};

const recaptchaSiteKey = '6LcXXwctAAAAAC0dSrBG6qc1G9MzmE4InQgRLdjU';
const recaptchaAction = 'contact_submit';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

function formatCnpj(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 14);

  return digits
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }

  return digits
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
}

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!status) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus(null);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      if (!window.grecaptcha) {
        throw new Error(
          'Nao foi possivel validar o reCAPTCHA. Recarregue a pagina e tente novamente.'
        );
      }

      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        window.grecaptcha?.ready(() => {
          window.grecaptcha
            ?.execute(recaptchaSiteKey, { action: recaptchaAction })
            .then(resolve)
            .catch(reject);
        });
      });

      const formData = new FormData();
      formData.append('name', formValues.name);
      formData.append('email', formValues.email);
      formData.append('cnpj', formValues.cnpj);
      formData.append('phone', formValues.phone);
      formData.append('message', formValues.message);
      formData.append('website', honeypotRef.current?.value ?? '');
      formData.append('startedAt', String(formStartedAt));
      formData.append('recaptchaToken', recaptchaToken);
      formData.append('recaptchaAction', recaptchaAction);

      const response = await fetch('/enviar-email.php', {
        method: 'POST',
        body: formData,
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Nao foi possivel enviar a mensagem.');
      }

      setFormValues(initialValues);
      setFormStartedAt(Date.now());
      setStatus({
        kind: 'success',
        message: 'Mensagem enviada com sucesso.',
      });
    } catch (error) {
      setStatus({
        kind: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Nao foi possivel enviar a mensagem.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        strategy="afterInteractive"
      />
      <div className="border-l-4 border-primary bg-zinc-900/50 p-8 md:p-12">
        <h2 className="mb-8 text-3xl font-headline font-bold uppercase">
          Fale conosco!
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              ref={honeypotRef}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">
              Nome
            </label>
            <input
              className="w-full rounded-md border-none bg-zinc-950 p-4 text-on-surface placeholder:text-neutral-700 focus:ring-1 focus:ring-primary"
              placeholder="Digite seu nome completo"
              maxLength={40}
              type="text"
              value={formValues.name}
              onChange={(event) =>
                setFormValues((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">
              Email
            </label>
            <input
              className="w-full rounded-md border-none bg-zinc-950 p-4 text-on-surface placeholder:text-neutral-700 focus:ring-1 focus:ring-primary"
              placeholder="seu.email@gmail.com"
              maxLength={40}
              type="email"
              value={formValues.email}
              onChange={(event) =>
                setFormValues((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">
              CNPJ
            </label>
            <input
              className="w-full rounded-md border-none bg-zinc-950 p-4 text-on-surface placeholder:text-neutral-700 focus:ring-1 focus:ring-primary"
              placeholder="00.000.000/0000-00"
              maxLength={18}
              type="text"
              inputMode="numeric"
              value={formValues.cnpj}
              onChange={(event) =>
                setFormValues((current) => ({
                  ...current,
                  cnpj: formatCnpj(event.target.value),
                }))
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">
              Telefone
            </label>
            <input
              className="w-full rounded-md border-none bg-zinc-950 p-4 text-on-surface placeholder:text-neutral-700 focus:ring-1 focus:ring-primary"
              placeholder="(13) 99999-9999"
              maxLength={15}
              type="tel"
              inputMode="tel"
              value={formValues.phone}
              onChange={(event) =>
                setFormValues((current) => ({
                  ...current,
                  phone: formatPhone(event.target.value),
                }))
              }
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">
            Mensagem
          </label>
          <textarea
            className="min-h-[140px] max-h-[480px] w-full resize-y rounded-md border-none bg-zinc-950 p-4 text-on-surface placeholder:text-neutral-700 focus:ring-1 focus:ring-primary"
            placeholder="Descreva sua mensagem ou solicitacao com detalhes para que possamos atende-lo melhor."
            rows={5}
            value={formValues.message}
            onChange={(event) =>
              setFormValues((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            required
          ></textarea>
        </div>
        {status ? (
          <p
            className={`rounded-md px-4 py-3 text-sm font-medium ${
              status.kind === 'success'
                ? 'bg-emerald-500/15 text-emerald-400'
                : 'bg-red-500/15 text-red-400'
            }`}
          >
            {status.message}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-primary px-12 py-4 font-headline font-bold uppercase tracking-tight text-on-primary transition-all active:scale-[0.98] hover:bg-primary-dim disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
        </form>
      </div>
    </>
  );
}
