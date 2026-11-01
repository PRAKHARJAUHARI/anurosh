import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Heritage Bridal Couture | Anurosh — Lucknow',
  description:
    'Anurosh Heritage Bridal Couture — Handcrafted pure silk lehengas, authentic Awadhi zardozi, and ceremonial veils. Flagship Studio: 18/355, Sadbhavna Road, Indira Nagar, Lucknow.',
};

export default function BridalPage() {
  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';

  const bridalLooks = [
    {
      title: 'The Royal Awadh Lehenga',
      category: 'Haute Bridal',
      image: '/campaign-bridal.jpg',
      code: 'LOOK 01',
      desc: 'Crimson pure raw silk base laden with antique bullion zardozi, hand-beaten gold dabka, and micro-velvet border.',
    },
    {
      title: 'The Zardozi & Mukaish Veil',
      category: 'Ceremonial Dupatta',
      image: '/campaign-couture.jpg',
      code: 'LOOK 02',
      desc: 'Fine diaphanous tulle edged with generational Lakhnavi kiran, studded with pure silver-gilt mukaish dots.',
    },
    {
      title: 'The Imperial Groom Ensemble',
      category: 'Regal Sherwani',
      image: '/campaign-groom.jpg',
      code: 'LOOK 03',
      desc: 'Ivory raw silk sherwani with antique metal wirework embroidery, styled with ceremonial stole.',
    },
    {
      title: 'The Grand Trousseau Suite',
      category: 'Bridal Archive',
      image: '/campaign-finale.jpg',
      code: 'LOOK 04',
      desc: 'Complete ceremonial bridal wardrobe tailored over 1,200 hours in our Indira Nagar atelier.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0908] text-[#fbf7f0] py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] font-light block">
            Couture Archives • 2026
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] text-[#fcfaf7] uppercase">
            Heritage Bridal
          </h1>
          <p className="text-xs sm:text-sm text-[#a8998a] font-light tracking-[0.15em] leading-relaxed">
            Every Anurosh bridal lehenga is a living tribute to Awadhi royal ateliers, woven by master karigars for generation-defining weddings.
          </p>
          <div className="w-16 h-px bg-[#c5a880]/50 mx-auto mt-4" />
        </div>

        {/* Editorial Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {bridalLooks.map((look) => (
            <article key={look.code} className="border border-[#231b15] bg-[#140f0c] p-6 sm:p-8 space-y-6 group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0c0908]">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-black/60 px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-[#c5a880] backdrop-blur-sm">
                  {look.code}
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-light block">
                  {look.category}
                </span>
                <h2 className="font-serif text-2xl font-light tracking-[0.18em] text-[#fcfaf7] uppercase group-hover:text-[#c5a880] transition-colors">
                  {look.title}
                </h2>
                <p className="text-xs text-[#9c8e81] font-light leading-relaxed">
                  {look.desc}
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-[#231b15] text-[11px] uppercase tracking-[0.2em]">
                  <Link href="/#appointment" className="text-[#c5a880] hover:underline flex items-center gap-1.5">
                    <span>Request Fitting</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[#6d5f54]">Handcrafted in Lucknow</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Private Bridal Fitting Callout */}
        <div className="border border-[#2b221a] bg-[#140f0c] p-10 sm:p-16 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-light block">
            Bespoke Appointments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase">
            Experience Private Salon Fittings
          </h2>
          <p className="text-xs sm:text-sm text-[#a8998a] max-w-xl mx-auto font-light leading-relaxed">
            Visit our Indira Nagar flagship atelier for a personalized bridal consultation with our master couturiers. Virtual NRI consultations also available worldwide.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-light tracking-[0.2em] uppercase">
            <Link
              href="/#appointment"
              className="px-8 py-3.5 bg-[#c5a880] text-[#0c0908] hover:bg-white transition-colors"
            >
              Book Studio Fitting
            </Link>
            <a
              href={`tel:${phone}`}
              className="px-8 py-3.5 border border-white/40 text-white hover:bg-white hover:text-[#0c0908] transition-colors"
            >
              Call Concierge: {phone}
            </a>
          </div>
          <p className="text-[11px] text-[#736357] font-light pt-2">
            Flagship Studio: 18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow - 226016
          </p>
        </div>

      </div>
    </div>
  );
}