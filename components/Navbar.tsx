'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'MENU', href: '/menu' },
  { label: 'ABOUT', href: '/#story' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-chalk border-b border-linen shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-xl font-bold tracking-wider text-graphite"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            SUPER BLONDE
          </span>
          <span
            className="text-[10px] tracking-widest text-warmGrey uppercase"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            by Serai Group
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest font-medium transition-colors ${
                pathname === link.href
                  ? 'text-sageGreen'
                  : 'text-graphite hover:text-sageGreen'
              }`}
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://reservego.co"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-sageGreen text-white text-xs tracking-widest font-medium transition-opacity hover:opacity-90"
          style={{ fontFamily: 'var(--font-jost)' }}
        >
          Reserve a Table
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-graphite"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-chalk border-b border-linen px-6 pb-6 pt-2 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest font-medium text-graphite hover:text-sageGreen transition-colors"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://reservego.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-sageGreen text-white text-xs tracking-widest font-medium"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Reserve a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
