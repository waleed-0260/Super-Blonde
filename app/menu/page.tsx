'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { menuData, menuCategories } from '@/data/menuData';
import { MenuItem } from '@/types';
import MenuCard from '@/components/MenuCard';
import MenuSidebar from '@/components/MenuSidebar';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGridIcon, XIcon } from 'lucide-react';

export default function MenuPage() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  function handleAdd(item: MenuItem) {
    addItem(item);
    toast('✦ Added to your order!', { description: item.name, duration: 2500 });
  }

  const handleSelect = useCallback((cat: string) => {
    setActiveCategory(cat);
    setMobileSidebarOpen(false);
    const el = sectionRefs.current[cat];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-category');
            if (id) setActiveCategory(id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    menuCategories.forEach((cat) => {
      const el = sectionRefs.current[cat];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const groupedItems = menuCategories.map((cat) => ({
    category: cat,
    items: menuData.filter((item) => item.category === cat),
  }));

  return (
    <div className="min-h-screen bg-chalk pt-16">
      {/* Mobile floating pill */}
      <button
        onClick={() => setMobileSidebarOpen(true)}
        className="fixed bottom-24 left-4 z-40 lg:hidden flex items-center gap-2 bg-sageGreen text-white px-4 py-2.5 rounded-full shadow-lg text-xs tracking-widest font-medium"
        style={{ fontFamily: 'var(--font-jost)' }}
      >
        <LayoutGridIcon size={14} />
        Categories
      </button>

      {/* Mobile sidebar bottom sheet */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-graphite/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-chalk rounded-t-3xl p-6 pb-10 lg:hidden max-h-[75vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-lg font-bold text-champagne"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  MENU
                </h3>
                <button onClick={() => setMobileSidebarOpen(false)} className="p-1 text-warmGrey">
                  <XIcon size={20} />
                </button>
              </div>
              <MenuSidebar
                categories={menuCategories}
                activeCategory={activeCategory}
                onSelect={handleSelect}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-0 lg:px-10 flex">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-16 self-start h-[calc(100vh-4rem)] pt-10 pb-6 pl-0 pr-6 border-r border-linen overflow-y-auto">
          <MenuSidebar
            categories={menuCategories}
            activeCategory={activeCategory}
            onSelect={handleSelect}
          />
        </aside>

        {/* Main content */}
        <main className="flex-1 px-6 lg:px-10 py-10">
          <div className="mb-12">
            <h1
              className="text-5xl sm:text-6xl font-bold text-graphite"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              The Menu
            </h1>
            <p
              className="text-warmGrey mt-3 text-sm tracking-wide"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              All-day dining. Finest ingredients. Contemporary cooking.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {groupedItems.map(({ category, items }) => (
              <section
                key={category}
                id={category.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}
                data-category={category}
                ref={(el) => { sectionRefs.current[category] = el; }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-graphite"
                    style={{ fontFamily: 'var(--font-fraunces)' }}
                  >
                    {category}
                  </h2>
                  <div className="flex-1 h-px bg-linen" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <MenuCard key={item.id} item={item} onAdd={handleAdd} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
