import { Card } from '@/components/ui/card';
import { Leaf, Flame, Pizza, IceCream } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CuisineCategoryProps {
  name: string;
  icon: 'Leaf' | 'Flame' | 'Pizza' | 'IceCream';
  color: string;
  imageUrl: string;
  onClick: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Flame,
  Pizza,
  IceCream,
};

export const CuisineCategory = ({ name, icon, color, imageUrl, onClick }: CuisineCategoryProps) => {
  const Icon = iconMap[icon];

  return (
    <Card 
      className="relative overflow-hidden rounded-xl cursor-pointer hover:ring-2 hover:ring-primary transition-all group"
      onClick={onClick}
    >
      <div className="relative h-40">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2">
          <Icon className="w-5 h-5 text-primary" />
          <span className="text-white font-semibold">{name}</span>
        </div>
      </div>
    </Card>
  );
};
