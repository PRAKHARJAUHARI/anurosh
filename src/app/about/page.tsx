import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Atelier & Awadhi Heritage | Anurosh — Lucknow',
  description:
    'The House of Anurosh — Preserving centuries of royal Awadhi karigari, handloom textiles, and artisanal zardozi embroidery in Lucknow. Flagship Studio: 18/355, Sadbhavna Road, Indira Nagar.',
};

export default function AboutPage() {
  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';

  return (
    <div className="min-h-screen bg-[#0c0908] text-[#fbf7f0] py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] font-light block">
            The House of Anurosh
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] text-[#fcfaf7] uppercase">
            The Atelier & Heritage
          </h1>
          <p className="text-xs sm:text-sm text-[#a8998a] font-light tracking-[0.15em] leading-relaxed">
            Rooted in the royal craft traditions of Lucknow, Anurosh reinterprets historical Awadhi needlecraft for weddings and luxury celebrations worldwide.
          </p>
          <div className="w-16 h-px bg-[#c5a880]/50 mx-auto mt-4" />
        </div>

        {/* Story Section 1: The Craft of Awadh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-[#2b221a] bg-[#140f0c]">
            <img
              src="/campaign-finale.jpg"
              alt="Anurosh Couture Runway Showcase"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-light block">
              Generational Karigari
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.18em] text-[#fcfaf7] uppercase">
              1,200 Hours in Every Silhouette
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a99a] font-light leading-relaxed">
              In an age of instant industrial production, Anurosh is an uncompromising sanctuary of patience. Our master artisans in Lucknow inherit their needlecraft from generations of royal Awadhi karkhanas.
            </p>
            <p className="text-xs sm:text-sm text-[#b8a99a] font-light leading-relaxed">
              Every ceremonial lehenga, sherwani, and sari undergoes months of meticulous preparation: from hand-dyeing organic silk threads to beating genuine gold and silver wire (mukaish) into pure diaphanous georgettes.
            </p>
          </div>
        </div>

        {/* Story Section 2: Neoclassical Architecture & Retail Sanctuary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-light block">
              The Flagship Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.18em] text-[#fcfaf7] uppercase">
              The Indira Nagar Sanctuary
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a99a] font-light leading-relaxed">
              Our flagship studio at Sadbhavna Road is envisioned as an architectural museum for royal bridal couture. Designed with grand neoclassical white pillars, arched windows, and intimate private fitting salons, the atelier welcomes brides and grooms for private bespoke consultations.
            </p>
            <address className="not-italic text-xs text-[#c5a880] font-light leading-relaxed border-l border-[#c5a880]/40 pl-4">
              <strong>Anurosh Flagship Atelier</strong><br />
              18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar,<br />
              Lucknow, Uttar Pradesh - 226016<br />
              Hours: Mon – Sun: 10:30 AM – 9:00 PM
            </address>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-[#2b221a] bg-[#140f0c] order-1 lg:order-2">
            <img
              src="/anurosh-facade.jpg"
              alt="Anurosh Neoclassical Facade"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Footer Callout */}
        <div className="border border-[#2b221a] bg-[#140f0c] p-10 sm:p-14 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-light block">
            Begin Your Bridal Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase">
            Visit Our Flagship Studio
          </h2>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-light tracking-[0.2em] uppercase">
            <Link
              href="/#appointment"
              className="px-8 py-3.5 bg-[#c5a880] text-[#0c0908] hover:bg-white transition-colors"
            >
              Book Studio Fitting
            </Link>
            <Link
              href="/collections/bridal"
              className="px-8 py-3.5 border border-white/40 text-white hover:bg-white hover:text-[#0c0908] transition-colors"
            >
              View Bridal Collection
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}