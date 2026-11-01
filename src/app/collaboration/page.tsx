import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bespoke Collaborations & NRI Styling | Anurosh — Lucknow',
  description:
    'Collaborate with the House of Anurosh. Bespoke bridal design, international NRI trousseau styling, and couture partnerships. Flagship Atelier: 18/355, Sadbhavna Road, Indira Nagar, Lucknow.',
};

export default function CollaborationPage() {
  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';

  const collaborationTypes = [
    {
      num: '01',
      title: 'NRI Virtual Bridal Styling',
      desc: 'High-touch virtual trousseau consultations for international brides and grooms across the USA, UK, Canada, and UAE with worldwide door-to-door insured shipping.',
    },
    {
      num: '02',
      title: 'Bespoke Couture Commissions',
      desc: 'One-of-a-kind wedding attire personally conceptualized with our master karigars in Lucknow using pure raw silks, bullion zardozi, and archival Chikankari.',
    },
    {
      num: '03',
      title: 'Celebrity & Editorial Styling',
      desc: 'Exclusive red-carpet and high-fashion editorial loaning services for cinema, luxury fashion publications, and celebrity wedding moments.',
    },
    {
      num: '04',
      title: 'Craft & Textile Partnerships',
      desc: 'Collaborative projects with luxury interior designers, architectural spaces, and heritage craft preservation foundations.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0908] text-[#fbf7f0] py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] font-light block">
            Partnerships & Commissions
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] text-[#fcfaf7] uppercase">
            Collaborations
          </h1>
          <p className="text-xs sm:text-sm text-[#a8998a] font-light tracking-[0.15em] leading-relaxed">
            The House of Anurosh welcomes bespoke bridal commissions, international NRI consultations, and high-fashion creative partnerships worldwide.
          </p>
          <div className="w-16 h-px bg-[#c5a880]/50 mx-auto mt-4" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collaborationTypes.map((item) => (
            <div
              key={item.num}
              className="border border-[#231b15] bg-[#140f0c] p-8 sm:p-10 space-y-4 hover:border-[#c5a880] transition-colors"
            >
              <span className="text-xs font-mono text-[#c5a880] tracking-widest block">
                {item.num}
              </span>
              <h2 className="font-serif text-2xl font-light tracking-[0.18em] text-[#fcfaf7] uppercase">
                {item.title}
              </h2>
              <p className="text-xs text-[#9c8e81] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Inquiry Card */}
        <div className="border border-[#2b221a] bg-[#140f0c] p-10 sm:p-16 text-center space-y-6 max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-light block">
            Initiate a Dialogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase">
            Collaborate with Anurosh
          </h2>
          <p className="text-xs sm:text-sm text-[#a8998a] max-w-xl mx-auto font-light leading-relaxed">
            Direct your styling requests, editorial commissions, or international NRI trousseau queries to our private atelier desk in Lucknow.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-light tracking-[0.2em] uppercase">
            <a
              href="mailto:collaborations@anurosh.com"
              className="px-8 py-3.5 bg-[#c5a880] text-[#0c0908] hover:bg-white transition-colors"
            >
              collaborations@anurosh.com
            </a>
            <a
              href={`tel:${phone}`}
              className="px-8 py-3.5 border border-white/40 text-white hover:bg-white hover:text-[#0c0908] transition-colors"
            >
              Call Studio: {phone}
            </a>
          </div>
          <p className="text-[11px] text-[#736357] font-light pt-2">
            Flagship Atelier: 18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, UP - 226016
          </p>
        </div>

      </div>
    </div>
  );
}