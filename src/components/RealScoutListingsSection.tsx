'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const LazyRealScoutListings = dynamic(
  () => import('@/components/LazyRealScoutListings').then((m) => ({ default: m.LazyRealScoutListings })),
  { ssr: false }
);

/**
 * Wrapper that loads the RealScout listings component only when the section scrolls into view.
 * Reduces initial JS by ~150+ KiB (component chunk + widget script load on intersect).
 */
export function RealScoutListingsSection() {
  const [inView, setInView] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: '100px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sentinelRef} className="min-h-[400px]">
      {inView ? (
        <LazyRealScoutListings />
      ) : (
        <div className="bg-white rounded-sm overflow-hidden shadow-xl min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse w-full p-8 space-y-4">
            <div className="h-6 bg-stone-200 rounded w-1/3 mx-auto" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-stone-100 rounded" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
