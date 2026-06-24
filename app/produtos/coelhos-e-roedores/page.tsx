import type { Metadata } from "next";
import Link from "next/link";
import { ProdutoCard } from "@/components/produto-card";

export const metadata: Metadata = {
  title: "Produtos para Coelhos e Roedores",
  description:
    "Rações, fenos, gaiolas, bebedouros e acessórios para coelhos, hamsters e outros roedores. Entrega rápida em Goiânia.",
  alternates: {
    canonical: "https://viapet.net/produtos/coelhos-e-roedores",
  },
};

const produtos = [
  {
    nome: "Ração Nutrópica Coelhos 5kg",
    preco: "R$ 49,90",
    parcela: "ou 3x de R$ 16,63",
    categoria: "Coelhos e Roedores",
  },
  {
    nome: "Bebedouro Automático para Roedores",
    preco: "R$ 24,90",
    parcela: "ou 2x de R$ 12,45",
    categoria: "Coelhos e Roedores",
  },
  {
    nome: "Gaiola Hamster Com Acessórios",
    preco: "R$ 149,90",
    parcela: "ou 6x de R$ 24,98",
    categoria: "Coelhos e Roedores",
  },
  {
    nome: "Feno Premium Coelhos 1kg",
    preco: "R$ 34,90",
    parcela: "ou 2x de R$ 17,45",
    categoria: "Coelhos e Roedores",
  },
];

export default function CoelhosERoedoresPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pink-100/50 via-white to-pink-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Coelhos e Roedores
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Gaiolas, rações, fenos e acessórios para coelhos e roedores.
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
              className="px-4 py-2 rounded-full bg-[#3CBDAF] text-white text-sm font-medium"
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