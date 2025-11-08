import { useState } from 'react';
import { MenuItem } from '@/data/menuData';

export interface CartItem extends MenuItem {
  quantity: number;
}

export type OrderStatus = 'Unplaced' | 'Placed' | 'Preparing' | 'Ready' | 'Delivered';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderStatus, setOrderStatus] = useState<OrderStatus>('Unplaced');

  const addToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setOrderStatus('Unplaced');
  };

  const placeOrder = () => {
    if (cartItems.length > 0) {
      setOrderStatus('Placed');
      // Simulate order progression
      setTimeout(() => setOrderStatus('Preparing'), 3000);
      setTimeout(() => setOrderStatus('Ready'), 8000);
      setTimeout(() => setOrderStatus('Delivered'), 12000);
    }
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = cartTotal * 0.05;
  const total = cartTotal + tax;

  return {
    cartItems,
    orderStatus,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    placeOrder,
    cartTotal,
    tax,
    total,
  };
};
