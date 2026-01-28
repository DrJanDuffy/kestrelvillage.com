'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { communities } from '@/data/communities';

export default function KestrelVillage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: 'buyer' });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'tel:7022221964';
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy - Kestrel Village Specialist",
            "description": "Expert REALTOR® specializing in Kestrel Village new construction homes in Summerlin West, Las Vegas.",
            "url": "https://kestrelvillage.com",
            "telephone": "+1-702-222-1964",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89138",
              "addressCountry": "US"
            },
            "areaServed": "Kestrel Village, Summerlin West, Las Vegas",
            "priceRange": "$480,000 - $800,000+"
          })
        }}
      />

      <div className="min-h-screen bg-stone-950 text-stone-100">
        {/* Mobile Call Button */}
        <a 
          href="tel:7022221964"
          className="fixed bottom-6 right-6 z-50 md:hidden bg-amber-500 text-stone-950 p-4 rounded-full shadow-2xl shadow-amber-500/30 animate-pulse"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center">
                <span className="text-stone-950 font-bold text-sm">KV</span>
              </div>
              <span className="font-semibold text-lg hidden sm:block">Kestrel Village</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-stone-400">
              <a href="#communities" className="hover:text-amber-400 transition-colors">Communities</a>
              <a href="#why-representation" className="hover:text-amber-400 transition-colors">Why Me</a>
              <a href="#amenities" className="hover:text-amber-400 transition-colors">Amenities</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
            <a href="tel:7022221964" className="bg-amber-500 text-stone-950 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-amber-400 transition-colors">
              702-222-1964
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
                               radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm tracking-wider uppercase">Summerlin West • 3,000+ Ft Elevation</span>
            </div>

            <h1 
              className={`text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="block text-stone-100">Kestrel Village</span>
              <span className="block text-amber-400 italic mt-2">New Construction</span>
            </h1>

            <p 
              className={`text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Panoramic valley views from Las Vegas&apos; most sought-after new village. 
              New homes from <span className="text-amber-400 font-medium">$480K</span> by Summerlin&apos;s premier builders.
            </p>

            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {[
                { value: '6+', label: 'New Communities' },
                { value: '5', label: 'Top Builders' },
                { value: '$480K', label: 'Starting From' },
                { value: '551+', label: 'New Homes' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-stone-900/50 rounded-sm border border-stone-800/50">
                  <div className="text-2xl md:text-3xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a 
                href="tel:7022221964"
                className="group px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule VIP Tour: 702-222-1964
              </a>
              <a 
                href="#communities"
                className="px-8 py-4 border border-stone-700 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-all"
              >
                Explore Communities →
              </a>
            </div>

            <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-stone-600 text-xs uppercase tracking-widest mb-4">Featuring Homes By</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-stone-500 text-sm">
                {['Woodside Homes', 'Pulte Homes', 'Lennar', 'Taylor Morrison', 'Richmond American'].map((b, i) => (
                  <span key={i} className="hover:text-amber-400 transition-colors">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Why Buyer Representation */}
        <section id="why-representation" className="py-24 px-6 bg-gradient-to-b from-stone-950 to-stone-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm uppercase tracking-widest">Critical Information</span>
              <h2 className="text-3xl md:text-5xl font-light mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why You Need <span className="text-amber-400 italic">Your Own Agent</span>
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-500/30 rounded-sm p-8 md:p-10 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-stone-100 mb-3">First Visit Registration Required</h3>
                  <p className="text-stone-300 text-lg leading-relaxed">
                    Builders require your agent to register you on your <strong className="text-amber-400">very first visit</strong>. 
                    If you walk into a model home alone, I can no longer represent you in that community. 
                    <span className="text-amber-400"> Call me first—I&apos;ll meet you there.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🛡️', title: 'Protect Your Interests', desc: "Builder sales reps work for the builder. I work exclusively for you—negotiating upgrades, credits, and terms." },
                { icon: '💰', title: 'Zero Cost To You', desc: "The builder pays my commission. My 30+ years of contract expertise costs you nothing extra." },
                { icon: '📋', title: 'Contract Review', desc: "Builder contracts favor builders. I've reviewed hundreds—I know what to negotiate and what red flags to catch." }
              ].map((item, i) => (
                <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-amber-500/30 transition-all">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h4 className="text-lg font-semibold text-stone-100 mb-2">{item.title}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section id="communities" className="py-24 px-6 bg-stone-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm uppercase tracking-widest">New Construction</span>
              <h2 className="text-3xl md:text-5xl font-light mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kestrel Village <span className="text-amber-400 italic">Communities</span>
              </h2>
              <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
                Six distinct neighborhoods offering townhomes to single-family estates. Contemporary Spanish architecture and Summerlin&apos;s signature quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((n) => (
                <div 
                  key={n.slug}
                  className="group bg-stone-950 border border-stone-800 rounded-sm overflow-hidden hover:border-amber-500/50 transition-all duration-300"
                >
                  <Link href={`/communities/${n.slug}`} className="block">
                    <div className="bg-gradient-to-r from-amber-500/10 to-transparent p-6 border-b border-stone-800">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-xs text-amber-500 uppercase tracking-wider">{n.builder}</span>
                          <h3 className="text-2xl font-light text-stone-100 mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{n.name}</h3>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full ${n.status === 'Now Selling' ? 'bg-green-500/20 text-green-400' : n.status === 'Move-In Ready' ? 'bg-amber-500/20 text-amber-400' : 'bg-stone-700 text-stone-400'}`}>
                          {n.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <span className="text-xs text-stone-500 uppercase">Type</span>
                          <p className="text-stone-200">{n.type}</p>
                        </div>
                        <div>
                          <span className="text-xs text-stone-500 uppercase">Sq Ft</span>
                          <p className="text-stone-200">{n.sqft}</p>
                        </div>
                        <div>
                          <span className="text-xs text-stone-500 uppercase">Beds</span>
                          <p className="text-stone-200">{n.beds}</p>
                        </div>
                        <div>
                          <span className="text-xs text-stone-500 uppercase">Garage</span>
                          <p className="text-stone-200">{n.garage}</p>
                        </div>
                      </div>

                      <p className="text-sm text-stone-400 mb-6 min-h-[40px]">{n.highlight}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-stone-800">
                        <div>
                          <span className="text-2xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>{n.price}</span>
                          <span className="text-xs text-stone-500 ml-2">• {n.units} homes</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <a 
                    href="tel:7022221964"
                    className="block bg-stone-900 border-t border-stone-800 p-4 text-center text-sm font-medium text-stone-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all"
                  >
                    Schedule Tour →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-24 px-6 bg-stone-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm uppercase tracking-widest">Village Lifestyle</span>
              <h2 className="text-3xl md:text-5xl font-light mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kestrel Village <span className="text-amber-400 italic">Amenities</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Kestrel Creek Arroyo', desc: '7.5-acre linear park with trails, passive turf areas, and shaded seating. Opened 2025.', icon: '🌿' },
                { title: 'Bluebird Park', desc: 'Climbing play structure, playground, and shaded seating areas for families.', icon: '🎪' },
                { title: 'Walkable Connectivity', desc: 'Pedestrian access between neighborhoods, parks, and future retail services.', icon: '🚶' },
                { title: 'Elevated Views', desc: '3,000+ ft elevation with panoramic Las Vegas valley and mountain vistas.', icon: '🏔️' },
                { title: 'Minutes to Red Rock', desc: 'Quick access to Red Rock Canyon, Downtown Summerlin, and top-rated schools.', icon: '🚗' },
                { title: 'Contemporary Architecture', desc: 'Modern Spanish-inspired designs with open floor plans and smart home features.', icon: '🏠' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-stone-900/30 border border-stone-800/50 rounded-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-100 mb-1">{item.title}</h4>
                    <p className="text-stone-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-24 px-6 bg-gradient-to-b from-stone-900 to-stone-950">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-amber-500 text-sm uppercase tracking-widest">Your Kestrel Village Expert</span>
            <h2 className="text-3xl md:text-5xl font-light mt-4 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dr. Jan Duffy
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              30+ years representing Las Vegas buyers. Ph.D. in Market Research. $127M+ in sales. 
              I specialize in new construction and know exactly how to negotiate with builders.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-500">
              <span>REALTOR® S.0197614.LLC</span>
              <span>•</span>
              <span>Berkshire Hathaway HomeServices</span>
              <span>•</span>
              <span>500+ Vegas Families Served</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 bg-stone-950">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ready to Tour <span className="text-amber-400 italic">Kestrel Village?</span>
                </h2>
                <p className="text-stone-400 mt-4">
                  Call or text me directly. I&apos;ll meet you at the model homes and ensure you&apos;re properly registered.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <a href="tel:7022221964" className="flex items-center gap-4 p-4 bg-amber-500 text-stone-950 rounded-sm hover:bg-amber-400 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <span className="block font-semibold">Call or Text Now</span>
                      <span className="text-stone-800">702-222-1964</span>
                    </div>
                  </a>
                  <a href="mailto:jan@drjanduffy.com" className="flex items-center gap-4 p-4 bg-stone-800 text-stone-200 rounded-sm hover:bg-stone-700 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <span className="block font-semibold">Email</span>
                      <span className="text-stone-400">jan@drjanduffy.com</span>
                    </div>
                  </a>
                  <div className="text-sm text-stone-500 pt-4">
                    <p><strong>Office Hours:</strong> 7 days, 8am - 8pm</p>
                    <p className="mt-2"><strong>Tip:</strong> Text works great for quick questions!</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 bg-stone-800 border border-stone-700 rounded-sm text-stone-100 placeholder-stone-500 focus:border-amber-500 focus:outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-stone-800 border border-stone-700 rounded-sm text-stone-100 placeholder-stone-500 focus:border-amber-500 focus:outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  <input type="email" placeholder="Email" className="w-full p-3 bg-stone-800 border border-stone-700 rounded-sm text-stone-100 placeholder-stone-500 focus:border-amber-500 focus:outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <select className="w-full p-3 bg-stone-800 border border-stone-700 rounded-sm text-stone-100 focus:border-amber-500 focus:outline-none" value={formData.interest} onChange={(e) => setFormData({...formData, interest: e.target.value})}>
                    <option value="buyer">Buying New Construction</option>
                    <option value="investor">Investment Property</option>
                    <option value="relocation">Relocating to Vegas</option>
                    <option value="info">Just Want Information</option>
                  </select>
                  <button type="submit" className="w-full p-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-all">
                    Request VIP Tour →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-stone-950 border-t border-stone-800">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-stone-100 font-semibold">Dr. Jan Duffy | Las Vegas Real Estate Expert</p>
                <p className="text-stone-500 text-sm mt-1">Berkshire Hathaway HomeServices Nevada Properties</p>
                <p className="text-stone-600 text-xs mt-1">REALTOR® S.0197614.LLC</p>
              </div>
              <div className="text-center md:text-right">
                <a href="tel:7022221964" className="text-amber-400 font-semibold hover:text-amber-300">702-222-1964</a>
                <p className="text-stone-500 text-sm mt-1">© 2025 KestrelVillage.com</p>
              </div>
            </div>
            <p className="text-stone-600 text-xs text-center mt-8">
              Information deemed reliable but not guaranteed. Prices, availability, and incentives subject to change. Contact builder or Dr. Jan Duffy for current information.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
