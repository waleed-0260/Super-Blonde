'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-chalk" ref={ref} id="story">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h2
              className="text-4xl sm:text-5xl font-bold text-graphite leading-tight mb-6"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              An Experience, Not Just a Meal.
            </h2>
            <div className="w-16 h-0.5 bg-champagne mb-6" />
            <p
              className="text-base text-warmGrey leading-relaxed"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Super Blonde is the latest concept from the award-winning Serai
              Group — a chic, open-air destination perched on the rooftop of
              KLGCC Mall, overlooking one of KL&rsquo;s most celebrated golf
              courses. Finest ingredients. Contemporary cooking. A setting
              that invites you to linger.
            </p>
          </motion.div>

          {/* Right: stacked images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="flex gap-4 h-96 lg:h-[480px]"
          >
            <img
              src="/images/placeholder.jpg"
              alt="The Grounds outdoor setting"
              className="flex-1 object-cover rounded-2xl"
            />
            <div className="flex flex-col gap-4 w-2/5">
              <img
                src="/images/placeholder.jpg"
                alt="Urban farm KLGCC"
                className="flex-1 object-cover rounded-2xl"
              />
              <div className="flex-none h-24 rounded-2xl bg-creamCard flex items-center justify-center px-4">
                <p
                  className="text-xs text-center text-warmGrey italic"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  "Finest ingredients for discerning tastebuds."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
