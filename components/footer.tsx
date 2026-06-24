import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Coluna 1 - Links */}
          <div>
            <div className="bg-white rounded-xl p-3 inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Via Pet"
                width={140}
                height={66}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Sua loja pet favorita em Goiânia. Produtos de qualidade e
              atendimento especializado desde 2018.
            </p>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#3CBDAF] transition-colors"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/politica-de-privacidade"
                className="text-sm text-gray-400 hover:text-[#3CBDAF] transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="text-sm text-gray-400 hover:text-[#3CBDAF] transition-colors"
              >
                Termos de Uso
              </Link>
            </nav>
          </div>

          {/* Coluna 2 - Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <Link
                href="tel:6230886233"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#3CBDAF] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#3CBDAF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3CBDAF]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#3CBDAF]" />
                </div>
                (62) 3088-6233
              </Link>
              <Link
                href="https://wa.me/556292905701"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#3CBDAF] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#3CBDAF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3CBDAF]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#3CBDAF]" />
                </div>
                (62) 9 9290-5701
              </Link>
              <Link
                href="mailto:contato@viapet.com.br"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#3CBDAF] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#3CBDAF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3CBDAF]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#3CBDAF]" />
                </div>
                contato@viapet.com.br
              </Link>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-[#3CBDAF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#3CBDAF]" />
                </div>
                <span>
                  Praça Wilson Sales, 44 - Nova Suíça
                  <br />
                  Goiânia - GO | CEP: 74280-370
                </span>
              </div>
            </div>
          </div>

          {/* Coluna 3 - Redes */}
          <div>
            <h4 className="text-lg font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-3">
            <Link
              href="https://www.facebook.com/viapetnovasuica/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-[#3CBDAF] hover:scale-110 transition-all"
              aria-label="Facebook da Via Pet"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/viapet/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-[#3CBDAF] hover:scale-110 transition-all"
              aria-label="Instagram da Via Pet"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/556292905701"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-[#3CBDAF] hover:scale-110 transition-all"
              aria-label="WhatsApp da Via Pet"
            >
              <FaWhatsapp className="w-5 h-5" />
            </Link>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Via Pet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}