import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Kestrel Village Real Estate Expert',
  description: 'Contact Dr. Jan Duffy for Kestrel Village new construction homes in Summerlin West. Call 702-222-1964 for VIP tours. 30+ years Las Vegas real estate experience.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Kestrel Village Expert',
    description: 'Schedule your VIP tour of Kestrel Village new construction homes. Call or text 702-222-1964.',
    url: `${SITE_URL}/contact`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
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

      <header className="border-b border-stone-800/50 px-6 py-16 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">
            Get in Touch
          </p>
          <h1
            className="mt-4 text-4xl font-light tracking-tight md:text-6xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Contact <span className="italic text-amber-400">Dr. Jan Duffy</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400">
            Your Kestrel Village specialist with 30+ years of Las Vegas real estate experience.
            Call me before visiting any model homes to protect your buyer representation.
          </p>
        </div>
      </header>

      {/* Contact Methods */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Contact */}
            <div className="space-y-6">
              <a 
                href="tel:7022221964" 
                className="flex items-center gap-4 p-6 bg-amber-500 text-stone-950 rounded-sm hover:bg-amber-400 transition-all"
              >
                <div className="w-12 h-12 bg-stone-950/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xl font-semibold">Call or Text</span>
                  <span className="text-stone-800 text-lg">702-222-1964</span>
                </div>
              </a>

              <a 
                href="mailto:jan@drjanduffy.com" 
                className="flex items-center gap-4 p-6 bg-stone-900 border border-stone-800 text-stone-200 rounded-sm hover:border-amber-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-semibold">Email</span>
                  <span className="text-stone-400">jan@drjanduffy.com</span>
                </div>
              </a>

              <div className="p-6 bg-stone-900/50 border border-stone-800 rounded-sm">
                <h3 className="text-lg font-semibold text-stone-100 mb-4">Office Hours</h3>
                <div className="space-y-2 text-stone-400">
                  <p><strong className="text-stone-300">Monday - Sunday:</strong> 8:00 AM - 8:00 PM</p>
                  <p className="text-sm mt-4 text-amber-400">
                    Text messages welcome for quick questions!
                  </p>
                </div>
              </div>

              <div className="p-6 bg-stone-900/50 border border-stone-800 rounded-sm">
                <h3 className="text-lg font-semibold text-stone-100 mb-4">Brokerage</h3>
                <p className="text-stone-300 font-medium">Berkshire Hathaway HomeServices</p>
                <p className="text-stone-400">Nevada Properties</p>
                <p className="text-stone-500 text-sm mt-2">REALTOR® S.0197614.LLC</p>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="rounded-sm overflow-hidden border border-stone-800 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12889.847361817894!2d-115.33559635!3d36.2467995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf3b2b3d3b3b%3A0x3b3b3b3b3b3b3b3b!2sKestrel%20Village%2C%20Las%20Vegas%2C%20NV%2089138!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kestrel Village Location"
                />
              </div>
              <div className="p-6 bg-stone-900/50 border border-stone-800 rounded-sm">
                <h3 className="text-lg font-semibold text-stone-100 mb-2">Service Area</h3>
                <p className="text-stone-400">
                  Kestrel Village, Summerlin West, Las Vegas, NV 89138
                </p>
                <p className="text-stone-500 text-sm mt-2">
                  Specializing in new construction homes throughout Summerlin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-100 mb-2">
                  Important: Call Before Visiting Model Homes
                </h3>
                <p className="text-stone-300 leading-relaxed">
                  Builders require agent registration on your <strong className="text-amber-400">very first visit</strong>. 
                  If you walk into a model home alone, the builder&apos;s sales rep will be assigned to represent you, 
                  and I can no longer help negotiate on your behalf. 
                  <span className="text-amber-400"> Call me first—I&apos;ll meet you there!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-900 to-stone-950">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">
              Live MLS Listings
            </p>
            <h2
              className="mt-4 text-2xl font-light md:text-3xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Browse <span className="italic text-amber-400">Available Homes</span>
            </h2>
          </div>

          <div className="bg-white rounded-sm overflow-hidden shadow-xl">
            <div 
              dangerouslySetInnerHTML={{
                __html: `<realscout-office-listings 
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                  sort-order="NEWEST"
                  listing-status="For Sale"
                  property-types=",SFR,MF,TC"
                  price-min="400000"
                  price-max="1000000"
                ></realscout-office-listings>`
              }}
            />
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
