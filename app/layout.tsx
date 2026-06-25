import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Sua Pet | Pet Shop em Boa Vista — Produtos de qualidade para seu pet",
    template: "%s | Sua Pet",
  },
  description:
    "Pet shop em Boa Vista desde 2018. Rações premium, medicamentos, acessórios e atendimento especializado. Preços justos, entrega rápida e cuidado de verdade para seu melhor amigo.",
  keywords: [
    "pet shop Boa Vista",
    "ração para cachorro",
    "ração para gato",
    "acessórios para pet",
    "medicamentos veterinários",
    "banho e tosa Boa Vista",
    "produtos para aves",
    "loja de animais Boa Vista",
  ],
  authors: [{ name: "Sua Pet" }],
  creator: "Sua Pet",
  publisher: "Sua Pet",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://suapet.vercel.app",
    siteName: "Sua Pet",
    title: "Sua Pet | Pet Shop em Boa Vista — Produtos de qualidade para seu pet",
    description:
      "Pet shop em Boa Vista desde 2018. Rações premium, medicamentos, acessórios e atendimento especializado.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sua Pet - Pet Shop em Boa Vista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua Pet | Pet Shop em Boa Vista",
    description:
      "Pet shop em Boa Vista desde 2018. Rações premium, medicamentos, acessórios e atendimento especializado.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}