'use client';

import { useEffect, useState } from 'react';

type FormStatus = {
  kind: 'success' | 'error';
  message: string;
} | null;

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Nao foi possivel enviar a mensagem.');
      }

      setFormValues(initialValues);
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
    <div className="border-l-4 border-primary bg-zinc-900/50 p-8 md:p-12">
      <h2 className="mb-8 text-3xl font-headline font-bold uppercase">
        Fale conosco!
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">
              Nome
            </label>
            <input
              className="w-full rounded-md border-none bg-zinc-950 p-4 text-on-surface placeholder:text-neutral-700 focus:ring-1 focus:ring-primary"
              placeholder="Digite seu nome completo"
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
  );
}
