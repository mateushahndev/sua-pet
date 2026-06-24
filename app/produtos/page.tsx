import type { Metadata } from "next";
import Link from "next/link";
import { ProdutoCard } from "@/components/produto-card";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Confira nossa seleção completa de produtos para cães, gatos, aves, coelhos e roedores. Rações, medicamentos, acessórios e muito mais. Entrega em Goiânia.",
  alternates: {
    canonical: "https://viapet.net/produtos",
  },
};

const produtos = [
  {
    nome: "Ração Royal Canin Cães Adultos 15kg",
    preco: "R$ 189,90",
    parcela: "ou 6x de R$ 31,65",
    categoria: "Cães",
    slug: "caes",
    imagem: "/produtos/racao-royal-canin-caes-adultos-15kg.png",
    oferta: true,
  },
  {
    nome: "Ração Golden Formula Cães Adultos 15kg",
    preco: "R$ 149,90",
    parcela: "ou 6x de R$ 24,98",
    categoria: "Cães",
    imagem: "/produtos/racao-golden-formula-caes-adultos-15kg.png",
    slug: "caes",
  },
  {
    nome: "Shampoo Pet Clean Cães e Gatos 500ml",
    preco: "R$ 29,90",
    parcela: "ou 3x de R$ 9,97",
    categoria: "Higiene",
    slug: "caes",
  },
  {
    nome: "Brinquedo Kong Classic Médio",
    preco: "R$ 89,90",
    parcela: "ou 4x de R$ 22,48",
    categoria: "Cães",
    slug: "caes",
    imagem: "/produtos/brinquedo-kong-classic-medio.png",
    oferta: true,
  },
  {
    nome: "Ração Whiskas Gatos Adultos 10kg",
    preco: "R$ 139,90",
    parcela: "ou 6x de R$ 23,32",
    categoria: "Gatos",
    slug: "gatos",
  },
  {
    nome: "Ração Golden Gatos Castrados 10kg",
    preco: "R$ 159,90",
    parcela: "ou 6x de R$ 26,65",
    categoria: "Gatos",
    slug: "gatos",
  },
  {
    nome: "Areia Sanitária Pipicat 4kg",
    preco: "R$ 19,90",
    parcela: "ou 2x de R$ 9,95",
    categoria: "Gatos",
    slug: "gatos",
  },
  {
    nome: "Alpiste Mago 500g",
    preco: "R$ 8,90",
    parcela: "à vista",
    categoria: "Aves",
    slug: "aves",
  },
  {
    nome: "Gaiola para Calopsita M",
    preco: "R$ 199,90",
    parcela: "ou 6x de R$ 33,32",
    categoria: "Aves",
    slug: "aves",
  },
  {
    nome: "Ração Nutrópica Coelhos 5kg",
    preco: "R$ 49,90",
    parcela: "ou 3x de R$ 16,63",
    categoria: "Coelhos e Roedores",
    slug: "coelhos-e-roedores",
  },
  {
    nome: "Bebedouro Automático para Roedores",
    preco: "R$ 24,90",
    parcela: "ou 2x de R$ 12,45",
    categoria: "Coelhos e Roedores",
    slug: "coelhos-e-roedores",
  },
  {
    nome: "Coleira Antipulgas Cães e Gatos",
    preco: "R$ 39,90",
    parcela: "ou 3x de R$ 13,30",
    categoria: "Farmácia",
    slug: "caes",
    imagem: "/produtos/coleira-antipulgas-caes-e-gatos.png",
    oferta: true,
  },
  {
    nome: "Comedouro Duplo Inox Cães M",
    preco: "R$ 79,90",
    parcela: "ou 4x de R$ 19,98",
    categoria: "Acessórios",
    slug: "caes",
  },
  {
    nome: "Fralda Pet Sec Confort G 30un",
    preco: "R$ 59,90",
    parcela: "ou 3x de R$ 19,97",
    categoria: "Higiene",
    slug: "caes",
  },
  {
    nome: "Antipulgas Bravecto Cães 20-40kg",
    preco: "R$ 199,90",
    parcela: "ou 6x de R$ 33,32",
    categoria: "Farmácia",
    slug: "caes",
  },
  {
    nome: "Cama Pet Confort Azul M",
    preco: "R$ 149,90",
    parcela: "ou 6x de R$ 24,98",
    categoria: "Acessórios",
    slug: "caes",
    oferta: true,
  },
  {
    nome: "Arranhador para Gatos Torre 60cm",
    preco: "R$ 129,90",
    parcela: "ou 5x de R$ 25,98",
    categoria: "Gatos",
    slug: "gatos",
  },
  {
    nome: "Ração Megazoo Pássaros 500g",
    preco: "R$ 12,90",
    parcela: "à vista",
    categoria: "Aves",
    slug: "aves",
  },
  {
    nome: "Tapete Higiênico Cães 30un",
    preco: "R$ 69,90",
    parcela: "ou 3x de R$ 23,30",
    categoria: "Higiene",
    slug: "caes",
  },
  {
    nome: "Vermífugo Drontal Cães",
    preco: "R$ 34,90",
    parcela: "ou 2x de R$ 17,45",
    categoria: "Farmácia",
    slug: "caes",
  },
  {
    nome: "Ração Úmida Whiskas Gatos Sachê",
    preco: "R$ 4,90",
    parcela: "à vista",
    categoria: "Gatos",
    slug: "gatos",
  },
  {
    nome: "Bolinha Catnip Gatos",
    preco: "R$ 14,90",
    parcela: "à vista",
    categoria: "Brinquedos",
    slug: "gatos",
  },
  {
    nome: "Fonte de Água Elétrica Pet 2L",
    preco: "R$ 179,90",
    parcela: "ou 6x de R$ 29,98",
    categoria: "Eletrônicos",
    slug: "eletronicos",
    oferta: true,
  },
  {
    nome: "Cortador de Unhas Pet",
    preco: "R$ 19,90",
    parcela: "à vista",
    categoria: "Outros",
    slug: "outros",
  },
];

export default function ProdutosPage() {
  return (
    <>
      {/* Hero da página */}
      <section className="bg-gradient-to-br from-[#3CBDAF]/10 via-white to-[#3CBDAF]/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Confira nossa seleção de produtos para o seu pet. Todos os itens com
            entrega em Goiânia.
          </p>
        </div>
      </section>

      {/* Filtro por categorias */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/produtos"
              className="px-4 py-2 rounded-full bg-[#3CBDAF] text-white text-sm font-medium"
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

      {/* Grid de produtos */}
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