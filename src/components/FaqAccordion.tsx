// src/components/FaqAccordion.tsx
'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b-2 border-maranatha-beige-dark">
          <button
            onClick={() => handleClick(index)}
            className="flex justify-between items-center w-full py-5 text-left"
          >
            <span className="font-poppins font-semibold text-lg text-maranatha-blue">
              {item.question}
            </span>
            {openIndex === index ? (
              <Minus className="h-6 w-6 text-maranatha-blue" />
            ) : (
              <Plus className="h-6 w-6 text-maranatha-blue" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="pb-5 pr-8 font-inter text-gray-700">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}