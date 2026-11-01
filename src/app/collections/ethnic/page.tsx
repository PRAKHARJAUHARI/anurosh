import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Heritage Ethnic & Chikankari | Anurosh — Lucknow',
  description:
    'Anurosh Heritage Ethnic Collection — Pure Lakhnavi Chikankari, antique mukaish badla, and imperial Awadhi menswear. Atelier: 18/355, Sadbhavna Road, Indira Nagar, Lucknow.',
};

export default function EthnicPage() {
  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';

  const ethnicLooks = [
    {
      title: 'Lakhnavi Chikankari Anarkali',
      category: 'Haute Chikankari',
      image: '/campaign-couture.jpg',
      code: 'ETHNIC 01',
      desc: 'Hand-sewn 32-stitch shadow work on pure georgette, embellished with antique silver mukaish badla.',
    },
    {
      title: 'The Imperial Awadh Sherwani',
      category: 'Heritage Menswear',
      image: '/campaign-groom.jpg',
      code: 'ETHNIC 02',
      desc: 'Raw silk tailored with tonal bullion needlework, worn with a hand-woven tissue doshala.',
    },
    {
      title: 'The Royal Velvet Bandhgala',
      category: 'Regal Menswear',
      image: '/campaign-bridal.jpg',
      code: 'ETHNIC 03',
      desc: 'Deep micro-velvet jacket accented with heirloom hand-carved gold buttons and zardozi crest.',
    },
    {
      title: 'The Badla Saree Edit',
      category: 'Fine Handloom',
      image: '/campaign-finale.jpg',
      code: 'ETHNIC 04',
      desc: 'Sheer organza hand-strewn with real gold mukaish work and antique gota patti borders.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0908] text-[#fbf7f0] py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] font-light block">
            Awadhi Handloom Archives
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] text-[#fcfaf7] uppercase">
            Heritage Ethnic
          </h1>
          <p className="text-xs sm:text-sm text-[#a8998a] font-light tracking-[0.15em] leading-relaxed">
            The authentic craftsmanship of Lucknow. Hand-embroidered Chikankari, antique mukaish badla, and timeless ceremonial menswear.
          </p>
          <div className="w-16 h-px bg-[#c5a880]/50 mx-auto mt-4" />
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ethnicLooks.map((look) => (
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
                    <span>Enquire Ensemble</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[#6d5f54]">Lucknowi Craft</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Flagship Atelier Strip */}
        <div className="border border-[#2b221a] bg-[#140f0c] p-8 sm:p-12 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-light block">
            Visit The Studio
          </span>
          <h3 className="font-serif text-2xl text-white font-light tracking-[0.2em] uppercase">
            18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow
          </h3>
          <p className="text-xs text-[#9c8e81] max-w-lg mx-auto font-light leading-relaxed">
            Open Monday to Sunday, 10:30 AM – 9:00 PM. Call our studio concierge at <a href={`tel:${phone}`} className="text-[#c5a880] underline">{phone}</a>.
          </p>
        </div>

      </div>
    </div>
  );
}