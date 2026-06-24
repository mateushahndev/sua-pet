import Link from "next/link";
import { Phone, MessageCircle, Shield } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#3CBDAF]">
      <div className="absolute inset-0 bg-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <MessageCircle className="w-16 h-16 mx-auto opacity-80" />
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">
            Chega de pet shop que some no WhatsApp
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
            A gente responde rápido, entrega no prazo e trata seu pet como filho
            da família. Fale agora e comprove.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="https://wa.me/556292905701"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar no WhatsApp"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-[#25D366]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-6 h-6" />
              Chamar no WhatsApp
            </Link>
            <Link
              href="/contato"
              aria-label="Ver outras formas de contato"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:-translate-y-0.5"
            >
              Outras Formas de Contato
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm pt-2">
            <Shield className="w-4 h-4" />
            Satisfação garantida ou devolvemos seu dinheiro
          </div>
        </div>
      </div>
    </section>
  );
}