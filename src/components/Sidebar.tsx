// src/components/Sidebar.tsx
'use client'; // Usaremos hooks do Next.js para saber a rota ativa

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Package, Calendar, BarChart2, Settings } from 'lucide-react';

// Array para facilitar a criação dos links
const navLinks = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: Home },
  { name: 'Clientes', href: '/admin/clientes', icon: Users },
  { name: 'Produtos', href: '/admin/produtos', icon: Package },
  { name: 'Agenda', href: '/admin/agenda', icon: Calendar },
  { name: 'Relatórios', href: '/admin/relatorios', icon: BarChart2 },
  { name: 'Configurações', href: '/admin/configuracoes', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname(); // Hook para saber a URL atual

  return (
    <aside className="w-64 flex-shrink-0 bg-maranatha-blue p-6 hidden md:block">
      <div className="text-white font-poppins font-bold text-2xl mb-10 text-center">
        PETVIP Admin
      </div>
      
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center p-3 my-1 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white' // Estilo do link ativo
                      : 'text-gray-300 hover:bg-white/10 hover:text-white' // Estilo padrão
                  }`}
                >
                  <link.icon className="w-5 h-5 mr-3" />
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}