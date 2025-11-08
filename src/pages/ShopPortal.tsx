import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

const mockOrders = [
  { id: 1, items: 'Masala Dosa x2, Idli x3', total: 190, time: '2 mins ago' },
  { id: 2, items: 'Fried Rice, Chilli Chicken', total: 200, time: '5 mins ago' },
  { id: 3, items: 'Cheese Pizza, French Fries', total: 190, time: '8 mins ago' },
];

export default function ShopPortal() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Shop Dashboard</h1>
          <p className="text-muted-foreground">Manage incoming orders</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Live Orders</h2>
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <Card key={order.id} className="p-6 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        Order #{order.id}
                      </h3>
                      <Badge variant="secondary">{order.time}</Badge>
                    </div>
                    <p className="text-muted-foreground">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">₹{order.total}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Check className="w-4 h-4 mr-2" />
                    Accept
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <X className="w-4 h-4 mr-2" />
                    Decline
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
