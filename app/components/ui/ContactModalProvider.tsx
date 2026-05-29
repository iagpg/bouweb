'use client';

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import ContactModal from './ContactModal';

type ContactModalContextValue = {
  openContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error('useContactModal must be used within ContactModalProvider');
  }

  return context;
}

export default function ContactModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => setIsOpen(true), []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      openContactModal,
    }),
    [openContactModal],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {isOpen && <ContactModal onClose={closeContactModal} />}
    </ContactModalContext.Provider>
  );
}
