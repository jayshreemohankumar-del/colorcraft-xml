import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, ShoppingCart } from 'lucide-react';
import { FeaturedDeal } from '@/components/student/FeaturedDeal';
import { CuisineCategory } from '@/components/student/CuisineCategory';
import { MenuItemCard } from '@/components/student/MenuItemCard';
import { CartItemCard } from '@/components/student/CartItemCard';
import { OrderTimeline } from '@/components/student/OrderTimeline';
import { BottomNav } from '@/components/student/BottomNav';
import { useCart } from '@/hooks/useCart';
import { mockMenuItems } from '@/data/menuData';

const cuisines = [
  { name: 'South Indian', icon: 'Leaf' as const, color: 'green', imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop' },
  { name: 'Chinese', icon: 'Flame' as const, color: 'red', imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
  { name: 'Continental', icon: 'Pizza' as const, color: 'yellow', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
  { name: 'Juices & Snacks', icon: 'IceCream' as const, color: 'blue', imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop' },
];

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Veg' | 'Non-Veg' | 'Snacks'>('All');
  
  const cart = useCart();

  const filteredItems = mockMenuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      filterType === 'All' || 
      (filterType === 'Veg' && item.isVeg) ||
      (filterType === 'Non-Veg' && !item.isVeg) ||
      (filterType === 'Snacks' && item.category === 'Juices & Snacks');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Home Screen */}
      {activeTab === 'home' && (
        <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome, Student!
            </h1>
            <p className="text-muted-foreground">What are you craving today?</p>
          </div>

          <FeaturedDeal />

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Popular Cuisines</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cuisines.map((cuisine) => (
                <CuisineCategory
                  key={cuisine.name}
                  {...cuisine}
                  onClick={() => setActiveTab('menu')}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Menu Screen */}
      {activeTab === 'menu' && (
        <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {(['All', 'Veg', 'Non-Veg', 'Snacks'] as const).map((filter) => (
              <Button
                key={filter}
                variant={filterType === filter ? 'default' : 'outline'}
                onClick={() => setFilterType(filter)}
                className="whitespace-nowrap"
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddToCart={cart.addToCart}
              />
            ))}
          </div>
        </div>
      )}

      {/* Cart Screen */}
      {activeTab === 'cart' && (
        <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
          {cart.orderStatus !== 'Unplaced' && (
            <OrderTimeline status={cart.orderStatus} />
          )}

          {cart.orderStatus === 'Unplaced' && cart.cartItems.length > 0 && (
            <>
              <div className="space-y-3">
                {cart.cartItems.map((item) => (
                  <CartItemCard
                    key={item.id}
                    item={item}
                    onUpdateQuantity={cart.updateQuantity}
                    onRemove={cart.removeFromCart}
                  />
                ))}
              </div>

              <Card className="p-6 rounded-xl space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{cart.cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (5%)</span>
                  <span>₹{cart.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-primary pt-3 border-t border-border">
                  <span>Total</span>
                  <span>₹{cart.total.toFixed(2)}</span>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={cart.placeOrder}
                >
                  Place Order
                </Button>
              </Card>
            </>
          )}

          {cart.cartItems.length === 0 && cart.orderStatus === 'Unplaced' && (
            <Card className="p-12 text-center rounded-xl">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Start ordering delicious campus meals!
              </p>
              <Button onClick={() => setActiveTab('menu')}>Browse Menu</Button>
            </Card>
          )}
        </div>
      )}

      {/* Profile Screen */}
      {activeTab === 'profile' && (
        <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
          <Card className="p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-20 h-20 ring-4 ring-primary">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Student Name</h2>
                <p className="text-muted-foreground">student@mec.edu</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Account Details</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Roll Number</span>
                    <span className="text-foreground">2024CS001</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Department</span>
                    <span className="text-foreground">Computer Science</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-2">Payment Methods</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">Cash on Delivery (Primary)</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <BottomNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        cartCount={cart.cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />
    </div>
  );
}
