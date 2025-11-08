import { Card } from '@/components/ui/card';
import { User, Store, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PortalSelector() {
  const navigate = useNavigate();

  const portals = [
    {
      id: 'student',
      title: 'Student Portal',
      description: 'Browse menu, order food, and track deliveries',
      icon: User,
      path: '/student',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      id: 'shop',
      title: 'Shop Portal',
      description: 'Manage orders and update menu items',
      icon: Store,
      path: '/shop',
      gradient: 'from-blue-500/20 to-blue-500/5',
    },
    {
      id: 'admin',
      title: 'Admin Portal',
      description: 'View analytics and manage system',
      icon: Shield,
      path: '/admin',
      gradient: 'from-green-500/20 to-green-500/5',
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            MEC Eats
          </h1>
          <p className="text-xl text-muted-foreground">
            Campus Food Ordering System
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <Card
                key={portal.id}
                className="relative overflow-hidden rounded-2xl cursor-pointer hover:ring-2 hover:ring-primary transition-all group"
                onClick={() => navigate(portal.path)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${portal.gradient} opacity-50`} />
                <div className="relative p-8 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {portal.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {portal.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
