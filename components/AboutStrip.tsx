'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { icon: '☀️', title: 'All-Day Dining', sub: '10AM to 10PM' },
  { icon: '⛳', title: 'Golf Course Views', sub: 'The Grounds of Serai, Level 4' },
  { icon: '🌿', title: 'Vegan Options', sub: 'Available across the menu' },
  { icon: '⭐', title: '4.6★ Rating', sub: '4,304 Google Reviews' },
];

export default function AboutStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-creamCard py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="flex flex-col items-center text-center gap-3"
            >
              <span className="text-3xl">{stat.icon}</span>
              <div>
                <p
                  className="text-sm font-semibold text-graphite tracking-wide"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  {stat.title}
                </p>
                <p
                  className="text-xs text-warmGrey mt-1"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
