'use client';

import { useEffect, useRef, useState } from 'react';

const REALSOUT_SCRIPT_URL = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';

export function LazyRealScoutListings() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView || scriptLoaded) return;

    const existing = document.querySelector(`script[src="${REALSOUT_SCRIPT_URL}"]`);
    if (existing) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = REALSOUT_SCRIPT_URL;
    script.type = 'module';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Do not remove script on unmount so widget stays if user scrolls away and back
    };
  }, [inView, scriptLoaded]);

  useEffect(() => {
    const el = containerRef.current;
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

  if (!scriptLoaded) {
    return (
      <div ref={containerRef} className="bg-white rounded-sm overflow-hidden shadow-xl min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse w-full p-8 space-y-4">
          <div className="h-6 bg-stone-200 rounded w-1/3 mx-auto" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-stone-100 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-white rounded-sm overflow-hidden shadow-xl">
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-office-listings 
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR,MF,TC"
            price-min="400000"
            price-max="1000000"
          ></realscout-office-listings>`,
        }}
      />
    </div>
  );
}
