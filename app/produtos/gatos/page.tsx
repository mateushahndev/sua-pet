import type { Metadata } from "next";
import Link from "next/link";
import { ProdutoCard } from "@/components/produto-card";

export const metadata: Metadata = {
  title: "Produtos para Gatos",
  description:
    "Rações premium, areia sanitária, arranhadores, brinquedos e tudo para seu felino. Produtos de qualidade com entrega rápida em Goiânia.",
  alternates: {
    canonical: "https://viapet.net/produtos/gatos",
  },
};

const produtos = [
  {
    nome: "Ração Whiskas Gatos Adultos 10kg",
    preco: "R$ 139,90",
    parcela: "ou 6x de R$ 23,32",
    categoria: "Gatos",
  },
  {
    nome: "Ração Golden Gatos Castrados 10kg",
    preco: "R$ 159,90",
    parcela: "ou 6x de R$ 26,65",
    categoria: "Gatos",
  },
  {
    nome: "Areia Sanitária Pipicat 4kg",
    preco: "R$ 19,90",
    parcela: "ou 2x de R$ 9,95",
    categoria: "Gatos",
  },
  {
    nome: "Arranhador para Gatos Torre 60cm",
    preco: "R$ 129,90",
    parcela: "ou 5x de R$ 25,98",
    categoria: "Gatos",
  },
  {
    nome: "Ração Úmida Whiskas Gatos Sachê",
    preco: "R$ 4,90",
    parcela: "à vista",
    categoria: "Gatos",
  },
  {
    nome: "Bolinha Catnip Gatos",
    preco: "R$ 14,90",
    parcela: "à vista",
    categoria: "Brinquedos",
  },
  {
    nome: "Fonte de Água Elétrica Pet 2L",
    preco: "R$ 179,90",
    parcela: "ou 6x de R$ 29,98",
    categoria: "Eletrônicos",
    oferta: true,
  },
  {
    nome: "Shampoo Pet Clean Cães e Gatos 500ml",
    preco: "R$ 29,90",
    parcela: "ou 3x de R$ 9,97",
    categoria: "Higiene",
  },
];

export default function GatosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-100/50 via-white to-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Gatos
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Rações, areia, brinquedos e tudo para o seu felino.
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
              className="px-4 py-2 rounded-full bg-[#3CBDAF] text-white text-sm font-medium"
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
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#3CBDAF]/10 hover:text-[#3CBDAF] text-sm font-medium transition-colors"
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