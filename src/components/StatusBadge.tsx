// src/components/StatusBadge.tsx

type StatusBadgeProps = {
  status: 'Ativa' | 'Pendente' | 'Inativa';
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const baseClasses = "px-3 py-1 text-xs font-medium rounded-full inline-block";
  
  const statusClasses = {
    'Ativa': 'bg-green-100 text-green-800',
    'Pendente': 'bg-yellow-100 text-yellow-800',
    'Inativa': 'bg-red-100 text-red-800',
  };

  return (
    <span className={`${baseClasses} ${statusClasses[status]}`}>
      {status}
    </span>
  );
}