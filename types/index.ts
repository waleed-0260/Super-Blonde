export type MealTime = 'Breakfast' | 'Brunch' | 'Lunch' | 'Dinner' | 'All Day';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number | string;
  imageUrl: string;
  isSignature?: boolean;
  isVegan?: boolean;
  mealTime?: MealTime;
  tags?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
  notes?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ReviewCard {
  quote: string;
  author: string;
  rating: number;
}

export interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  message: string;
}
