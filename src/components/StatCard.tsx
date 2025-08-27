// src/components/StatCard.tsx

import React from 'react';

// Definindo as propriedades que nosso componente aceitará
type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode; // Permite passar um componente de ícone
  color: string; // Cor para o ícone e a borda
};

export default function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    // O card em si, com sombra, bordas arredondadas e uma borda esquerda colorida
    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4`} style={{ borderColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={`text-3xl`} style={{ color: color }}>
          {icon}
        </div>
      </div>
    </div>
  );
}