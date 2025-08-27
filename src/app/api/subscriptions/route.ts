// src/app/api/subscriptions/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Função para lidar com requisições POST
export async function POST(request: Request) {
  try {
    // 1. Pega os dados enviados pelo formulário no frontend
    const body = await request.json();
    const { customerId, productId, dueDay, price, mercadoPagoId, status } = body;

    // 2. Validação simples (em um projeto real, seria mais robusta)
    if (!customerId || !productId || !dueDay || !price || !mercadoPagoId) {
      return new NextResponse('Dados incompletos', { status: 400 });
    }

    // 3. Usa o Prisma para CRIAR uma nova assinatura no banco de dados
    const newSubscription = await prisma.subscription.create({
      data: {
        customerId: Number(customerId),
        productId: Number(productId),
        dueDay: Number(dueDay),
        price: Number(price),
        mercadoPagoId: mercadoPagoId,
        status: status || 'ACTIVE', // Define 'ACTIVE' como padrão se não for enviado
      },
    });

    // 4. Retorna uma resposta de sucesso com os dados criados
    return NextResponse.json(newSubscription, { status: 201 }); // 201 = Created

  } catch (error) {
    console.error("Erro ao criar assinatura:", error);
    return new NextResponse('Erro interno do servidor', { status: 500 });
  }
}