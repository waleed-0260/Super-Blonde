'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightIcon } from 'lucide-react';

export default function TheGroundsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 bg-creamCard" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <img
              src="/images/placeholder.jpg"
              alt="The Grounds of Serai Level 4 KLGCC Mall"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <p
              className="text-xs tracking-[0.3em] text-sageGreen uppercase mb-4"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              The Grounds of Serai
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-graphite leading-tight mb-6"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              Part of The Grounds of Serai.
            </h2>
            <div className="w-12 h-0.5 bg-champagne mb-6" />
            <p
              className="text-base text-warmGrey leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              On the fourth floor of KLGCC Mall, the Serai Group has created
              an entire culinary enclave — open air, rooftop, surrounded by
              urban greenery and the serenity of the golf course. Super Blonde
              is the jewel at the centre.
            </p>
            <a
              href="https://seraigroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sageGreen text-sm font-medium tracking-wide hover:gap-3 transition-all"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Explore Serai Group
              <ArrowRightIcon size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
