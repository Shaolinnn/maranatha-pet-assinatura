// src/app/admin/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import StatCard from '@/components/StatCard';
import SubscriptionsTable from '@/components/SubscriptionsTable';
import NewSubscriptionModal from '@/components/NewSubscriptionModal';
import { CheckCircle2, Clock, DollarSign, CalendarDays, Plus } from 'lucide-react';
import { Product, Customer, SubscriptionWithDetails } from '@/types';

type FormattedSubscription = {
  customer: { name: string; avatarUrl: string | null; };
  product: string;
  value: string;
  dueDate: string;
  status: 'Ativa' | 'Pendente' | 'Inativa'; // O tipo específico que queremos
};

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState<FormattedSubscription[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    setIsLoading(true);
    try {
      const [productsRes, customersRes, subscriptionsRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/customers'),
        fetch('/api/subscriptions')
      ]);
      
      const productsData: Product[] = await productsRes.json();
      const customersData: Customer[] = await customersRes.json();
      const subscriptionsData: SubscriptionWithDetails[] = await subscriptionsRes.json();

      setProducts(productsData);
      setCustomers(customersData);

      const formattedSubscriptions = subscriptionsData.map((sub) => ({
        customer: {
          name: sub.customer.name,
          avatarUrl: sub.customer.avatarUrl || `https://ui-avatars.com/api/?name=${sub.customer.name.charAt(0)}`
        },
        product: sub.product.name,
        value: `R$ ${String(sub.price)}`,
        dueDate: `Todo dia ${sub.dueDay}`,
        // AQUI ESTÁ A CORREÇÃO: Usamos 'as' para afirmar o tipo
        status: (sub.status === 'ACTIVE' ? 'Ativa' : (sub.status === 'PENDING' ? 'Pendente' : 'Inativa')) as 'Ativa' | 'Pendente' | 'Inativa',
      }));
      
      setSubscriptions(formattedSubscriptions);

    } catch (error) {
      console.error("Falha ao buscar dados para o dashboard:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleSubscriptionCreated = () => {
    setIsModalOpen(false);
    fetchData();
  }

  if (isLoading) {
    return <div>Carregando dashboard...</div>;
  }

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
        <StatCard title="Assinaturas Ativas" value={subscriptions.filter(s => s.status === 'Ativa').length.toString()} icon={<CheckCircle2 />} color="#34a853" />
        <StatCard title="Pendentes de Pagamento" value={subscriptions.filter(s => s.status === 'Pendente').length.toString()} icon={<Clock />} color="#fbbc04" />
        <StatCard title="Receita Mensal" value="R$ --" icon={<DollarSign />} color="#4285f4" />
        <StatCard title="Vencimento Hoje" value="--" icon={<CalendarDays />} color="#ea4335" />
      </div>

      <SubscriptionsTable subscriptions={subscriptions} />
      
      <NewSubscriptionModal 
        isOpen={isModalOpen} 
        onClose={handleSubscriptionCreated}
        products={products}
        customers={customers}
      />
    </div>
  );
}