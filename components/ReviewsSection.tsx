'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ReviewCard } from '@/types';

const reviews: ReviewCard[] = [
  {
    quote:
      'The vibe here is just unmatched — chic, breezy, golf course in the background. Pesto pasta was chef\'s kiss.',
    author: 'Google Review',
    rating: 5,
  },
  {
    quote:
      'Loved the open-air setting. Super Instagrammable, food quality is genuinely impressive.',
    author: 'Google Review',
    rating: 5,
  },
  {
    quote:
      'Brunch spot of the year. Super Blonde ticks every box — food, ambiance, and the views.',
    author: 'Google Review',
    rating: 5,
  },
];

export default function ReviewsSection() {
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
            What Guests Are Saying.
          </h2>
          <div className="flex justify-center items-center gap-1 mt-3">
            <span className="text-champagne text-sm font-semibold" style={{ fontFamily: 'var(--font-jost)' }}>
              4.6★
            </span>
            <span className="text-warmGrey text-sm" style={{ fontFamily: 'var(--font-jost)' }}>
              · 4,304 Google Reviews
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="bg-creamCard rounded-2xl p-7 border-l-4 border-sageGreen flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-champagne text-base">⭐</span>
                ))}
              </div>
              <p
                className="text-base text-graphite leading-relaxed flex-1 italic"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                &ldquo;{review.quote}&rdquo;
              </p>
              <p
                className="text-xs text-warmGrey tracking-wide"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                — {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
