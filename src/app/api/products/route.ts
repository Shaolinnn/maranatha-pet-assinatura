// src/app/api/products/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Importando nossa instância do Prisma

export async function GET() {
  try {
    // Usando o Prisma Client para buscar TODOS os produtos no banco de dados
    const products = await prisma.product.findMany();

    // Retornando os produtos encontrados em formato JSON
    return NextResponse.json(products);

  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    // Em caso de erro, retorna uma mensagem de erro com status 500
    return new NextResponse('Erro interno do servidor', { status: 500 });
  }
}