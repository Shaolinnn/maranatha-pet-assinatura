// src/app/admin/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import StatCard from '@/components/StatCard';
import SubscriptionsTable from '@/components/SubscriptionsTable';
import NewSubscriptionModal from '@/components/NewSubscriptionModal';
import { CheckCircle2, Clock, DollarSign, CalendarDays, Plus } from 'lucide-react';

// Tipos para nossos dados, para garantir a consistência
type Product = { id: number; name: string; };
type Customer = { id: number; name: string; };
type Subscription = {
  customer: { name: string; avatarUrl: string; };
  product: string;
  value: string;
  dueDate: string;
  status: 'Ativa' | 'Pendente' | 'Inativa';
};

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estados para guardar os dados que virão da API
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);

  // useEffect para buscar os dados quando o componente carregar
  useEffect(() => {
    // Simulação de fetch de dados. Em um app real, aqui fariam as chamadas à API.
    const mockSubscriptions = [
      { customer: { name: 'Maria Silva', avatarUrl: 'https://ui-avatars.com/api/?name=Maria+Silva' }, product: 'Ração Premium Cães Adultos - 15kg', value: 'R$ 159,90', dueDate: '28/08/2025', status: 'Ativa' as const },
      // ...outros dados mock
    ];
    const mockProducts = [{id: 1, name: 'Ração Premium Cães Adultos - 15kg'}, {id: 2, name: 'Ração Especial Gatos Castrados - 10kg'}];
    const mockCustomers = [{id: 1, name: 'Maria Silva'}, {id: 2, name: 'João Santos'}];

    setSubscriptions(mockSubscriptions);
    setProducts(mockProducts);
    setCustomers(mockCustomers);
  }, []);


  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-poppins text-3xl font-bold text-gray-800">Dashboard</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-maranatha-blue text-white font-bold py-2 px-4 rounded-md flex items-center hover:bg-opacity-90 transition-colors"
        >
          <Plus size={18} className="mr-2" />
          Nova Assinatura
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <StatCard title="Assinaturas Ativas" value="24" icon={<CheckCircle2 />} color="#34a853" />
        <StatCard title="Pendentes de Pagamento" value="8" icon={<Clock />} color="#fbbc04" />
        <StatCard title="Receita Mensal" value="R$ 3.240,00" icon={<DollarSign />} color="#4285f4" />
        <StatCard title="Vencimento Hoje" value="3" icon={<CalendarDays />} color="#ea4335" />
      </div>

      <SubscriptionsTable subscriptions={subscriptions} />
      
      {/* Passando os dados para o modal como props */}
      <NewSubscriptionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        products={products}
        customers={customers}
      />
    </div>
  );
}