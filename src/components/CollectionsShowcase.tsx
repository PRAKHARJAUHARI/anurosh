'use client';

import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowUpRight, Scissors, Check, Eye } from 'lucide-react';
import { COLLECTIONS, CollectionItem, STORE_INFO } from '@/data/content';

export default function CollectionsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'bridal-lehenga', label: 'Bridal Lehengas' },
    { id: 'chikankari', label: 'Lakhnavi Chikankari' },
    { id: 'groom-sherwani', label: 'Groom Sherwanis' },
    { id: 'festive-sarees', label: 'Heritage Sarees' },
    { id: 'trousseau', label: 'Cocktail & Trousseau' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? COLLECTIONS
      : COLLECTIONS.filter((item) => item.category === activeCategory);

  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#fbf8f2] text-[#2c2420] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 text-[#916b1e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Couture Vault</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#3b1219] mb-4">
            Curated Bridal & Ethnic Collections
          </h2>
          <p className="text-sm sm:text-base text-[#6d6159] leading-relaxed">
            Every ensemble at Anurosh Indira Nagar is individually conceptualized and handcrafted by Lucknow’s 
            master karigars. From 16-kali zardozi lehengas to ethereal georgette chikankari and regal groom sherwanis.
          </p>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 rounded-none border ${
                  activeCategory === cat.id
                    ? 'bg-[#4a0e17] text-[#f4e8c1] border-[#4a0e17] shadow-md'
                    : 'bg-white text-[#5c4f46] border-[#decbb0]/80 hover:border-[#c5a059] hover:bg-[#f7f2e9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-none border border-[#e8ded1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Product Visual */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#efe8dc]">
                <img
                  src={item.image}
                  alt={`${item.title} - Anurosh Lucknow Bridal Wear`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#1d1715]/85 backdrop-blur-sm text-[#f4e8c1] text-[10px] tracking-wider uppercase px-2.5 py-1 border border-[#c5a059]/40 font-semibold">
                  {item.categoryLabel}
                </div>

                {/* Quick Overlay Action */}
                <div className="absolute inset-0 bg-[#380810]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="px-4 py-2.5 bg-white/95 text-[#2b170e] font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 hover:bg-[#c5a059] hover:text-white transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Craftsmanship</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#9d7426] font-semibold mb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-[#341117] leading-snug mb-2 group-hover:text-[#831e2d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6e635a] line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Craftsmanship Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.craftsmanship.map((craft, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-[10px] uppercase tracking-wide bg-[#f6efe4] text-[#634e3f] px-2 py-0.5 border border-[#e3d7c3]"
                      >
                        {craft}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-4 border-t border-[#f0e7db] flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#8e8278]">
                      Customization
                    </span>
                    <span className="text-xs font-semibold text-[#481119]">
                      {item.priceNote}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Anurosh%20Lucknow,%20I%20am%20interested%20in%20"${encodeURIComponent(
                      item.title
                    )}"&body=Please%20share%20fabric%20details%20and%20studio%20consultation%20timings.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#831e2d] hover:text-[#c5a059] transition-colors p-1"
                    aria-label={`Inquire about ${item.title}`}
                  >
                    <span>Inquire</span>
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Detailed Craftsmanship Preview */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#fcf9f5] border border-[#c5a059]/40 max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black p-1 text-sm font-bold uppercase tracking-wider"
              >
                Close ✕
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="aspect-[3/4] overflow-hidden bg-[#e0d5c3]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest text-[#9d7426] uppercase">
                    {selectedItem.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#3d0f17] mt-1 mb-2">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs text-[#5e544c] mb-4 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-[#382b23]">
                    <div className="flex items-start gap-2">
                      <strong className="min-w-24 font-semibold text-[#831e2d]">Fabric:</strong>
                      <span>{selectedItem.fabric}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="min-w-24 font-semibold text-[#831e2d]">Techniques:</strong>
                      <span>{selectedItem.craftsmanship.join(', ')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="min-w-24 font-semibold text-[#831e2d]">Fittings:</strong>
                      <span>Made-to-measure at Indira Nagar Studio</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href="#book-appointment"
                      onClick={() => setSelectedItem(null)}
                      className="text-center py-2.5 bg-[#4a0e17] text-[#f4e8c1] font-semibold text-xs uppercase tracking-wider hover:bg-[#681926] transition-colors"
                    >
                      Book Trial Fitting For This Outfit
                    </a>
                    <a
                      href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Anurosh%20Lucknow,%20I%20am%20inquiring%20about%20"${encodeURIComponent(selectedItem.title)}"`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center py-2.5 border border-[#c5a059] text-[#71501b] font-medium text-xs uppercase tracking-wider hover:bg-[#c5a059]/10 transition-colors"
                    >
                      Chat with Studio Stylist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
