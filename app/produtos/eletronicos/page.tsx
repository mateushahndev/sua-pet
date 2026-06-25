import type { Metadata } from "next";
import Link from "next/link";
import { ProdutoCard } from "@/components/produto-card";

export const metadata: Metadata = {
  title: "Eletrônicos para Pet",
  description:
    "Fontes de água, tosadores elétricos, aquecedores e outros eletrônicos para seu pet. Produtos de qualidade com entrega em Boa Vista.",
  alternates: {
    canonical: "https://suapet.vercel.app/produtos/eletronicos",
  },
};

const produtos = [
  {
    nome: "Fonte de Água Elétrica Pet 2L",
    preco: "R$ 179,90",
    parcela: "ou 6x de R$ 29,98",
    categoria: "Eletrônicos",
    oferta: true,
    imagem: "/produtos/fonte-de-agua-eletrica-pet-2l.webp",
  },
  {
    nome: "Tosador Elétrico Profissional Pet",
    preco: "R$ 249,90",
    parcela: "ou 6x de R$ 41,65",
    categoria: "Eletrônicos",
    imagem: "/produtos/tosador-eletrico-profissional-pet.webp",
  },
  {
    nome: "Aquecedor para Aquário 100W",
    preco: "R$ 89,90",
    parcela: "ou 4x de R$ 22,48",
    categoria: "Eletrônicos",
    imagem: "/produtos/aquecedor-para-aquario-100w.webp",
  },
];

export default function EletronicosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-100/50 via-white to-purple-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Eletrônicos
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Fontes, tosadores, aquecedores e outros eletrônicos para seu pet.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/produtos"
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#3CBDAF]/10 hover:text-[#3CBDAF] text-sm font-medium transition-colors"
            >
              Todos
            </Link>
            <Link
              href="/produtos/caes"
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#3CBDAF]/10 hover:text-[#3CBDAF] text-sm font-medium transition-colors"
            >
              Cães
            </Link>
            <Link
              href="/produtos/gatos"
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#3CBDAF]/10 hover:text-[#3CBDAF] text-sm font-medium transition-colors"
            >
              Gatos
            </Link>
            <Link
              href="/produtos/aves"
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#3CBDAF]/10 hover:text-[#3CBDAF] text-sm font-medium transition-colors"
            >
              Aves
            </Link>
            <Link
              href="/produtos/coelhos-e-roedores"
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#3CBDAF]/10 hover:text-[#3CBDAF] text-sm font-medium transition-colors"
            >
              Coelhos e Roedores
            </Link>
            <Link
              href="/produtos/eletronicos"
              className="px-4 py-2 rounded-full bg-[#3CBDAF] text-white text-sm font-medium"
            >
              Eletrônicos
            </Link>
            <Link
              href="/produtos/outros"
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#3CBDAF]/10 hover:text-[#3CBDAF] text-sm font-medium transition-colors"
            >
              Outros
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtos.map((produto) => (
              <ProdutoCard key={produto.nome} {...produto} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}