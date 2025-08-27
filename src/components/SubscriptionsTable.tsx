// src/components/SubscriptionsTable.tsx

import Image from 'next/image';
import StatusBadge from './StatusBadge';
import { MoreVertical, MessageSquare, Edit } from 'lucide-react';

// Definindo o tipo para um objeto de assinatura
type Subscription = {
  customer: {
    name: string;
    avatarUrl: string;
  };
  product: string;
  value: string;
  dueDate: string;
  status: 'Ativa' | 'Pendente' | 'Inativa';
};

type SubscriptionsTableProps = {
  subscriptions: Subscription[];
};

export default function SubscriptionsTable({ subscriptions }: SubscriptionsTableProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="font-poppins text-xl font-bold text-gray-800 mb-4">Assinaturas Ativas</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-gray-100">
              <th className="py-3 px-4 font-semibold text-sm text-gray-600">Cliente</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-600">Produto</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-600">Valor</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-600">Próximo Venc.</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-600">Status</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-600">Ações</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <Image src={sub.customer.avatarUrl} alt={sub.customer.name} width={40} height={40} className="rounded-full mr-3" />
                    <span className="font-medium">{sub.customer.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-700">{sub.product}</td>
                <td className="py-3 px-4 text-gray-700">{sub.value}</td>
                <td className="py-3 px-4 text-gray-700">{sub.dueDate}</td>
                <td className="py-3 px-4">
                  <StatusBadge status={sub.status} />
                </td>
                <td className="py-3 px-4">
                  <button className="text-green-600 hover:text-green-800 mr-2" title="Enviar Link WhatsApp">
                    <MessageSquare size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-800" title="Editar Assinatura">
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}