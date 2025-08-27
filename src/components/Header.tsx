// src/components/Header.tsx
'use client'; // Necessário para usar o useState

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Importando os ícones

export default function Header() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Adicionando 'relative' para posicionar o menu dropdown
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-md relative">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-poppins text-2xl font-bold text-maranatha-blue">
          MARANATHA PET
        </Link>

        {/* Navegação para Desktop */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link href="#planos" className="font-medium text-gray-700 hover:text-maranatha-red transition-colors">
            Clube de Assinatura
          </Link>
          <Link href="/produtos" className="font-medium text-gray-700 hover:text-maranatha-red transition-colors">
            Produtos
          </Link>
          <Link href="/contato" className="font-medium text-gray-700 hover:text-maranatha-red transition-colors">
            Contato
          </Link>
        </nav>

        {/* Botão de Ação para Desktop */}
        <Link href="/login" className="hidden rounded-full bg-maranatha-blue px-6 py-2 font-bold text-white hover:bg-opacity-90 md:block">
          Minha Conta
        </Link>

        {/* Botão do Menu Hambúrguer para Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown para Mobile */}
      {isMenuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center space-y-4 py-4">
          <Link href="#planos" onClick={() => setIsMenuOpen(false)} className="font-medium text-gray-700 hover:text-maranatha-red transition-colors">
            Clube de Assinatura
          </Link>
          <Link href="/produtos" onClick={() => setIsMenuOpen(false)} className="font-medium text-gray-700 hover:text-maranatha-red transition-colors">
            Produtos
          </Link>
          <Link href="/contato" onClick={() => setIsMenuOpen(false)} className="font-medium text-gray-700 hover:text-maranatha-red transition-colors">
            Contato
          </Link>
          <Link href="/login" onClick={() => setIsMenuOpen(false)} className="rounded-full bg-maranatha-blue px-6 py-2 font-bold text-white hover:bg-opacity-90">
            Minha Conta
          </Link>
        </nav>
      )}
    </header>
  );
}