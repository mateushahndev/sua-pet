import type { Metadata } from "next";
import Hero from "@/components/hero";
import Diferenciais from "@/components/diferenciais";
import Categorias from "@/components/categorias";
import ProdutosDestaque from "@/components/produtos-destaque";
import PorqueEscolher from "@/components/porque-escolher";
import CtaFinal from "@/components/cta-final";

export const metadata: Metadata = {
  title: "Sua Pet | Pet Shop em Boa Vista — Seu pet merece o melhor",
  description:
    "Pet shop confiável em Boa Vista desde 2018. Rações premium, medicamentos, acessórios e atendimento que respeita seu pet. Preços justos e entrega rápida.",
  alternates: {
    canonical: "https://suapet.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Diferenciais />
      <Categorias />
      <ProdutosDestaque />
      <PorqueEscolher />
      <CtaFinal />
    </>
  );
}