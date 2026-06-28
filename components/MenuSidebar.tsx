'use client';

interface MenuSidebarProps {
  categories: string[];
  activeCategory: string;
  onSelect: (cat: string) => void;
}

export default function MenuSidebar({ categories, activeCategory, onSelect }: MenuSidebarProps) {
  return (
    <div className="h-full flex flex-col">
      <h2
        className="text-lg font-bold text-champagne mb-6 tracking-wider"
        style={{ fontFamily: 'var(--font-fraunces)' }}
      >
        MENU
      </h2>
      <nav className="flex flex-col gap-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`text-left text-sm px-3 py-2.5 rounded-r-lg border-l-2 transition-all duration-200 ${
                isActive
                  ? 'border-sageGreen text-sageGreen bg-sageGreen/5 font-medium'
                  : 'border-transparent text-warmGrey hover:text-graphite hover:border-linen'
              }`}
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              {cat}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
