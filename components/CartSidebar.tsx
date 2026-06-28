'use client';

import { useCart } from '@/context/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShoppingBagIcon, MinusIcon, PlusIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function CartSidebar() {
  const { items, updateQuantity, removeItem, totalItems, totalPrice, clearCart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating cart button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-sageGreen shadow-lg flex items-center justify-center hover:bg-sageGreen/90 transition-colors"
        aria-label="Open cart"
      >
        <ShoppingBagIcon size={22} className="text-white" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-champagne text-white text-[10px] font-bold flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md bg-chalk border-l border-linen flex flex-col p-0"
        >
          <SheetHeader className="px-6 pt-6 pb-4 border-b border-linen">
            <SheetTitle
              className="text-2xl font-bold text-graphite"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              Your Order
            </SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center px-8">
              <ShoppingBagIcon size={40} className="text-linen" />
              <p
                className="text-warmGrey text-sm"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                Your order is empty. Add something delicious!
              </p>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-1 px-6 py-4">
                <div className="flex flex-col gap-5">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 items-start">
                      <img
                        src="/images/placeholder.jpg"
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-semibold text-graphite truncate"
                          style={{ fontFamily: 'var(--font-fraunces)' }}
                        >
                          {item.name}
                        </p>
                        {item.notes && (
                          <p
                            className="text-xs text-warmGrey mt-0.5 truncate"
                            style={{ fontFamily: 'var(--font-jost)' }}
                          >
                            {item.notes}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded-full border border-sageGreen text-sageGreen flex items-center justify-center hover:bg-sageGreen hover:text-white transition-colors"
                            >
                              <MinusIcon size={12} />
                            </button>
                            <span
                              className="text-sm font-medium text-graphite w-4 text-center"
                              style={{ fontFamily: 'var(--font-jost)' }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded-full border border-sageGreen text-sageGreen flex items-center justify-center hover:bg-sageGreen hover:text-white transition-colors"
                            >
                              <PlusIcon size={12} />
                            </button>
                          </div>
                          <span
                            className="text-sm font-semibold text-champagne"
                            style={{ fontFamily: 'var(--font-jost)' }}
                          >
                            RM{typeof item.price === 'number' ? item.price * item.quantity : item.price}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-warmGrey hover:text-graphite transition-colors mt-0.5"
                        aria-label="Remove item"
                      >
                        <XIcon size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="px-6 py-5 border-t border-linen">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-sm text-warmGrey"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    Total
                  </span>
                  <span
                    className="text-xl font-bold text-graphite"
                    style={{ fontFamily: 'var(--font-fraunces)' }}
                  >
                    RM{totalPrice}
                  </span>
                </div>
                <SheetClose asChild>
                  <Link
                    href="/checkout"
                    className="block w-full py-3 rounded-full bg-sageGreen text-white text-sm tracking-widest font-medium hover:bg-sageGreen/90 transition-colors mb-2 text-center"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    PLACE ORDER
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <button
                    className="w-full py-2.5 rounded-full border border-linen text-warmGrey text-sm tracking-widest font-medium hover:border-graphite hover:text-graphite transition-colors"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    Continue Browsing
                  </button>
                </SheetClose>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
