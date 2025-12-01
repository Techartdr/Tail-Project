// src/app/data/atelier-data.ts

export type OrderStatus = 'completed' | 'in-progress' | 'pending';

export interface OrderStep {
  id: string;
  name: string;
  description: string;
  status: OrderStatus;
}

export interface OrderDetails {
  id: string;
  customerName: string;
  productName: string;
  estimatedCompletion: string;
  steps: OrderStep[];
}

const MOCK_ORDERS: OrderDetails[] = [
  {
    id: 'order-123',
    customerName: 'Jean Dupont',
    productName: 'Queue "Sérénité" (Blanche)',
    estimatedCompletion: '15 novembre 2025',
    steps: [
      { id: '1', name: 'Validation de la commande', description: 'Paiement reçu et design validé.', status: 'completed' },
      { id: '2', name: 'Impression 3D du noyau', description: 'Les pièces structurelles sont en cours d\'impression.', status: 'completed' },
      { id: '3', name: 'Assemblage mécatronique', description: 'Les servos et le microcontrôleur sont en cours de montage.', status: 'in-progress' },
      { id: '4', name: 'Confection de la fourrure', description: 'Découpe et couture du revêtement extérieur.', status: 'pending' },
      { id: '5', name: 'Tests et calibration', description: 'Vérification des mouvements et de la connectivité.', status: 'pending' },
      { id: '6', name: 'Expédition', description: 'Votre colis est en route !', status: 'pending' },
    ]
  },
  {
    id: 'order-456',
    customerName: 'Alice Martin',
    productName: 'Queue "Dynamique" (Rousse)',
    estimatedCompletion: '10 novembre 2025',
    steps: [
      { id: '1', name: 'Validation de la commande', description: '...', status: 'completed' },
      { id: '2', name: 'Impression 3D du noyau', description: '...', status: 'completed' },
      { id: '3', name: 'Assemblage mécatronique', description: '...', status: 'completed' },
      { id: '4', name: 'Confection de la fourrure', description: '...', status: 'completed' },
      { id: '5', name: 'Tests et calibration', description: 'En cours...', status: 'in-progress' },
      { id: '6', name: 'Expédition', description: '...', status: 'pending' },
    ]
  }
];

export async function getOrderDetails(orderId: string): Promise<OrderDetails | null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const order = MOCK_ORDERS.find(o => o.id === orderId);
  return order || null;
}