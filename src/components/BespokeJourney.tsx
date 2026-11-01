import React from 'react';
import { Sparkles, Compass, Palette, Scissors, Gift } from 'lucide-react';

export default function BespokeJourney() {
  const steps = [
    {
      num: '01',
      icon: Compass,
      title: 'Private Studio Consultation',
      description:
        'Meet your dedicated bridal couturier at our Indira Nagar studio. We discuss your wedding themes, venue ambiance, silhouette preferences, and personal style.',
    },
    {
      num: '02',
      icon: Palette,
      title: 'Fabric Swatches & Sketching',
      description:
        'Touch and feel pure silk swatches, custom-dyed velvets, and organza layers. We sketch your custom kalis, blouse neckline, and dupatta draping proportions.',
    },
    {
      num: '03',
      icon: Scissors,
      title: 'Generational Hand Karigari',
      description:
        'Our Lucknow karigars hand-trace your bespoke motifs and spend weeks embroidering each sequin, dabka bead, and zardozi line with microscopic precision.',
    },
    {
      num: '04',
      icon: Gift,
      title: 'Flawless Trial & Heirloom Packaging',
      description:
        'Experience multiple personalized fitting sessions in our private trial suites, followed by preservation packaging designed to protect your bridal outfit for life.',
    },
  ];

  return (
    <section id="bespoke" className="py-20 sm:py-28 bg-[#f5efe4] text-[#2c2420] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 text-[#8f6b21] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Made-to-Measure Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#380e15] mb-4">
            Your 4-Step Bridal Journey at Anurosh
          </h2>
          <p className="text-sm sm:text-base text-[#695d54] leading-relaxed">
            From the initial dream to walking down the wedding aisle in Lucknow, we ensure your bridal 
            outfit fits your contour like second skin and radiates unmatched Awadhi opulence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 border border-[#e5d8c5] relative flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Step Number Watermark */}
                <span className="font-serif text-4xl font-bold text-[#c5a059]/25 absolute top-4 right-5 group-hover:text-[#c5a059]/40 transition-colors">
                  {step.num}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-full bg-[#f8f2e7] flex items-center justify-center text-[#8e2030] border border-[#d8c7ad] mb-6 group-hover:bg-[#4a0e17] group-hover:text-[#f4e8c1] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#3d1219] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665a50] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0e4d3] flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#9d7426]">
                  <span>Step {step.num} of 04</span>
                  <span className="w-8 h-px bg-[#c5a059]/60" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Section */}
        <div className="mt-14 p-6 sm:p-8 bg-[#3a0d15] text-[#f7ede1] border border-[#c5a059]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
              Planning your wedding in Lucknow or destination celebrations?
            </h4>
            <p className="text-xs sm:text-sm text-[#daccc0]">
              Book an exclusive 1-on-1 designer slot with our bridal couturiers at Indira Nagar today.
            </p>
          </div>
          <a
            href="#book-appointment"
            className="shrink-0 px-6 py-3 bg-[#c5a059] hover:bg-[#dfbe73] text-[#241710] font-semibold text-xs uppercase tracking-[0.16em] transition-colors"
          >
            Reserve Your Trial Slot
          </a>
        </div>
      </div>
    </section>
  );
}
