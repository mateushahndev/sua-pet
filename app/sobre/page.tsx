import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock, Star, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história da Sua Pet, pet shop em Boa Vista desde 2018. Paixão por animais, produtos de qualidade e atendimento especializado.",
  alternates: {
    canonical: "https://suapet.vercel.app/sobre",
  },
};

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3CBDAF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#3CBDAF] font-semibold text-sm tracking-widest uppercase">
              Nossa História
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
              Sobre a Sua Pet
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Desde 2018 cuidando do seu melhor amigo com produtos de qualidade
              e atendimento especializado em Boa Vista.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-16 lg:py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Paixão por animais
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                A Sua Pet nasceu da paixão por animais e do desejo de
                oferecer produtos de qualidade para os pets de Boa Vista. Somos
                uma loja familiar que entende que cada pet é único e merece o
                melhor.
              </p>
              <p>
                Trabalhamos com as melhores marcas de rações, medicamentos,
                acessórios e produtos de higiene. Nossa equipe está sempre
                pronta para ajudar você a encontrar o que seu melhor amigo
                precisa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 lg:py-20 bg-white relative">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Nossos Valores
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#3CBDAF]/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-[#3CBDAF]" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Amor</h3>
              <p className="text-gray-500 text-sm">
                Cuidamos de cada pet como se fosse nosso. Atendimento com
                carinho e dedicação.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#3CBDAF]/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#3CBDAF]" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Confiança
              </h3>
              <p className="text-gray-500 text-sm">
                Produtos originais e de procedência garantida. Você compra com
                segurança.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#3CBDAF]/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-[#3CBDAF]" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Qualidade
              </h3>
              <p className="text-gray-500 text-sm">
                Selecionamos as melhores marcas para garantir saúde e bem-estar
                ao seu pet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info + CTA */}
      <section className="py-16 lg:py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Visite-nos
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-[#3CBDAF]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#3CBDAF]" />
                </div>
                <span className="text-sm">
                  Rua Peterson Sabaró, 44 - Vila Russa, Boa Vista - RR
                </span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-[#3CBDAF]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#3CBDAF]" />
                </div>
                <span className="text-sm">
                  Seg a Sex: 8h às 18h | Sáb: 8h às 13h
                </span>
              </div>
            </div>
            <Link
              href="https://wa.me/5511199999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
              aria-label="Falar com a Sua Pet no WhatsApp"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}