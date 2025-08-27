'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProductCarousel from '@/components/ProductCarousel';
import { Product } from '@/types'; // Importando nosso tipo centralizado

type ProductSectionProps = {
  initialProducts: Product[];
};

export default function ProductSection({ initialProducts }: ProductSectionProps) {
  // 1. O estado que guarda o filtro ativo
  const [filter, setFilter] = useState('Todos');

  // ADICIONE ESTE CONSOLE.LOG
  console.log("Componente renderizou. Filtro atual:", filter);

  // ADICIONE ESTE CONSOLE.LOG
  console.log("Lista original recebida (initialProducts):", initialProducts);
  


  // 2. A lógica que cria a lista filtrada a cada re-renderização
  const filteredProducts = initialProducts.filter(product =>
    filter === 'Todos' ? true : product.category === filter
  );
  console.log("Lista após a filtragem (filteredProducts):", filteredProducts);

  return (
    <section id="planos" className="w-full bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-maranatha-blue">
          Escolha o Plano Perfeito para o Seu Pet
        </h2>
        <p className="font-inter mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Selecione a ração preferida do seu amigo. Todos os planos contam com desconto e entrega programada.
        </p>

        {/* 3. Os botões que atualizam o estado 'filter' com o onClick */}
        <div className="mt-10 flex justify-center space-x-4">
            <button onClick={() => setFilter('Todos')} className={`font-bold py-2 px-6 rounded-full transition-all hover:scale-105 ${filter === 'Todos' ? 'bg-maranatha-blue text-white' : 'bg-white border-2 border-maranatha-blue text-maranatha-blue'}`}>Todos</button>
            <button onClick={() => setFilter('Para Cães')} className={`font-bold py-2 px-6 rounded-full transition-all hover:scale-105 ${filter === 'Para Cães' ? 'bg-maranatha-blue text-white' : 'bg-white border-2 border-maranatha-blue text-maranatha-blue'}`}>Para Cães</button>
            <button onClick={() => setFilter('Para Gatos')} className={`font-bold py-2 px-6 rounded-full transition-all hover:scale-105 ${filter === 'Para Gatos' ? 'bg-maranatha-blue text-white' : 'bg-white border-2 border-maranatha-blue text-maranatha-blue'}`}>Para Gatos</button>
        </div>

        {/* 4. A renderização condicional que usa o estado 'filter' */}
        <div className="mt-16">
          {filter === 'Todos' ? (
            <ProductCarousel products={initialProducts} />
          ) : (
            // 5. O grid que usa a lista 'filteredProducts' para renderizar os cards
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                  <div className="relative h-60 w-full">
                    <Image src={product.imageUrl || 'https://via.placeholder.com/400x400.png?text=Sem+Imagem'} alt={product.name} layout="fill" objectFit="cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="font-inter text-sm text-gray-500">{product.category}</p>
                    <h3 className="font-poppins text-xl font-bold text-maranatha-blue mt-2">{product.name}</h3>
                    <div className="flex-grow" />
                    <div className="mt-6 flex justify-between items-center">
                      <p className="font-poppins text-2xl font-bold text-gray-800">
                        R${String(product.basePrice)}
                        <span className="text-base font-medium text-gray-600">/mês</span>
                      </p>
                      <button className="bg-maranatha-red text-white font-bold py-2 px-5 rounded-full transition-transform hover:scale-105">Assinar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}