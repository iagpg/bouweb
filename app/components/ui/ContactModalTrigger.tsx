'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useContactModal } from './ContactModalProvider';

type ContactModalTriggerProps = {
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'>;

export default function ContactModalTrigger({
  children,
  ...props
}: ContactModalTriggerProps) {
  const { openContactModal } = useContactModal();

  return (
    <button type="button" onClick={openContactModal} {...props}>
      {children}
    </button>
  );
}
