// src/types/index.ts

// Tipo para o modelo Product
export type Product = {
  id: number;
  name: string;
  category: string;
  imageUrl: string | null;
  basePrice: string;
};

// Tipo para o modelo Customer (NOVO)
export type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  avatarUrl: string | null;
  createdAt: Date;
};

// Tipo para a Assinatura com detalhes do cliente e produto incluídos (NOVO)
export type SubscriptionWithDetails = {
  id: number;
  dueDay: number;
  price: number; // Prisma Decimal é serializado como número no JSON
  status: 'ACTIVE' | 'PENDING' | 'INACTIVE';
  mercadoPagoId: string;
  createdAt: Date;
  customer: Customer; // Objeto completo do cliente
  product: Product;   // Objeto completo do produto
};