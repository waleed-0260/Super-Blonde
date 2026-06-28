'use client';

import { MenuItem } from '@/types';
import { Badge } from '@/components/ui/badge';

interface MenuCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export default function MenuCard({ item, onAdd }: MenuCardProps) {
  return (
    <div className="bg-chalk rounded-2xl overflow-hidden shadow-sm border border-linen flex flex-col group hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src="/images/placeholder.jpg"
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.isSignature && (
            <span
              className="bg-champagne text-white text-[10px] px-2 py-0.5 rounded-full tracking-wider font-medium"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              ✦ Signature
            </span>
          )}
          {item.isVegan && (
            <span
              className="bg-sageGreen text-white text-[10px] px-2 py-0.5 rounded-full tracking-wider font-medium"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              🌿 Vegan
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-lg font-semibold text-graphite mb-1"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {item.name}
        </h3>
        {item.description && (
          <p
            className="text-sm text-warmGrey italic mb-3 flex-1"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            {item.description}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-linen">
          <span
            className="text-base font-semibold text-champagne"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            RM{item.price}
          </span>
          <button
            onClick={() => onAdd(item)}
            className="text-xs tracking-widest font-medium px-4 py-2 rounded-full bg-sageGreen text-white hover:bg-sageGreen/90 transition-colors"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            ADD TO ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
