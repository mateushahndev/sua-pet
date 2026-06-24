import Link from "next/link";
import { Bird, Dog, Cat, Rabbit, Zap, Ellipsis, ChevronRight } from "lucide-react";

const categorias = [
  {
    nome: "Cães",
    slug: "caes",
    icone: Dog,
    cor: "bg-amber-50 text-amber-600 border-amber-200",
    iconBg: "bg-amber-100",
  },
  {
    nome: "Gatos",
    slug: "gatos",
    icone: Cat,
    cor: "bg-blue-50 text-blue-600 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    nome: "Aves",
    slug: "aves",
    icone: Bird,
    cor: "bg-green-50 text-green-600 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    nome: "Roedores",
    slug: "coelhos-e-roedores",
    icone: Rabbit,
    cor: "bg-pink-50 text-pink-600 border-pink-200",
    iconBg: "bg-pink-100",
  },
  {
    nome: "Eletrônicos",
    slug: "eletronicos",
    icone: Zap,
    cor: "bg-purple-50 text-purple-600 border-purple-200",
    iconBg: "bg-purple-100",
  },
  {
    nome: "Outros",
    slug: "outros",
    icone: Ellipsis,
    cor: "bg-gray-50 text-gray-600 border-gray-200",
    iconBg: "bg-gray-100",
  },
];

export default function Categorias() {
  return (
    <section id="categorias" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-[#3CBDAF] font-semibold text-sm tracking-widest uppercase">
            Categorias
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Tudo que seu pet precisa
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Rações premium, medicamentos, acessórios e produtos de higiene. De
            cães a roedores, temos estoque completo e produtos frescos.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {categorias.map((cat) => (
            <Link
              key={cat.slug}
              href={`/produtos/${cat.slug}`}
              className={`group flex flex-col items-center gap-4 p-6 lg:p-7 bg-white rounded-2xl border ${cat.cor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div
                className={`w-16 h-16 lg:w-18 lg:h-18 rounded-2xl ${cat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <cat.icone className="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <span className="text-sm lg:text-base font-semibold text-gray-800 text-center">
                {cat.nome}
              </span>
              <span className="text-[#3CBDAF] opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1 text-xs font-medium -mt-2">
                Ver mais <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}











