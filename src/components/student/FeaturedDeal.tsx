import { Card } from '@/components/ui/card';

export const FeaturedDeal = () => {
  return (
    <Card className="relative overflow-hidden rounded-2xl">
      <div className="relative h-64">
        <img
          src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=400&fit=crop"
          alt="Mess Hall Special"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-2xl font-bold text-white mb-2">Mess Hall Special</h2>
          <p className="text-gray-200">Today's special offer — fresh, fast, and flavorful!</p>
        </div>
      </div>
    </Card>
  );
};
