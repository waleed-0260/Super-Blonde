'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const images = [
  { alt: 'Gallery 1 — Rooftop terrace', className: 'row-span-2' },
  { alt: 'Gallery 2 — Golf course view', className: '' },
  { alt: 'Gallery 3 — Brunch spread', className: '' },
  { alt: 'Gallery 4 — Interior dining room', className: 'col-span-2' },
  { alt: 'Gallery 5 — The Grounds fountain', className: '' },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

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
            The Blonde Experience.
          </h2>
          <p
            className="text-warmGrey mt-3 text-sm tracking-wide"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Made for moments worth capturing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4 h-[600px] sm:h-[700px]">
          {/* Tall left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="row-span-2 overflow-hidden rounded-2xl group relative"
          >
            <img
              src="/images/placeholder.jpg"
              alt="Gallery 1 — Rooftop terrace"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(200, 169, 110, 0.15)' }} />
          </motion.div>

          {/* Top-right two */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="overflow-hidden rounded-2xl group relative"
          >
            <img
              src="/images/placeholder.jpg"
              alt="Gallery 2 — Golf course view"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(200, 169, 110, 0.15)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="overflow-hidden rounded-2xl group relative"
          >
            <img
              src="/images/placeholder.jpg"
              alt="Gallery 3 — Brunch spread"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(200, 169, 110, 0.15)' }} />
          </motion.div>

          {/* Bottom wide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="col-span-2 overflow-hidden rounded-2xl group relative"
          >
            <img
              src="/images/placeholder.jpg"
              alt="Gallery 4 — Interior dining room"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(200, 169, 110, 0.15)' }} />
          </motion.div>

          {/* Bottom right single */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="overflow-hidden rounded-2xl group relative"
          >
            <img
              src="/images/placeholder.jpg"
              alt="Gallery 5 — The Grounds fountain"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(200, 169, 110, 0.15)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
