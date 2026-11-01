import React from 'react';
import { Star, Quote, Heart, Sparkles, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#fbf8f2] text-[#2c2420] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 text-[#8f6b21] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-[#a82234]" />
            <span>The Anurosh Brides</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#380e15] mb-4">
            Loved by Royalty Across Lucknow
          </h2>
          <p className="text-sm sm:text-base text-[#695d54] leading-relaxed">
            Read authentic stories from real brides and grooms who chose Anurosh Indira Nagar 
            for the most cherished celebration of their lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 border border-[#e5d9c8] relative flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#d4af37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#50443a] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0e4d2]">
                <h3 className="font-serif text-base font-bold text-[#380e15]">
                  {t.brideName}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#8f6b21] mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{t.location}</span>
                </div>
                <p className="text-[11px] text-[#7d7065] mt-1 font-medium">
                  {t.outfit}
                </p>
                <div className="flex items-center justify-between text-[10px] text-[#a1958b] mt-2">
                  <span>Venue: {t.weddingVenue}</span>
                  <span>{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Lucknow Bridal Trust Badge Strip */}
        <div className="mt-14 py-6 px-8 bg-white border border-[#e5d9c8] flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="font-serif text-2xl font-bold text-[#4a0e17]">4.9 / 5.0</span>
            <span className="block text-[11px] uppercase tracking-wider text-[#73665c]">Google Reviews Rating</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#e5d9c8]" />
          <div>
            <span className="font-serif text-2xl font-bold text-[#4a0e17]">500+</span>
            <span className="block text-[11px] uppercase tracking-wider text-[#73665c]">Lucknow Weddings Styled</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#e5d9c8]" />
          <div>
            <span className="font-serif text-2xl font-bold text-[#4a0e17]">100%</span>
            <span className="block text-[11px] uppercase tracking-wider text-[#73665c]">Fitting Satisfaction</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#e5d9c8]" />
          <div>
            <span className="font-serif text-2xl font-bold text-[#4a0e17]">Indira Nagar</span>
            <span className="block text-[11px] uppercase tracking-wider text-[#73665c]">Flagship Studio Lucknow</span>
          </div>
        </div>
      </div>
    </section>
  );
}
