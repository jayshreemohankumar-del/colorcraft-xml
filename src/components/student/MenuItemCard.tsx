import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { MenuItem } from '@/data/menuData';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
  return (
    <Card className="overflow-hidden rounded-xl hover:ring-2 hover:ring-primary transition-all">
      <div className="flex gap-4 p-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          {item.isVeg && (
            <div className="absolute top-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
          )}
        </div>
        
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-foreground">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.category}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">₹{item.price}</span>
            <Button 
              size="icon" 
              className="rounded-full bg-primary hover:bg-primary/90"
              onClick={() => onAddToCart(item)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
