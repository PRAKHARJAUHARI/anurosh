import React from 'react';
import { MapPin, Sparkles, Calendar, ChevronRight, Phone, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { STORE_INFO } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#140e10] text-white overflow-hidden">
      {/* Background with luxury gradient and subtle aesthetic Indian pattern */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=85')`,
        }}
      />
      
      {/* Decorative royal overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#140e10] via-[#140e10]/80 to-[#2e0910]/85" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#3a1017]/80 text-[#f4e8c1] text-xs uppercase tracking-[0.2em] mb-6 shadow-lg backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#e6c875]" />
          <span>Lucknow’s Premier Bridal & Ethnic Destination</span>
        </div>

        {/* SEO H1 Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] mb-6">
          Awadhi Grandeur Meets <br className="hidden sm:inline" />
          <span className="gold-gradient-text italic font-normal">Modern Bridal Elegance</span>
        </h1>

        {/* Subtitle / Description heavily optimized for Lucknow & Bridal SEO */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#e8dfd5] font-light leading-relaxed mb-8">
          Welcome to <strong className="font-semibold text-white">Anurosh</strong> — where timeless Lakhnavi 
          Chikankari, royal Zardozi, and bespoke wedding couture come alive. Visit our flagship 
          bridal studio in <strong className="text-[#f4e8c1] font-medium">Indira Nagar, Lucknow</strong> for 
          an unforgettable made-to-measure bridal experience.
        </p>

        {/* Store Address Banner Highlight for Local SEO */}
        <div className="max-w-2xl mx-auto mb-10 p-4 rounded-sm border border-[#c5a059]/35 bg-[#251216]/90 backdrop-blur-md shadow-xl text-left sm:text-center">
          <div className="flex items-start sm:items-center justify-center gap-3">
            <MapPin className="w-5 h-5 text-[#e6c875] shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-[#f7ecd0] tracking-wide">
              <span className="font-semibold text-white">Store Address: </span> 
              18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, UP - 226016
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#book-appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#c5a059] to-[#dfbe73] hover:from-[#dfbe73] hover:to-[#c5a059] text-[#221610] font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-xl hover:shadow-[#c5a059]/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Bridal Consultation</span>
          </a>

          <a
            href="#collections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#c5a059]/80 text-[#f4e8c1] hover:bg-[#c5a059]/15 font-medium text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-300"
          >
            <span>Explore Collections</span>
            <ChevronRight className="w-4 h-4 text-[#c5a059]" />
          </a>

          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white/90 hover:text-[#e6c875] text-xs uppercase tracking-wider transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#c5a059]" />
            <span>Get Store Route</span>
          </a>
        </div>

        {/* Trust & Craftsmanship Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#c5a059]/15 text-[#e6c875] border border-[#c5a059]/30 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Authentic Karigari</p>
              <p className="text-[#bfb5ad] text-xs">Handcrafted in Lucknow</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#c5a059]/15 text-[#e6c875] border border-[#c5a059]/30 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Bespoke Fit</p>
              <p className="text-[#bfb5ad] text-xs">Custom Made-to-Measure</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#c5a059]/15 text-[#e6c875] border border-[#c5a059]/30 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Pure Fabrics</p>
              <p className="text-[#bfb5ad] text-xs">Silk, Velvet & Georgette</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#c5a059]/15 text-[#e6c875] border border-[#c5a059]/30 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Private Suites</p>
              <p className="text-[#bfb5ad] text-xs">1-on-1 Bridal Trials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
