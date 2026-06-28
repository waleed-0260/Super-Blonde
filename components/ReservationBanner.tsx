'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ReservationBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-graphite py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-4xl sm:text-5xl font-bold text-white/95 mb-4"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Reserve Your Spot Above KL.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-white/60 text-base mb-10"
          style={{ fontFamily: 'var(--font-jost)' }}
        >
          Daily 10AM–10PM · KLGCC Mall, Level 4 · Bukit Kiara, KL
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://reservego.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-sageGreen text-white text-sm tracking-widest font-medium hover:bg-sageGreen/90 transition-colors"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            RESERVE NOW
          </a>
          <a
            href="tel:+60320112695"
            className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-champagne text-champagne text-sm tracking-widest font-medium hover:bg-champagne hover:text-graphite transition-colors"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            CALL US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
