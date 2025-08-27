// src/components/NewSubscriptionModal.tsx
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

// Tipos para os dados que o modal recebe
type Product = { id: number; name: string; };
type Customer = { id: number; name: string; };

// AQUI ESTÁ A CORREÇÃO: Definimos que o componente recebe 'products' e 'customers'
type NewSubscriptionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  customers: Customer[];
};

export default function NewSubscriptionModal({ isOpen, onClose, products, customers }: NewSubscriptionModalProps) {
  // Estados para cada campo do formulário
  const [customerId, setCustomerId] = useState('');
  const [productId, setProductId] = useState('');
  const [price, setPrice] = useState('');
  const [dueDay, setDueDay] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId,
          productId,
          price,
          dueDay,
          mercadoPagoId: `mp_mock_${Date.now()}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao criar assinatura');
      }

      alert('Assinatura criada com sucesso!');
      onClose();
      
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao criar a assinatura.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-poppins text-xl font-bold text-gray-800">Nova Assinatura</h2>
          <button onClick={onClose}><X size={24} /></button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
              <select value={customerId} onChange={(e) => setCustomerId(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" required>
                <option value="" disabled>Selecione um cliente</option>
                {customers.map(customer => (
                  <option key={customer.id} value={customer.id}>{customer.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Produto</label>
              <select value={productId} onChange={(e) => setProductId(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" required>
                <option value="" disabled>Selecione um produto</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>{product.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Valor Mensal</label>
              <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="159.90" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Dia do Vencimento</label>
              <input type="number" min="1" max="31" value={dueDay} onChange={(e) => setDueDay(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Ex: 15" required />
            </div>
          </div>
          <div className="flex justify-end items-center p-4 border-t space-x-3">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-300">Cancelar</button>
            <button type="submit" className="bg-maranatha-blue text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90" disabled={isLoading}>
              {isLoading ? 'Salvando...' : 'Salvar Assinatura'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}