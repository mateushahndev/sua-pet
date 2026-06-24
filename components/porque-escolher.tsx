import { Star, Users, Package, ThumbsUp } from "lucide-react";

const motivos = [
  {
    numero: "500+",
    label: "Famílias Atendidas",
    icone: Users,
  },
  {
    numero: "6+",
    label: "Anos de Confiança",
    icone: Star,
  },
  {
    numero: "1000+",
    label: "Produtos em Estoque",
    icone: Package,
  },
  {
    numero: "100%",
    label: "Satisfação Garantida",
    icone: ThumbsUp,
  },
];

export default function PorqueEscolher() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-40" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3CBDAF]/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-[#3CBDAF] font-semibold text-sm tracking-widest uppercase">
            Por que nos escolher
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Pode deixar seu pet sem medo
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Enquanto outros pet shops transferem culpa, somem no WhatsApp ou
            entregam produto vencido, a gente faz o contrário.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {motivos.map((motivo) => (
            <div
              key={motivo.label}
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#3CBDAF]/20 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#3CBDAF]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <motivo.icone className="w-7 h-7 text-[#3CBDAF]" />
              </div>
              <p className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">
                {motivo.numero}
              </p>
              <p className="text-sm text-gray-500">{motivo.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}