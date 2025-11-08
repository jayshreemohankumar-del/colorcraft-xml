import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { OrderStatus } from '@/hooks/useCart';

interface OrderTimelineProps {
  status: OrderStatus;
}

const statuses: OrderStatus[] = ['Placed', 'Preparing', 'Ready', 'Delivered'];

export const OrderTimeline = ({ status }: OrderTimelineProps) => {
  const currentIndex = statuses.indexOf(status);

  return (
    <Card className="p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-6 text-foreground">Your Order Status</h2>
      <div className="space-y-4">
        {statuses.map((s, index) => {
          const isActive = index <= currentIndex;
          const isCurrent = index === currentIndex;
          
          return (
            <div key={s} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              } ${isCurrent ? 'ring-4 ring-primary/30' : ''}`}>
                {isActive && <Check className="w-5 h-5" />}
              </div>
              <div>
                <div className={`font-semibold ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {s}
                </div>
                {isCurrent && <div className="text-sm text-primary">In progress...</div>}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
