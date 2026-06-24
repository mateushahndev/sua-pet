import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronRight, Star, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[650px] lg:min-h-[750px] flex items-center overflow-hidden bg-white"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-pattern opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3CBDAF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3CBDAF]/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#3CBDAF]/10 text-[#3CBDAF] px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              Cuidado de verdade para seu melhor amigo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Produtos de qualidade
              <span className="text-[#3CBDAF] block relative">
                e atendimento que respeita seu pet
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M0 4 Q 50 0, 100 4 Q 150 8, 200 4"
                    stroke="#3CBDAF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 max-w-lg leading-relaxed">
              Rações premium, medicamentos, acessórios e tudo que seu pet
              precisa. Preços justos, entrega rápida e uma equipe que ama o
              que faz.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="https://wa.me/556292905701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
                aria-label="Fale conosco pelo WhatsApp"
              >
                <Phone className="w-5 h-5" />
                Fale Conosco
              </Link>
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-[#3CBDAF] text-gray-700 hover:text-[#3CBDAF] px-8 py-4 rounded-xl text-base font-semibold transition-all hover:-translate-y-0.5"
                aria-label="Veja todos os nossos produtos"
              >
                Ver Produtos
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#3CBDAF]/20 border-2 border-white flex items-center justify-center text-xs font-bold text-[#3CBDAF]"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  +500 famílias confiam na gente
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Banner hero: 560x480px */}
              <div className="w-[560px] h-[480px] rounded-3xl overflow-hidden border border-[#3CBDAF]/10 shadow-lg">
                <Image
                  src="/home/hero-banner.png"
                  alt="Cão e gato felizes - Via Pet Goiânia"
                  width={560}
                  height={480}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
              </div>

              {/* Card flutuante decorativo */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Respondemos rápido</p>
                  <p className="text-sm font-semibold text-gray-900">
                    (62) 9 9290-5701
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#3CBDAF]/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#3CBDAF] fill-[#3CBDAF]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Avaliação dos clientes</p>
                  <p className="text-sm font-semibold text-gray-900">
                    4.9/5 estrelas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}