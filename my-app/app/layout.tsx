import type { Metadata } from "next";
import "./globals.css";
import TopNavBar from "./components/navigation/TopNavBar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Bouwobra | Proteção que Constrói Confiança",
  description: "Equipamentos industriais de alta performance para quem exige o máximo em segurança e durabilidade no canteiro de obras.",
  keywords: "EPI, segurança industrial, equipamentos de proteção, construção",
  openGraph: {
    title: "Bouwobra | Proteção que Constrói Confiança",
    description: "Equipamentos industriais de alta performance",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <TopNavBar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
