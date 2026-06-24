"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Via Pet - Página inicial">
            <Image
              src="/logo.png"
              alt="Via Pet"
              width={200}
              height={95}
              className="h-16 lg:h-[72px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#3CBDAF] px-4 py-2 rounded-lg hover:bg-[#3CBDAF]/5 transition-all"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://wa.me/556292905701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-[#25D366]/20 hover:shadow-lg hover:shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
              aria-label="Fale conosco pelo WhatsApp"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600"
            aria-label="Abrir menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-[#3CBDAF] transition-colors py-3 px-3 rounded-lg hover:bg-[#3CBDAF]/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/556292905701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl text-sm font-semibold mt-2 shadow-md shadow-[#25D366]/20"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}