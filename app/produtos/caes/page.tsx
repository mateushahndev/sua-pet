import type { Metadata } from "next";
import Link from "next/link";
import { ProdutoCard } from "@/components/produto-card";

export const metadata: Metadata = {
  title: "Produtos para Cães",
  description:
    "Rações premium, acessórios, medicamentos, camas, brinquedos e tudo para seu cachorro. As melhores marcas com preços justos e entrega em Goiânia.",
  alternates: {
    canonical: "https://viapet.net/produtos/caes",
  },
};

const produtos = [
  {
    nome: "Ração Royal Canin Cães Adultos 15kg",
    preco: "R$ 189,90",
    parcela: "ou 6x de R$ 31,65",
    categoria: "Cães",
    oferta: true,
  },
  {
    nome: "Ração Golden Formula Cães Adultos 15kg",
    preco: "R$ 149,90",
    parcela: "ou 6x de R$ 24,98",
    categoria: "Cães",
  },
  {
    nome: "Brinquedo Kong Classic Médio",
    preco: "R$ 89,90",
    parcela: "ou 4x de R$ 22,48",
    categoria: "Cães",
    oferta: true,
  },
  {
    nome: "Coleira Antipulgas Cães e Gatos",
    preco: "R$ 39,90",
    parcela: "ou 3x de R$ 13,30",
    categoria: "Farmácia",
    oferta: true,
  },
  {
    nome: "Comedouro Duplo Inox Cães M",
    preco: "R$ 79,90",
    parcela: "ou 4x de R$ 19,98",
    categoria: "Acessórios",
  },
  {
    nome: "Antipulgas Bravecto Cães 20-40kg",
    preco: "R$ 199,90",
    parcela: "ou 6x de R$ 33,32",
    categoria: "Farmácia",
  },
  {
    nome: "Cama Pet Confort Azul M",
    preco: "R$ 149,90",
    parcela: "ou 6x de R$ 24,98",
    categoria: "Acessórios",
    oferta: true,
  },
  {
    nome: "Tapete Higiênico Cães 30un",
    preco: "R$ 69,90",
    parcela: "ou 3x de R$ 23,30",
    categoria: "Higiene",
  },
  {
    nome: "Vermífugo Drontal Cães",
    preco: "R$ 34,90",
    parcela: "ou 2x de R$ 17,45",
    categoria: "Farmácia",
  },
  {
    nome: "Fralda Pet Sec Confort G 30un",
    preco: "R$ 59,90",
    parcela: "ou 3x de R$ 19,97",
    categoria: "Higiene",
  },
  {
    nome: "Shampoo Pet Clean Cães e Gatos 500ml",
    preco: "R$ 29,90",
    parcela: "ou 3x de R$ 9,97",
    categoria: "Higiene",
  },
  {
    nome: "Guia Retrátil Cães 5m",
    preco: "R$ 69,90",
    parcela: "ou 3x de R$ 23,30",
    categoria: "Acessórios",
  },
];

export default function CaesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-amber-100/50 via-white to-amber-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cães
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Rações, acessórios, medicamentos e tudo para o seu cachorro.
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
              className="px-4 py-2 rounded-full bg-[#3CBDAF] text-white text-sm font-medium"
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