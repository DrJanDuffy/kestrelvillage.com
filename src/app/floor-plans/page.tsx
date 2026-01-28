import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Kestrel Village Floor Plans | New Construction Home Designs',
  description: 'Browse Kestrel Village floor plans from Woodside Homes, Lennar, and Pulte. Townhomes, single-story, two-story, and NextGen designs. 1,441 to 3,335 sq ft.',
  alternates: { canonical: `${SITE_URL}/floor-plans` },
  keywords: ['Kestrel Village floor plans', 'Summerlin new construction floor plans', 'Woodside Homes floor plans', 'Lennar NextGen', 'Pulte floor plans'],
  openGraph: {
    title: 'Kestrel Village Floor Plans | Home Designs',
    description: 'Explore floor plans from 1,441 to 3,335 sq ft in Kestrel Village. Townhomes, single-story, two-story, and NextGen options.',
    url: `${SITE_URL}/floor-plans`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const floorPlans = {
  woodside: {
    name: 'Woodside Homes',
    communities: [
      {
        name: 'Vireo',
        status: 'Final Opportunity',
        plans: [
          { name: 'Aspen', sqft: '1,441', beds: 2, baths: 2.5, stories: 2, garage: 2, price: 'From $477K' },
          { name: 'Sage', sqft: '1,623', beds: 3, baths: 2.5, stories: 2, garage: 2, price: 'From $495K' },
          { name: 'Acacia', sqft: '1,697', beds: 3, baths: 2.5, stories: 3, garage: 2, price: 'From $510K' },
          { name: 'Laurel', sqft: '1,884', beds: 3, baths: 3.5, stories: 3, garage: 2, price: 'From $525K' },
          { name: 'Rowan', sqft: '2,034', beds: 3, baths: 3.5, stories: 3, garage: 2, price: 'From $545K' },
        ],
      },
      {
        name: 'Dove Rock',
        status: 'Now Preselling',
        plans: [
          { name: 'Plan 1', sqft: '1,724', beds: 2, baths: 2.5, stories: 2, garage: 2, price: 'From $520K' },
          { name: 'Plan 2', sqft: '1,923', beds: 3, baths: 2.5, stories: 2, garage: 2, price: 'From $545K' },
          { name: 'Plan 3', sqft: '2,217', beds: 4, baths: 2.5, stories: 2, garage: 2, price: 'From $575K' },
        ],
      },
      {
        name: 'Falcon Crest',
        status: 'Coming Soon',
        plans: [
          { name: 'Plan A', sqft: '1,950', beds: 3, baths: 2.5, stories: 1, garage: 3, price: 'From $580K' },
          { name: 'Plan B', sqft: '2,084', beds: 4, baths: 3, stories: 1, garage: 3, price: 'From $610K' },
          { name: 'Plan C', sqft: '2,218', beds: 5, baths: 3.5, stories: 1, garage: 3, price: 'From $640K' },
        ],
      },
    ],
  },
  lennar: {
    name: 'Lennar',
    communities: [
      {
        name: 'Mockingbird',
        status: 'Now Selling',
        plans: [
          { name: 'Bobby', sqft: '3,000', beds: 5, baths: 3, stories: 2, garage: 2, price: 'From $838K', nextgen: false },
          { name: 'Peter', sqft: '3,167', beds: 5, baths: 4, stories: 2, garage: 3, price: 'From $875K', nextgen: false },
          { name: 'Greg NextGen', sqft: '3,335', beds: 5, baths: 4, stories: 2, garage: 3, price: 'From $920K', nextgen: true },
        ],
      },
    ],
  },
  pulte: {
    name: 'Pulte Homes',
    communities: [
      {
        name: 'Blacktail',
        status: 'Coming Soon',
        plans: [
          { name: 'Residence 1', sqft: '2,100', beds: 3, baths: 2.5, stories: 2, garage: 2, price: 'From $590K' },
          { name: 'Residence 2', sqft: '2,450', beds: 4, baths: 3, stories: 2, garage: 2, price: 'From $640K' },
          { name: 'Residence 3', sqft: '2,800', beds: 5, baths: 3.5, stories: 2, garage: 3, price: 'From $695K' },
        ],
      },
    ],
  },
};

export default function FloorPlansPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <nav className="sticky top-0 z-40 border-b border-stone-800/50 bg-stone-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-amber-500">
              <span className="text-sm font-bold text-stone-950">KV</span>
            </div>
            <span className="hidden font-semibold text-lg sm:block">Kestrel Village</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/communities" className="text-sm text-stone-400 hover:text-amber-400 transition-colors hidden sm:block">
              Communities
            </Link>
            <a href="tel:7022221964" className="rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition-colors">
              702-222-1964
            </a>
          </div>
        </div>
      </nav>

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">Home Designs</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Kestrel Village <span className="italic text-amber-400">Floor Plans</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Explore floor plans from 1,441 to 3,335 sq ft. Townhomes, single-story, two-story, and NextGen multigenerational designs.
          </p>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="px-6 py-8 bg-stone-900/50 border-b border-stone-800/50">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>14+</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Floor Plans</div>
            </div>
            <div>
              <div className="text-2xl font-light text-blue-400" style={{ fontFamily: "'Playfair Display', serif" }}>1,441</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Min Sq Ft</div>
            </div>
            <div>
              <div className="text-2xl font-light text-purple-400" style={{ fontFamily: "'Playfair Display', serif" }}>3,335</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Max Sq Ft</div>
            </div>
            <div>
              <div className="text-2xl font-light text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>2-5</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Bedrooms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Woodside Homes */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🏠</span>
            <div>
              <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Woodside <span className="italic text-amber-400">Homes</span>
              </h2>
              <p className="text-stone-400 text-sm">3 Communities • Energy Star® Certified</p>
            </div>
          </div>

          {floorPlans.woodside.communities.map((community, idx) => (
            <div key={idx} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-stone-100">{community.name}</h3>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  community.status === 'Now Selling' || community.status === 'Now Preselling' 
                    ? 'bg-green-500/20 text-green-400' 
                    : community.status === 'Final Opportunity' 
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {community.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {community.plans.map((plan, i) => (
                  <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-sm p-5 hover:border-amber-500/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-medium text-stone-100">{plan.name}</h4>
                      <span className="text-amber-400 font-semibold text-sm">{plan.price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>📐</span> {plan.sqft} sq ft
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>🛏️</span> {plan.beds} bed
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>🚿</span> {plan.baths} bath
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>🏗️</span> {plan.stories} story
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-stone-800 text-xs text-stone-500">
                      {plan.garage}-car garage
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lennar */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🏡</span>
            <div>
              <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="italic text-purple-400">Lennar</span>
              </h2>
              <p className="text-stone-400 text-sm">Everything&apos;s Included® • NextGen® Homes</p>
            </div>
          </div>

          {floorPlans.lennar.communities.map((community, idx) => (
            <div key={idx} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-stone-100">{community.name}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  {community.status}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {community.plans.map((plan, i) => (
                  <div key={i} className={`bg-stone-950 border rounded-sm p-5 hover:border-purple-500/50 transition-all ${
                    plan.nextgen ? 'border-purple-500/30' : 'border-stone-800'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-medium text-stone-100">{plan.name}</h4>
                        {plan.nextgen && (
                          <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">
                            NextGen® Suite
                          </span>
                        )}
                      </div>
                      <span className="text-purple-400 font-semibold text-sm">{plan.price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>📐</span> {plan.sqft} sq ft
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>🛏️</span> {plan.beds} bed
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>🚿</span> {plan.baths} bath
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>🏗️</span> {plan.stories} story
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-stone-800 text-xs text-stone-500">
                      {plan.garage}-car garage • Everything&apos;s Included®
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* NextGen Explainer */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-sm p-6 mt-8">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">What is NextGen®?</h3>
            <p className="text-stone-400 text-sm">
              Lennar&apos;s NextGen® homes feature a &quot;home within a home&quot; — a private suite with its own 
              entrance, living area, bedroom, bathroom, kitchenette, and laundry. Perfect for multigenerational 
              living, adult children, or rental income.
            </p>
          </div>
        </div>
      </section>

      {/* Pulte Homes */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🏘️</span>
            <div>
              <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pulte <span className="italic text-blue-400">Homes</span>
              </h2>
              <p className="text-stone-400 text-sm">Life Tested® Designs • Smart Home Ready</p>
            </div>
          </div>

          {floorPlans.pulte.communities.map((community, idx) => (
            <div key={idx} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-stone-100">{community.name}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                  {community.status}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {community.plans.map((plan, i) => (
                  <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-sm p-5 hover:border-blue-500/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-medium text-stone-100">{plan.name}</h4>
                      <span className="text-blue-400 font-semibold text-sm">{plan.price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>📐</span> {plan.sqft} sq ft
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>🛏️</span> {plan.beds} bed
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>🚿</span> {plan.baths} bath
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <span>🏗️</span> {plan.stories} story
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-stone-800 text-xs text-stone-500">
                      {plan.garage}-car garage • Life Tested®
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Need Help Choosing a <span className="italic text-amber-400">Floor Plan?</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              Dr. Jan Duffy has toured every model home in Kestrel Village and can help you find the perfect 
              floor plan for your lifestyle and budget.
            </p>
            <a href="tel:7022221964" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 702-222-1964
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Available Now</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Homes for <span className="italic text-amber-400">Sale</span>
            </h2>
          </div>

          <div className="bg-white rounded-sm overflow-hidden shadow-xl">
            <div dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="PRICE_LOW"
                listing-status="For Sale"
                property-types=",SFR,MF,TC"
                price-min="400000"
                price-max="1000000"
              ></realscout-office-listings>`
            }} />
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-800 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-stone-500 md:text-left">
            Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties | REALTOR® S.0197614.LLC
          </p>
          <a href="tel:7022221964" className="font-semibold text-amber-400 hover:text-amber-300">702-222-1964</a>
        </div>
        <p className="text-stone-600 text-xs text-center mt-4 max-w-4xl mx-auto">
          Floor plans and pricing subject to change without notice. Contact builder or Dr. Jan Duffy for current availability.
        </p>
      </footer>
    </div>
  );
}
