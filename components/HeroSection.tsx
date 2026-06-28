'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type BezierEase = [number, number, number, number];
const EASE: BezierEase = [0.16, 1, 0.3, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-chalk flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: 60% */}
          <div className="lg:col-span-3">
            <motion.p
              {...fadeUp(0.1)}
              className="text-xs tracking-[0.3em] text-sageGreen uppercase mb-6"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              The Grounds of Serai · KLGCC Mall
            </motion.p>

            <div className="space-y-1 mb-8">
              <motion.h1
                {...fadeUp(0.2)}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-graphite leading-none"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                Chic.
              </motion.h1>
              <motion.h1
                {...fadeUp(0.3)}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-graphite leading-none"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                Contemporary.
              </motion.h1>
              <motion.h1
                {...fadeUp(0.4)}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-champagne italic leading-none"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                All-Day.
              </motion.h1>
            </div>

            <motion.p
              {...fadeUp(0.5)}
              className="text-base sm:text-lg text-warmGrey leading-relaxed max-w-lg mb-10"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              A curated dining experience with golf course views, finest
              ingredients, and a setting that feels like your chicest brunch
              ever.
            </motion.p>

            <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-sageGreen text-white text-sm tracking-widest font-medium hover:bg-sageGreen/90 transition-colors"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                View Menu
              </Link>
              <a
                href="https://reservego.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-graphite text-graphite text-sm tracking-widest font-medium hover:bg-graphite hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                Reserve a Table
              </a>
            </motion.div>
          </div>

          {/* Right: 40% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-sm lg:max-w-full"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <img
                src="/images/placeholder.jpg"
                alt="Super Blonde dining room with golf course view"
                className="w-full aspect-[3/4] object-cover rounded-3xl shadow-2xl"
                style={{ boxShadow: '20px 20px 60px rgba(200, 169, 110, 0.2), -5px -5px 30px rgba(122, 158, 126, 0.1)' }}
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-champagne/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
