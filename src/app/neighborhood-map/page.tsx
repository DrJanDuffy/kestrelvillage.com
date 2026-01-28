import type { Metadata } from 'next';
import Link from 'next/link';
import { communities } from '@/data/communities';

const SITE_URL = 'https://www.kestrelvillage.com';

/** Google Maps search URL for a community in Kestrel Village area. */
function directionsUrl(communityName: string): string {
  const query = encodeURIComponent(`${communityName} Kestrel Village Summerlin Las Vegas NV 89138`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

const keyAmenities = [
  { name: 'Red Rock Canyon', distance: '~5 min', desc: 'Scenic drive, hiking' },
  { name: 'Downtown Summerlin', distance: '~10 min', desc: 'Shopping, dining, events' },
  { name: 'TPC Summerlin', distance: '~8 min', desc: 'PGA Tour golf course' },
  { name: 'Grand Park', distance: '~5 min', desc: 'Sports, trails, playgrounds' },
  { name: 'I-215 Beltway', distance: '~3 min', desc: 'Quick access to valley' },
];

export const metadata: Metadata = {
  title: 'Kestrel Village Neighborhood Map | Communities & Directions',
  description: 'Interactive map of all 8 Kestrel Village communities in Summerlin West. Get directions to sales offices, see distances to Red Rock, Downtown Summerlin, and more.',
  alternates: { canonical: `${SITE_URL}/neighborhood-map` },
  openGraph: {
    title: 'Kestrel Village Neighborhood Map',
    description: 'Map of Kestrel Village communities and directions to sales offices in Summerlin West, Las Vegas.',
    url: `${SITE_URL}/neighborhood-map`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function NeighborhoodMapPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <nav className="sticky top-0 z-40 border-b border-stone-800/50 bg-stone-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-amber-500">
              <span className="text-sm font-bold text-stone-950">KV</span>
            </div>
            <span className="hidden font-semibold text-lg sm:block">
              Kestrel Village
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/communities"
              className="text-sm text-stone-400 hover:text-amber-400 transition-colors hidden sm:block"
            >
              Communities
            </Link>
            <a
              href="tel:7022221964"
              className="rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition-colors"
            >
              702-222-1964
            </a>
          </div>
        </div>
      </nav>

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">
            Explore the Village
          </p>
          <h1
            className="mt-4 text-4xl font-light tracking-tight md:text-6xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Neighborhood <span className="italic text-amber-400">Map</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            All 8 Kestrel Village communities in Summerlin West. Get directions to sales offices and see distances to key amenities.
          </p>
        </div>
      </header>

      <section className="px-6 py-12 border-b border-stone-800/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-sm uppercase tracking-widest text-amber-500">
            Kestrel Village Area
          </h2>
          <div className="rounded-sm overflow-hidden border border-stone-800 h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51562.5!2d-115.33!3d36.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf3b2b3d3b3b%3A0x3b3b3b3b3b3b3b3b!2sKestrel%20Village%2C%20Summerlin%20West%2C%20Las%20Vegas%2C%20NV%2089138!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kestrel Village Neighborhood Map"
            />
          </div>
          <p className="mt-4 text-sm text-stone-500 text-center">
            Summerlin West, Las Vegas, NV 89138 • Call Dr. Jan Duffy before your first visit: 702-222-1964
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            All 8 <span className="italic text-amber-400">Communities</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {communities.map((c) => (
              <div
                key={c.slug}
                className="rounded-sm border border-stone-800 bg-stone-900/50 p-4 hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase text-amber-500">{c.builder}</p>
                    <h3 className="font-semibold text-stone-100 mt-0.5">{c.name}</h3>
                    <p className="text-sm text-stone-400 mt-1">{c.price}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${
                    c.status === 'Now Selling' || c.status === 'Now Preselling' ? 'bg-green-500/20 text-green-400' :
                    c.status === 'Move-In Ready' || c.status === 'Final Opportunity' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-stone-700 text-stone-400'
                  }`}>
                    {c.status}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href={`/communities/${c.slug}`}
                    className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Community details →
                  </Link>
                  <a
                    href={directionsUrl(c.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-stone-900/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Key <span className="italic text-amber-400">Amenities</span> & Distances
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyAmenities.map((a, i) => (
              <div
                key={i}
                className="rounded-sm border border-stone-800 bg-stone-950/50 p-4"
              >
                <p className="font-semibold text-stone-100">{a.name}</p>
                <p className="text-amber-400 text-sm mt-0.5">{a.distance}</p>
                <p className="text-stone-500 text-sm mt-1">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-sm border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Schedule a <span className="italic text-amber-400">VIP Tour</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Call Dr. Jan Duffy before visiting any model home. She&apos;ll register you with the builder and meet you there.
            </p>
            <a
              href="tel:7022221964"
              className="inline-flex items-center gap-3 rounded-sm bg-amber-500 px-6 py-4 font-semibold text-stone-950 hover:bg-amber-400 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 702-222-1964
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-800 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-stone-500 md:text-left">
            Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties |
            REALTOR® S.0197614.LLC
          </p>
          <a
            href="tel:7022221964"
            className="font-semibold text-amber-400 hover:text-amber-300"
          >
            702-222-1964
          </a>
        </div>
      </footer>
    </div>
  );
}
