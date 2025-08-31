// src/app/api/customers/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: {
        name: 'asc' // Opcional: retorna os clientes em ordem alfabética
      }
    });
    return NextResponse.json(customers);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return new NextResponse('Erro interno do servidor', { status: 500 });
  }
}