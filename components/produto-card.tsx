import Link from "next/link";
import Image from "next/image";
import { Phone, Star } from "lucide-react";

interface ProdutoCardProps {
  nome: string;
  preco: string;
  parcela: string;
  categoria: string;
  imagem?: string;
  oferta?: boolean;
}

export function ProdutoCard({
  nome,
  preco,
  parcela,
  categoria,
  imagem,
  oferta,
}: ProdutoCardProps) {
  return (
    <div className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
      <div className="relative w-full h-[300px] overflow-hidden">
        {imagem ? (
          <Image
            src={imagem}
            alt={nome}
            width={400}
            height={300}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-400 text-sm">
            <p>Sem imagem</p>
          </div>
        )}
        {oferta && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-red-500/25 flex items-center gap-1 z-10">
            <Star className="w-3 h-3 fill-white" />
            Oferta
          </div>
        )}
      </div>

      <div className="p-5 lg:p-6 space-y-4">
        <p className="text-xs font-semibold text-[#3CBDAF] uppercase tracking-widest">
          {categoria}
        </p>
        <h3 className="font-semibold text-gray-900 leading-snug min-h-[48px] group-hover:text-[#3CBDAF] transition-colors">
          {nome}
        </h3>
        <div>
          <p className="text-2xl lg:text-3xl font-extrabold text-gray-900">
            {preco}
          </p>
          <p className="text-sm text-gray-500 mt-0.5">{parcela}</p>
        </div>
        <Link
          href="https://wa.me/5511199999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl text-sm font-semibold w-full shadow-md shadow-[#25D366]/20 hover:shadow-lg hover:shadow-[#25D366]/30 transition-all"
        >
          <Phone className="w-4 h-4" />
          Consultar no WhatsApp
        </Link>
      </div>
    </div>
  );
}