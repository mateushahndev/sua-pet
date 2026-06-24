import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Via Pet. Atendimento em Goiânia via WhatsApp, telefone ou e-mail. Respondemos rápido.",
  alternates: {
    canonical: "https://viapet.net/contato",
  },
};

const infos = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(62) 3088-6233",
    href: "tel:6230886233",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(62) 9 9290-5701",
    href: "https://wa.me/556292905701",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@viapet.com.br",
    href: "mailto:contato@viapet.com.br",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3CBDAF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#3CBDAF] font-semibold text-sm tracking-widest uppercase">
              Atendimento
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
              Fale Conosco
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Tire suas dúvidas, peça um orçamento ou faça seu pedido.
              Respondemos rapidamente.
            </p>
          </div>
        </div>
      </section>

      {/* Cards de contato */}
      <section className="py-16 lg:py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {infos.map((info) => (
              <Link
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={`${info.label}: ${info.value}`}
                className="group bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-7 h-7" />
                </div>
                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                <p className="text-base font-bold text-gray-900">
                  {info.value}
                </p>
              </Link>
            ))}
          </div>

          {/* Endereço e Horário */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3CBDAF]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#3CBDAF]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Endereço
                  </p>
                  <p className="text-sm text-gray-500">
                    Praça Wilson Sales, 44
                  </p>
                  <p className="text-sm text-gray-500">
                    Nova Suíça, Goiânia - GO
                  </p>
                  <p className="text-sm text-gray-500">CEP: 74280-370</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3CBDAF]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#3CBDAF]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Horário de Funcionamento
                  </p>
                  <p className="text-sm text-gray-500">
                    Seg a Sex: 8h às 18h
                  </p>
                  <p className="text-sm text-gray-500">Sáb: 8h às 13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}