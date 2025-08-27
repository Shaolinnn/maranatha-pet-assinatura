// src/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

// Você pode adicionar mais ícones de pagamento se necessário
// import { CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-maranatha-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6">

        {/* Grade de conteúdo principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* Coluna 1 - Logo e sobre */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/maranathaLogo.png" alt="Petshop Maranatha" width={150} height={100} className="mb-6" />
            <p className="text-gray-300 mb-4 italic">
              Cuidando do seu pet com amor desde 1999
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 03.064.701/0001-82
            </p>
          </div>

          {/* Coluna 2 - Links da Página */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#beneficios" className="text-gray-300 hover:text-maranatha-red transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-gray-300 hover:text-maranatha-red transition-colors">Como funciona</a></li>
              <li><a href="#planos" className="text-gray-300 hover:text-maranatha-red transition-colors">Planos</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-maranatha-red transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Institucional */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Institucional</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-maranatha-red transition-colors">Sobre nós</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-maranatha-red transition-colors">Nossas lojas</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-maranatha-red transition-colors">Política de privacidade</Link></li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Atendimento</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start justify-center md:justify-start">
                <Phone className="flex-shrink-0 w-5 h-5 text-maranatha-red mr-3 mt-1" />
                <span>(67) 4042-4262</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <a href="mailto:lojavirtual@maranathapetshop.com.br" className="hover:text-maranatha-red transition-colors flex items-start">
                  <Mail className="flex-shrink-0 w-5 h-5 text-maranatha-red mr-3 mt-1" />
                  <span>lojavirtual@maranathapetshop.com.br</span>
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="flex-shrink-0 w-5 h-5 text-maranatha-red mr-3 mt-1" />
                <span>Avenida Capibaribe, 822 - Campo Grande/MS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <hr className="my-8 border-white/20" />

        {/* Seção inferior - Redes Sociais e Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Petshop Maranatha. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
                <a href="https://www.facebook.com/maranathapetshopp" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-maranatha-red transition-colors"><Facebook /></a>
                <a href="https://www.instagram.com/maranathapetshop/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-maranatha-red transition-colors"><Instagram /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="text-white hover:text-maranatha-red transition-colors"><Youtube /></a>
            </div>
        </div>

      </div>
    </footer>
  );
}