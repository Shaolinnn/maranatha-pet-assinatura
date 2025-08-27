// src/components/ProductCarousel.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/types'; // Importando nosso tipo centralizado

type ProductCarouselProps = {
  products: Product[];
};

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] mx-4" key={product.id}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <div className="relative h-60 w-full">
                  <Image src={product.imageUrl || 'https://via.placeholder.com/400x400.png?text=Sem+Imagem'} alt={product.name} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="font-inter text-sm text-gray-500">{product.category}</p>
                  <h3 className="font-poppins text-xl font-bold text-maranatha-blue mt-2">
                    {product.name}
                  </h3>
                  <div className="flex-grow" />
                  <div className="mt-6 flex justify-between items-center">
                    <p className="font-poppins text-2xl font-bold text-gray-800">
                      R${String(product.basePrice)}
                      <span className="text-base font-medium text-gray-600">/mês</span>
                    </p>
                    <button className="bg-maranatha-red text-white font-bold py-2 px-5 rounded-full transition-transform hover:scale-105">
                      Assinar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 left-[-1rem] -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:scale-110 transition-transform" onClick={scrollPrev}>
        <ChevronLeft className="text-maranatha-blue" />
      </button>
      <button className="absolute top-1/2 right-[-1rem] -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:scale-110 transition-transform" onClick={scrollNext}>
        <ChevronRight className="text-maranatha-blue" />
      </button>
    </div>
  );
}