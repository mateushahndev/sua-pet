import type { Metadata } from "next";
import Link from "next/link";
import { ProdutoCard } from "@/components/produto-card";

export const metadata: Metadata = {
  title: "Produtos para Aves",
  description:
    "Alpiste, ração extrusada, gaiolas, viveiros, poleiros e acessórios para aves. Tudo com preço justo e entrega em Boa Vista.",
  alternates: {
    canonical: "https://suapet.vercel.app/produtos/aves",
  },
};

const produtos = [
  {
    nome: "Alpiste Mago 500g",
    preco: "R$ 8,90",
    parcela: "à vista",
    categoria: "Aves",
    imagem: "/produtos/alpiste-mago-500g.webp",
  },
  {
    nome: "Gaiola para Calopsita M",
    preco: "R$ 199,90",
    parcela: "ou 6x de R$ 33,32",
    categoria: "Aves",
    imagem: "/produtos/gaiola-para-calopsita-m.webp",
  },
  {
    nome: "Ração Megazoo Pássaros 500g",
    preco: "R$ 12,90",
    parcela: "à vista",
    categoria: "Aves",
    imagem: "/produtos/racao-megazoo-passaros-500g.webp",
  },
  {
    nome: "Viveiro para Aves P",
    preco: "R$ 89,90",
    parcela: "ou 4x de R$ 22,48",
    categoria: "Aves",
    imagem: "/produtos/viveiro-para-aves-p.webp",
  },
  {
    nome: "Poleiro Natural para Calopsita",
    preco: "R$ 24,90",
    parcela: "ou 2x de R$ 12,45",
    categoria: "Aves",
    imagem: "/produtos/poleiro-natural-para-clopsita.webp",
  },
  {
    nome: "Ração Extrusada Papagaio 1kg",
    preco: "R$ 39,90",
    parcela: "ou 3x de R$ 13,30",
    categoria: "Aves",
    imagem: "/produtos/racao-extrusada-papagaio-1kg.webp",
  },
];

export default function AvesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-100/50 via-white to-green-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Aves
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Alimentação, gaiolas, viveiros e acessórios para suas aves.
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
              className="px-4 py-2 rounded-full bg-[#3CBDAF] text-white text-sm font-medium"
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