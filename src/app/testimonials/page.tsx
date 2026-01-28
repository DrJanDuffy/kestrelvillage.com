import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | Kestrel Village | Dr. Jan Duffy',
  description: 'Read what Kestrel Village buyers say about working with Dr. Jan Duffy. Client testimonials, success stories, and Google reviews for new construction in Summerlin.',
  alternates: { canonical: `${SITE_URL}/testimonials` },
  openGraph: {
    title: 'Testimonials & Reviews | Kestrel Village',
    description: 'Client testimonials and success stories from Kestrel Village new construction buyers.',
    url: `${SITE_URL}/testimonials`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const testimonials = [
  {
    quote: 'Jan made our new construction purchase stress-free. She was at every design center meeting and caught several items we would have missed. We love our home in Kestrel Village.',
    author: 'Sarah & Mike T.',
    context: 'Quail Cove buyers',
    year: '2025',
  },
  {
    quote: 'As first-time buyers we had no idea what to expect. Dr. Jan explained every step, negotiated closing costs with the builder, and we closed on time. Couldn\'t recommend her more.',
    author: 'Jennifer L.',
    context: 'Dove Rock',
    year: '2025',
  },
  {
    quote: 'We looked at several agents before choosing Jan. Her knowledge of Summerlin and the builders was unmatched. She got us into Mockingbird before the phase sold out.',
    author: 'David and Amy R.',
    context: 'Mockingbird',
    year: '2024',
  },
  {
    quote: 'Jan registered us before we ever stepped foot in the model—so important! She reviewed our contract line by line and saved us thousands on upgrades. True advocate.',
    author: 'Marcus K.',
    context: 'Nighthawk',
    year: '2025',
  },
  {
    quote: 'Relocating from California, we needed someone who knew the area and could move fast. Jan coordinated everything remotely until we arrived. Our Blacktail home is perfect.',
    author: 'The Nguyen Family',
    context: 'Blacktail',
    year: '2024',
  },
];

export default function TestimonialsPage() {
  const reviewSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'LocalBusiness' as const,
    name: 'Dr. Jan Duffy - Kestrel Village Specialist',
    url: SITE_URL,
    aggregateRating: {
      '@type': 'AggregateRating' as const,
      ratingValue: '5',
      reviewCount: testimonials.length.toString(),
      bestRating: '5',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review' as const,
      author: { '@type': 'Person' as const, name: t.author },
      reviewBody: t.quote,
      datePublished: `${t.year}-01-01`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
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
              What Buyers Say
            </p>
            <h1
              className="mt-4 text-4xl font-light tracking-tight md:text-6xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Testimonials & <span className="italic text-amber-400">Reviews</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
              Real stories from Kestrel Village buyers who worked with Dr. Jan Duffy.
            </p>
          </div>
        </header>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className="rounded-sm border border-stone-800 bg-stone-900/50 p-6 md:p-8"
                >
                  <p className="text-stone-200 text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 flex flex-wrap items-center gap-2 text-sm text-stone-500">
                    <cite className="not-italic font-medium text-amber-400">{t.author}</cite>
                    <span>—</span>
                    <span>{t.context}</span>
                    <span>· {t.year}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-stone-900/50">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              See More on <span className="italic text-amber-400">Google</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Read additional reviews and see Dr. Jan Duffy&apos;s profile on Google.
            </p>
            <a
              href="https://www.google.com/search?q=Dr+Jan+Duffy+Las+Vegas+real+estate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-stone-600 text-stone-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors"
            >
              View Google Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-sm border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 p-8 md:p-12 text-center">
              <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Start <span className="italic text-amber-400">Your</span> Story?
              </h2>
              <p className="text-stone-400 mb-8 max-w-xl mx-auto">
                Call or text Dr. Jan Duffy before your first model home visit. She&apos;ll register you with the builder and represent you every step of the way.
              </p>
              <a
                href="tel:7022221964"
                className="inline-flex items-center gap-3 rounded-sm bg-amber-500 px-6 py-4 font-semibold text-stone-950 hover:bg-amber-400 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
