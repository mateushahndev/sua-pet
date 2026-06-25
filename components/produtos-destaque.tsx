import Link from "next/link";
import Image from "next/image";
import { Phone, Star, ChevronRight } from "lucide-react";

const produtos = [
  {
    nome: "Ração Royal Canin Cães Adultos 15kg",
    preco: "R$ 189,90",
    parcela: "ou 6x de R$ 31,65",
    imagem: "/produtos/racao-royal-canin-caes-adultos-15kg.webp",
    oferta: true,
  },
  {
    nome: "Shampoo Pet Clean Cães e Gatos 500ml",
    preco: "R$ 29,90",
    parcela: "ou 3x de R$ 9,97",
    imagem: "/produtos/shampoo-pet-clean-caes-e-gatos-500ml.webp",
  },
  {
    nome: "Brinquedo Kong Classic Médio",
    preco: "R$ 89,90",
    parcela: "ou 4x de R$ 22,48",
    imagem: "/produtos/brinquedo-kong-classic-medio.webp",
    oferta: true,
  },
  {
    nome: "Cama Pet Confort Azul M",
    preco: "R$ 149,90",
    parcela: "ou 6x de R$ 24,98",
    imagem: "/produtos/cama-pet-confort-azul-m.webp",
  },
];

export default function ProdutosDestaque() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-[#3CBDAF] font-semibold text-sm tracking-widest uppercase">
            Mais Vendidos
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Os favoritos das famílias
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Produtos que seus vizinhos já confiam. Consulte disponibilidade e
            receba em casa com entrega rápida.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <div
              key={produto.nome}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className="relative w-full h-[260px] overflow-hidden">
                {produto.imagem ? (
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-400 text-sm">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-white shadow-md mx-auto mb-3 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-gray-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-400">400×300px</p>
                    </div>
                  </div>
                )}
                {produto.oferta && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-red-500/25 flex items-center gap-1 z-10">
                    <Star className="w-3 h-3 fill-white" />
                    Oferta
                  </div>
                )}
              </div>

              <div className="p-5 space-y-4">
                <h3 className="font-semibold text-gray-900 leading-snug min-h-[48px] group-hover:text-[#3CBDAF] transition-colors">
                  {produto.nome}
                </h3>
                <div>
                  <p className="text-2xl font-extrabold text-gray-900">
                    {produto.preco}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {produto.parcela}
                  </p>
                </div>
                <Link
                  href="https://wa.me/556292905701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl text-sm font-semibold w-full shadow-md shadow-[#25D366]/20 hover:shadow-lg hover:shadow-[#25D366]/30 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Consultar no WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-[#3CBDAF] text-gray-700 hover:text-[#3CBDAF] px-8 py-4 rounded-xl text-base font-semibold transition-all hover:-translate-y-0.5"
          >
            Ver Todos os Produtos
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}