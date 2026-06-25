import { Truck, Shield, CreditCard } from "lucide-react";

const itens = [
  {
    icon: Shield,
    title: "Cuidado de Verdade",
    description:
      "Nada de pet voltar machucado ou estressado. Profissionais treinados que amam animais e tratam seu pet com o carinho que ele merece.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida e Confiável",
    description:
      "Chega no prazo certo, sem atraso, sem produto errado. Entrega em toda Boa Vista com agilidade pra você não ficar na mão.",
  },
  {
    icon: CreditCard,
    title: "Preço Justo e Transparente",
    description:
      "Parcele em até 6x sem juros. Sem letra miúda, sem venda casada, sem surpresa no valor final. O preço que você vê é o que você paga.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 relative">
      <div className="absolute inset-0 bg-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {itens.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center p-8 lg:p-10 rounded-2xl bg-white border border-gray-100 hover:border-[#3CBDAF]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#3CBDAF]/10 flex items-center justify-center mb-5 group-hover:bg-[#3CBDAF]/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-[#3CBDAF]" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}