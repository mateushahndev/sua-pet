import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Via Pet | Pet Shop em Goiânia — Produtos de qualidade para seu pet",
    template: "%s | Via Pet",
  },
  description:
    "Pet shop em Goiânia desde 2018. Rações premium, medicamentos, acessórios e atendimento especializado. Preços justos, entrega rápida e cuidado de verdade para seu melhor amigo.",
  keywords: [
    "pet shop goiânia",
    "ração para cachorro",
    "ração para gato",
    "acessórios para pet",
    "medicamentos veterinários",
    "banho e tosa goiânia",
    "produtos para aves",
    "loja de animais goiânia",
  ],
  authors: [{ name: "Via Pet" }],
  creator: "Via Pet",
  publisher: "Via Pet",
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
    url: "https://viapet.net",
    siteName: "Via Pet",
    title: "Via Pet | Pet Shop em Goiânia — Produtos de qualidade para seu pet",
    description:
      "Pet shop em Goiânia desde 2018. Rações premium, medicamentos, acessórios e atendimento especializado.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Via Pet - Pet Shop em Goiânia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Via Pet | Pet Shop em Goiânia",
    description:
      "Pet shop em Goiânia desde 2018. Rações premium, medicamentos, acessórios e atendimento especializado.",
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