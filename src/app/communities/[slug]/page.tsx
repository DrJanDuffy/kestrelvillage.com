import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  communities,
  getCommunityBySlug,
  getAllCommunitySlugs,
} from '@/data/communities';

const SITE_URL = 'https://kestrelvillage.com';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCommunitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) {
    return { title: 'Community Not Found' };
  }
  const title = `${community.name} at Kestrel Village | ${community.builder} | Summerlin West`;
  const description = community.description;
  const url = `${SITE_URL}/communities/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Kestrel Village',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function CommunityPage({ params }: PageProps) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) notFound();

  const schema = {
    '@context': 'https://schema.org' as const,
    '@type': 'ResidentialComplex' as const,
    name: `${community.name} at Kestrel Village`,
    description: community.description,
    url: `${SITE_URL}/communities/${slug}`,
    address: {
      '@type': 'PostalAddress' as const,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89138',
      addressCountry: 'US',
    },
    numberOfUnits: community.units,
    amenityFeature: community.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification' as const,
      name: a,
      value: true,
    })),
  };

  const statusClass =
    community.status === 'Now Selling'
      ? 'bg-green-500/20 text-green-400'
      : community.status === 'Move-In Ready'
        ? 'bg-amber-500/20 text-amber-400'
        : 'bg-stone-700 text-stone-400';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
                className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
              >
                All Communities
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

        <header className="relative border-b border-stone-800/50 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20 px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/communities"
              className="mb-6 inline-block text-sm text-amber-500 hover:text-amber-400 transition-colors"
            >
              ← All Kestrel Village Communities
            </Link>
            <p className="text-xs uppercase tracking-wider text-amber-500">
              {community.builder}
            </p>
            <h1
              className="mt-2 text-4xl font-light tracking-tight md:text-6xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="text-stone-100">{community.name}</span>
              <span className="mt-2 block italic text-amber-400">
                at Kestrel Village
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-stone-400">
              {community.highlight}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span
                className={`rounded-full px-3 py-1 text-xs ${statusClass}`}
              >
                {community.status}
              </span>
              <span className="text-2xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                {community.price}
              </span>
              <span className="text-sm text-stone-500">
                • {community.units} homes
              </span>
            </div>
          </div>
        </header>

        <section className="border-b border-stone-800/50 px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-sm uppercase tracking-widest text-amber-500">
              Quick Facts
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <p className="text-xs uppercase text-stone-500">Type</p>
                <p className="text-stone-100">{community.type}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-stone-500">Sq Ft</p>
                <p className="text-stone-100">{community.sqft}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-stone-500">Beds</p>
                <p className="text-stone-100">{community.beds}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-stone-500">Garage</p>
                <p className="text-stone-100">{community.garage}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-800/50 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2
              className="mb-8 text-2xl font-light md:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why <span className="italic text-amber-400">{community.name}</span>?
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {community.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-sm border border-stone-800/50 bg-stone-900/30 px-4 py-3"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  <span className="text-stone-300">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-stone-800/50 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2
              className="mb-8 text-2xl font-light md:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Community <span className="italic text-amber-400">Amenities</span>
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {community.amenities.map((a, i) => (
                <li
                  key={i}
                  className="rounded-sm border border-stone-800/50 bg-stone-900/30 px-4 py-3 text-stone-300"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-sm border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 p-8 md:p-12">
              <h2
                className="mb-4 text-2xl font-light md:text-3xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tour <span className="italic text-amber-400">{community.name}</span> with Dr. Jan Duffy
              </h2>
              <p className="mb-8 text-stone-400">
                Call or text to schedule your VIP tour. I&apos;ll meet you at the model homes
                and ensure you&apos;re properly registered with the builder.
              </p>
              <a
                href="tel:7022221964"
                className="inline-flex items-center gap-3 rounded-sm bg-amber-500 px-6 py-4 font-semibold text-stone-950 hover:bg-amber-400 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Schedule Tour: 702-222-1964
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
    </>
  );
}
