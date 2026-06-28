'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { MenuItem } from '@/types';
import { toast } from 'sonner';

const drinks: MenuItem[] = [
  {
    id: 'blonde-lemonade',
    name: 'Blonde Lemonade',
    category: 'Drinks (Cold)',
    description: 'House lemonade with a golden twist, served over crushed ice',
    price: 18,
    imageUrl: '/images/placeholder.jpg',
    isSignature: true,
  },
  {
    id: 'matcha-latte-hot',
    name: 'Matcha Latte',
    category: 'Drinks (Hot)',
    description: 'Ceremonial grade, oat milk, lightly sweetened',
    price: 22,
    imageUrl: '/images/placeholder.jpg',
  },
  {
    id: 'iced-coffee',
    name: 'Signature Iced Coffee',
    category: 'Drinks (Cold)',
    description: 'Cold brew concentrate, light cream, vanilla',
    price: 19,
    imageUrl: '/images/placeholder.jpg',
  },
];

export default function DrinkHighlights() {
  const { addItem } = useCart();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  function handleAdd(item: MenuItem) {
    addItem(item);
    toast('✦ Added to your order!', {
      description: item.name,
      duration: 2500,
    });
  }

  return (
    <section
      className="py-24"
      style={{ background: 'rgba(122, 158, 126, 0.06)' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold text-graphite"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Sip Something Special.
          </h2>
          <p
            className="text-warmGrey mt-3 text-sm tracking-wide"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Crafted to complement every moment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="bg-chalk rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <img
                src="/images/placeholder.jpg"
                alt={drink.name}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-xl font-bold text-graphite mb-2"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  {drink.name}
                </h3>
                <p
                  className="text-sm text-warmGrey italic flex-1 mb-4"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  {drink.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-linen">
                  <span
                    className="text-lg font-semibold text-champagne"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    RM{drink.price}
                  </span>
                  <button
                    onClick={() => handleAdd(drink)}
                    className="text-xs tracking-widest font-medium px-4 py-2 rounded-full bg-champagne text-white hover:bg-champagne/90 transition-colors"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    ADD TO ORDER
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
