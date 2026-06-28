'use client';

import React, { createContext, useContext, useReducer, useMemo } from 'react';
import { CartContextType, CartItem, MenuItem } from '@/types';

const CartContext = createContext<CartContextType | null>(null);

type CartAction =
  | { type: 'ADD_ITEM'; payload: MenuItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; delta: number } }
  | { type: 'CLEAR_CART' };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((i) => i.id === action.payload.id);
      if (existing) {
        return state.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter((i) => i.id !== action.payload);
    case 'UPDATE_QUANTITY':
      return state
        .map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: i.quantity + action.payload.delta }
            : i
        )
        .filter((i) => i.quantity > 0);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  const value = useMemo<CartContextType>(
    () => ({
      items,
      addItem: (item: MenuItem) => dispatch({ type: 'ADD_ITEM', payload: item }),
      removeItem: (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
      updateQuantity: (id: string, delta: number) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, delta } }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      totalItems: items.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: items.reduce(
        (sum, i) => sum + (typeof i.price === 'number' ? i.price : 0) * i.quantity,
        0
      ),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
