// src/types/index.ts

// Definindo o tipo para um único produto, para ser usado em todo o app
export type Product = {
  id: number;
  name: string;
  category: string;
  imageUrl: string | null;
  basePrice: string; 
};