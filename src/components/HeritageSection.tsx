import React from 'react';
import { Sparkles, Scissors, Feather, Layers, Award } from 'lucide-react';

export default function HeritageSection() {
  const crafts = [
    {
      icon: Feather,
      title: 'Lakhnavi Chikankari & Murri',
      description:
        'Centuries-old needle artistry preserving rare stitches—Bakhiya, Phanda, Murri, and Jaali—worked on fine mulmul, chanderi, and pure georgette fabrics.',
    },
    {
      icon: Sparkles,
      title: 'Regal Zardozi & Real Dabka',
      description:
        'Imperial metallic embroidery utilizing coiled gold and silver threads, dabka bullion, salma, and sequins to sculpt breathtaking royal motifs.',
    },
    {
      icon: Layers,
      title: 'Purest Certified Fabrics',
      description:
        'Sourced from traditional weaver clusters: Katan silk, Banarasi brocades, hand-spun raw silk, and whisper-soft organza that drape flawlessly.',
    },
    {
      icon: Scissors,
      title: 'Couture Master Tailoring',
      description:
        'Bridal silhouettes sculpted with internal cancan structuring, supportive boning, and custom neckline cuts designed for maximum grace and all-day comfort.',
    },
  ];

  return (
    <section id="craftsmanship" className="py-20 sm:py-28 bg-[#181315] text-[#f7ede1] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#831e2d]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#c5a059]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Ethos */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/40 bg-[#351016]/60 text-[#f4e8c1] text-xs uppercase tracking-[0.2em]">
              <Award className="w-3.5 h-3.5 text-[#e6c875]" />
              <span>Nawabi Craftsmanship Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Hand-Embroidered by <br />
              <span className="gold-gradient-text font-normal italic">
                Lucknow’s Master Karigars
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#cfc2b6] leading-relaxed">
              At <strong className="text-white">Anurosh</strong>, we believe every wedding ensemble is an heirloom in the making. 
              Our studio in <strong className="text-[#e6c875]">Indira Nagar, Lucknow</strong> works hand-in-hand with generational 
              craftsmen whose families have shaped Awadh’s royal wardrobes for over a century.
            </p>

            <p className="text-sm sm:text-base text-[#cfc2b6] leading-relaxed">
              Unlike mass-manufactured bridal garments, each Anurosh bridal lehenga and groom’s sherwani is slow-crafted. 
              From the initial hand-traced stencil to weeks of painstaking needlework, every stitch honors the golden era of Lakhnavi art.
            </p>

            <div className="pt-4 flex flex-wrap gap-6 border-t border-white/10 text-center sm:text-left">
              <div>
                <p className="font-serif text-3xl font-bold text-[#e6c875]">400+</p>
                <p className="text-xs text-[#a89d93] uppercase tracking-wider mt-1">
                  Karigar Hours Per Bridal Lehenga
                </p>
              </div>
              <div className="hidden sm:block w-px bg-white/10" />
              <div>
                <p className="font-serif text-3xl font-bold text-[#e6c875]">100%</p>
                <p className="text-xs text-[#a89d93] uppercase tracking-wider mt-1">
                  Authentic Pure Mulberry Silks
                </p>
              </div>
              <div className="hidden sm:block w-px bg-white/10" />
              <div>
                <p className="font-serif text-3xl font-bold text-[#e6c875]">500+</p>
                <p className="text-xs text-[#a89d93] uppercase tracking-wider mt-1">
                  Delighted Brides Across Lucknow
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Craft Pillar Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {crafts.map((craft, idx) => {
              const Icon = craft.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#211a1c]/80 border border-[#c5a059]/30 rounded-none shadow-lg hover:border-[#c5a059] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c5a059]/15 flex items-center justify-center text-[#e6c875] border border-[#c5a059]/30 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#e6c875] transition-colors">
                    {craft.title}
                  </h3>
                  <p className="text-xs text-[#b8aba0] leading-relaxed">
                    {craft.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
