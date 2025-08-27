// src/app/page.tsx

import Image from 'next/image';
import { Truck, PiggyBank, CalendarCheck } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';
import ProductSection from '@/components/ProductSection';
import prisma from '@/lib/prisma'; // Passo 1: Importar o Prisma diretamente

// Dados para a seção de FAQ (pode vir do banco de dados no futuro)
const faqItems = [
  {
    question: "Posso cancelar minha assinatura quando quiser?",
    answer: "Sim! Você tem flexibilidade total para cancelar, pausar ou alterar sua assinatura a qualquer momento, sem nenhuma taxa ou multa. O controle está sempre nas suas mãos."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "O pagamento é feito de forma automática e segura através do seu cartão de crédito, processado pelo Mercado Pago. A cobrança ocorre sempre no dia do mês que você escolheu ao assinar."
  },
  {
    question: "Posso pular uma entrega se for viajar?",
    answer: "Com certeza! Em seu painel de cliente, você terá a opção de 'pular' a próxima entrega com apenas um clique, e a cobrança daquele mês não será realizada."
  },
  {
    question: "E se eu quiser trocar a ração da assinatura?",
    answer: "É muito simples. Basta acessar sua área de assinante, cancelar o plano atual e iniciar um novo com a ração que desejar. Tudo isso sem nenhuma burocracia."
  },
];

export default async function Home() {
  // Passo 2: Buscar os dados diretamente do banco de dados usando o Prisma
  // Isso acontece no servidor antes da página ser enviada para o navegador.
  const products = await prisma.product.findMany();

  return (
    <main>
      {/* Seção 1: Hero Section */}
      <section className="w-full min-h-screen bg-maranatha-beige flex items-center py-20 lg:py-0">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="font-poppins text-sm font-bold text-maranatha-blue tracking-widest uppercase mb-2">
              🐾 Clube de Assinatura Maranatha
            </p>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-maranatha-blue leading-tight mb-4">
              A Ração do Seu Melhor Amigo Chega Sozinha. E com Desconto.
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-800 font-medium mb-8">
              Faça parte do nosso Clube de Assinatura, escolha as marcas que seu pet ama e receba em casa, na data ideal para você. Simples, automático e sem estresse.
            </p>
            <a href="#planos" className="inline-block bg-maranatha-red text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 shadow-maranatha-red text-lg">
              CONHECER PLANOS
            </a>
          </div>
          <div className="flex justify-center">
            <Image 
              src="https://images.pexels.com/photos/5749797/pexels-photo-5749797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dono feliz com seu cão e um pacote de ração"
              width={600}
              height={600}
              className="rounded-lg shadow-maranatha-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Seção 2: Benefícios */}
      <section id="beneficios" className="w-full bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-maranatha-blue">
            Sua rotina mais leve. Seu pet mais feliz.
          </h2>
          <p className="font-inter mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Nosso clube foi pensado para eliminar suas preocupações, trazendo mais praticidade e economia para o seu dia a dia.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-maranatha-red/10 p-4 rounded-full">
                <Truck className="h-10 w-10 text-maranatha-red" />
              </div>
              <h3 className="font-poppins text-xl font-bold text-maranatha-blue mt-6 mb-2">
                Receba em Casa, Sem Esforço
              </h3>
              <p className="font-inter text-gray-600">
                Chega de correr para o pet shop de última hora ou carregar pacotes pesados. Nós levamos a ração favorita do seu pet até a sua porta.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-maranatha-red/10 p-4 rounded-full">
                <PiggyBank className="h-10 w-10 text-maranatha-red" />
              </div>
              <h3 className="font-poppins text-xl font-bold text-maranatha-blue mt-6 mb-2">
                Economize em Todo Pedido
              </h3>
              <p className="font-inter text-gray-600">
                Ser membro do nosso clube significa ter desconto garantido em todas as entregas da sua assinatura. Cuidar bem do seu pet agora pesa menos no bolso.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-maranatha-red/10 p-4 rounded-full">
                <CalendarCheck className="h-10 w-10 text-maranatha-red" />
              </div>
              <h3 className="font-poppins text-xl font-bold text-maranatha-blue mt-6 mb-2">
                Você no Controle, Sempre
              </h3>
              <p className="font-inter text-gray-600">
                Vai viajar? Precisa alterar a data ou o produto? Pause, altere ou cancele sua assinatura quando quiser, sem burocracia e sem multas.
              </p>
            </div>
          </div>
        </div>
      </section>
    
      {/* Seção 3: Como Funciona */}
      <section id="como-funciona" className="w-full bg-maranatha-beige py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-maranatha-blue">
            Ter essa tranquilidade é fácil. Veja como:
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-maranatha-blue/10">
                <span className="font-poppins text-4xl font-bold text-maranatha-blue">1</span>
              </div>
              <h3 className="font-poppins text-xl font-bold text-maranatha-blue mt-6 mb-2">
                Escolha a Ração
              </h3>
              <p className="font-inter text-gray-600">
                Navegue por nossa seleção de rações e escolha a preferida do seu campeão.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-maranatha-blue/10">
                <span className="font-poppins text-4xl font-bold text-maranatha-blue">2</span>
              </div>
              <h3 className="font-poppins text-xl font-bold text-maranatha-blue mt-6 mb-2">
                Personalize a Entrega
              </h3>
              <p className="font-inter text-gray-600">
                Defina a frequência (ex: a cada 30 dias) e o melhor dia do mês para a cobrança e entrega.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-maranatha-blue/10">
                <span className="font-poppins text-4xl font-bold text-maranatha-blue">3</span>
              </div>
              <h3 className="font-poppins text-xl font-bold text-maranatha-blue mt-6 mb-2">
                Relaxe e Aproveite
              </h3>
              <p className="font-inter text-gray-600">
                Pronto! A cobrança é automática no seu cartão e nós cuidamos para que a ração chegue sempre na data certa.
              </p>
            </div>
          </div>
        </div>
      </section>
    
      {/* Seção 4: Catálogo de Produtos */}
      {/* Passo 3: Passar os dados serializados para o Componente de Cliente */}
      <ProductSection initialProducts={JSON.parse(JSON.stringify(products))} />

      {/* Seção 5: FAQ */}
      <section id="faq" className="w-full bg-maranatha-beige py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-maranatha-blue">
            Ainda tem dúvidas? A gente responde.
          </h2>
          <p className="font-inter mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Separamos as perguntas mais comuns para te ajudar a tomar a melhor decisão para você e seu pet.
          </p>
          <div className="mt-12">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </main>
  );
}