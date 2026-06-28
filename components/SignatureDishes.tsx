'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { MenuItem } from '@/types';
import { toast } from 'sonner';

const dishes: MenuItem[] = [
  {
    id: 'pesto-pasta',
    name: 'Pesto Pasta',
    category: 'Pasta & Mains',
    description: 'Al dente pasta tossed in vibrant house-made pesto, dry and expressive',
    price: 38,
    imageUrl: '/images/placeholder.jpg',
    isSignature: true,
  },
  {
    id: 'blonde-burger',
    name: 'Blonde Burger',
    category: 'Burgers & Sandwiches',
    description: 'House-ground beef patty, brioche bun, aged cheddar, signature blonde sauce',
    price: 45,
    imageUrl: '/images/placeholder.jpg',
    isSignature: true,
  },
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    category: 'All Day Breakfast & Brunch',
    description: 'Poached eggs on toasted sourdough, house hollandaise, smoked beef',
    price: 42,
    imageUrl: '/images/placeholder.jpg',
    isSignature: true,
  },
];

export default function SignatureDishes() {
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
    <section className="py-24 bg-chalk" ref={ref}>
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
            From The Kitchen
          </h2>
          <p
            className="text-warmGrey mt-3 text-sm tracking-wide"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Chef&rsquo;s selections, made with the finest ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="bg-creamCard rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src="/images/placeholder.jpg"
                  alt={dish.name}
                  className="w-full aspect-video object-cover"
                />
                <span
                  className="absolute top-3 left-3 bg-champagne text-white text-[10px] px-2.5 py-1 rounded-full tracking-wider"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  ✦ Signature
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-xl font-bold text-graphite mb-2"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  {dish.name}
                </h3>
                <p
                  className="text-sm text-warmGrey italic flex-1 mb-4"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  {dish.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-linen">
                  <span
                    className="text-lg font-semibold text-champagne"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    RM{dish.price}
                  </span>
                  <button
                    onClick={() => handleAdd(dish)}
                    className="text-xs tracking-widest font-medium px-4 py-2 rounded-full bg-sageGreen text-white hover:bg-sageGreen/90 transition-colors"
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
