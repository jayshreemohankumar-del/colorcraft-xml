export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'South Indian' | 'Chinese' | 'Continental' | 'Juices & Snacks';
  imageUrl: string;
  isVeg: boolean;
}

export const mockMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Masala Dosa',
    price: 50,
    category: 'South Indian',
    imageUrl: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '2',
    name: 'Idli Sambar',
    price: 30,
    category: 'South Indian',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '3',
    name: 'Vada',
    price: 20,
    category: 'South Indian',
    imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '4',
    name: 'Fried Rice',
    price: 80,
    category: 'Chinese',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '5',
    name: 'Hakka Noodles',
    price: 90,
    category: 'Chinese',
    imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '6',
    name: 'Chilli Chicken',
    price: 120,
    category: 'Chinese',
    imageUrl: 'https://images.unsplash.com/photo-1606491956391-1a4c3e8d61aa?w=400&h=400&fit=crop',
    isVeg: false,
  },
  {
    id: '7',
    name: 'Cheese Pizza',
    price: 150,
    category: 'Continental',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '8',
    name: 'Veg Burger',
    price: 60,
    category: 'Continental',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '9',
    name: 'French Fries',
    price: 40,
    category: 'Juices & Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '10',
    name: 'Mango Juice',
    price: 35,
    category: 'Juices & Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '11',
    name: 'Watermelon Juice',
    price: 30,
    category: 'Juices & Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
    isVeg: true,
  },
  {
    id: '12',
    name: 'Samosa',
    price: 15,
    category: 'Juices & Snacks',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop',
    isVeg: true,
  },
];
