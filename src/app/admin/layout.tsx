// src/app/admin/layout.tsx

import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    // Usamos flex para criar o layout de duas colunas
    <div className="flex min-h-screen bg-gray-100 font-inter">
      
      <Sidebar />


      {/* Área de conteúdo principal que será flexível */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {children} {/* As páginas (como o dashboard) serão renderizadas aqui */}
      </main>
      
    </div>
  );
}