import React from 'react';

export default function HomePage() {
  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(storeAddress)}`;

  const categories = [
    { title: 'Bridal Lehengas', desc: 'Handcrafted Zardozi, Dabka & Velvet Bridal Masterpieces' },
    { title: 'Lakhnavi Chikankari', desc: 'Pure Georgette & Organza with Mukaish Badla Work' },
    { title: 'Groom Sherwanis', desc: 'Regal Silk & Velvet Sherwanis with Coordinated Stoles' },
    { title: 'Heritage Sarees', desc: 'Handwoven Banarasi Katan Silk & Royal Trousseau' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#221c18]">
      {/* 1. HEADER SKELETON */}
      <header className="border-b border-[#e2d7c5] bg-white sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <a href="/" className="block">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#380e15] uppercase">
                Anurosh
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#8e6d2b] uppercase font-medium">
                Bridal & Ethnic • Lucknow
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-wider font-medium text-[#5c4e43]">
            <a href="#collections" className="hover:text-[#380e15] transition-colors">Collections</a>
            <a href="#about" className="hover:text-[#380e15] transition-colors">About</a>
            <a href="#location" className="hover:text-[#380e15] transition-colors">Store Location</a>
            <a href="#contact" className="hover:text-[#380e15] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${phone}`}
              className="text-xs uppercase tracking-wider px-3.5 py-1.5 border border-[#380e15] text-[#380e15] font-semibold hover:bg-[#380e15] hover:text-white transition-colors"
            >
              Call Store
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SKELETON */}
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-[#380e15] text-[#f7ede2] border-b border-[#521722]">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Indira Nagar • Lucknow
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Anurosh — Premium Bridal & Ethnic Clothing
            </h1>

            <p className="text-sm sm:text-base text-[#dfd4c7] max-w-2xl mx-auto leading-relaxed font-light">
              Bespoke bridal lehengas, authentic Lakhnavi Chikankari couture, and royal ethnic wear crafted for generation-defining weddings.
            </p>

            {/* Store Address Banner */}
            <div className="p-4 bg-[#27080e] border border-[#d4af37]/40 max-w-2xl mx-auto text-xs sm:text-sm text-[#f5ebd7]">
              <span className="font-semibold text-white">Store Address: </span>
              {storeAddress}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#collections"
                className="px-6 py-3 bg-[#d4af37] text-[#22170f] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#e4bf47] transition-colors"
              >
                Explore Collections
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#d4af37] text-[#f5ebd7] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#d4af37]/15 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* 3. COLLECTIONS SKELETON */}
        <section id="collections" className="py-16 md:py-20 border-b border-[#e5d8c6]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8e6d2b] font-semibold block mb-1">
                Curated Categories
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#380e15]">
                Bridal & Ethnic Collections
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e2d5c2] p-6 flex flex-col justify-between shadow-sm hover:border-[#8e6d2b] transition-colors"
                >
                  <div>
                    <span className="text-xs font-mono text-[#8e6d2b] block mb-2">0{idx + 1}</span>
                    <h3 className="font-serif text-lg font-bold text-[#380e15] mb-2">{cat.title}</h3>
                    <p className="text-xs text-[#63554b] leading-relaxed">{cat.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#f0e4d2] text-[11px] uppercase tracking-wider text-[#8e6d2b] font-medium">
                    Made to Measure
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ABOUT SKELETON */}
        <section id="about" className="py-16 bg-[#f7f2ea] border-b border-[#e5d8c6]">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8e6d2b] font-semibold block">
              Heritage Craft
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#380e15]">
              Handcrafted in the City of Nawabs
            </h2>
            <p className="text-xs sm:text-sm text-[#5a4d44] leading-relaxed max-w-2xl mx-auto">
              At Anurosh, every bridal ensemble preserves generations of Lucknow needlecraft — from delicate shadow Chikankari and Mukaish embellishments to intricate gold Zardozi. We invite you to experience personalized fittings in our private Indira Nagar studio.
            </p>
          </div>
        </section>

        {/* 5. STORE LOCATION & VISIT SKELETON */}
        <section id="location" className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8e6d2b] font-semibold block mb-1">
                Flagship Studio
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#380e15]">
                Visit Us in Lucknow
              </h2>
            </div>

            <div className="bg-white border border-[#e2d5c2] p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#380e15] mb-2">Store Address</h3>
                  <address className="not-italic text-sm text-[#4a3f36] leading-relaxed mb-4">
                    <strong>Anurosh Clothing</strong><br />
                    18/355, Sadbhavna Road,<br />
                    Near Maitri Park, Indira Nagar,<br />
                    Lucknow, Uttar Pradesh - 226016
                  </address>

                  <p className="text-xs text-[#706155] leading-relaxed">
                    Landmark: Just 2 minutes from Maitri Park, easily accessible from Faizabad Road and Gomti Nagar.
                  </p>
                </div>

                <div className="space-y-4 md:border-l md:border-[#f0e4d2] md:pl-6">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#380e15] mb-1">Timings</h3>
                    <p className="text-xs text-[#4a3f36]">Monday – Sunday: 10:30 AM – 9:00 PM</p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#380e15] mb-1">Contact</h3>
                    <p className="text-xs text-[#4a3f36]">Phone: <a href={`tel:${phone}`} className="underline font-semibold">{phone}</a></p>
                    <p className="text-xs text-[#4a3f36]">Email: contact@anurosh.com</p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2.5 bg-[#380e15] text-[#f7ede2] text-xs uppercase tracking-wider font-semibold hover:bg-[#521722] transition-colors"
                    >
                      Open Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. FOOTER SKELETON */}
      <footer id="contact" className="bg-[#1e080d] text-[#cfc1b4] py-8 border-t border-[#3d111a] text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-serif text-lg font-bold tracking-widest text-white uppercase block">
              Anurosh
            </span>
            <p className="text-[11px] text-[#9c8d82] mt-0.5">
              Premium Bridal & Ethnic Clothing • 18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow - 226016
            </p>
          </div>

          <div className="text-center md:text-right text-[11px] text-[#9c8d82]">
            <p>© {new Date().getFullYear()} Anurosh Lucknow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
