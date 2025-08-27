import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
// Passo 1: Importe os novos componentes
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Clube de Assinatura Pet | Receba ração em casa, sem estresse',
  description: 'Faça parte do nosso clube e receba a ração do seu melhor amigo em casa com desconto e comodidade. Planos flexíveis e cancelamento a qualquer momento.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${poppins.variable} flex flex-col min-h-screen`}>
        {/* Passo 2: Adicione o Header aqui */}
        <Header />
        
        {/* O 'children' é o conteúdo da sua página (page.tsx) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Passo 3: Adicione o Footer aqui */}
        <Footer />
      </body>
    </html>
  )
}