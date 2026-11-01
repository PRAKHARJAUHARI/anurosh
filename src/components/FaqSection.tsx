'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS, STORE_INFO } from '@/data/content';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // FAQPage Schema for direct SEO injection
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#f5efe5] text-[#2c2420] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/20 text-[#8e6b22] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Bridal Shopping Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#380e15] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#665b53] leading-relaxed">
            Everything you need to know about custom bridal lehengas, authentic Chikankari couture, 
            and visiting our boutique at Indira Nagar, Lucknow.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#dfd2c0] shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#380e15]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-[#c5a059]/40 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#4a0e17] text-white' : 'bg-[#faf6ee] text-[#8e2030]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5d5147] leading-relaxed border-t border-[#f2e7d7]">
                    <p>{faq.answer}</p>
                    {faq.category === 'Store Visit' && (
                      <div className="mt-3 pt-3 border-t border-[#f2e7d7]/60 flex items-center gap-3 text-xs text-[#8f6b21]">
                        <strong>Quick Navigation:</strong>
                        <a
                          href={STORE_INFO.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-[#4a0e17]"
                        >
                          View Indira Nagar Studio on Google Maps
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 bg-white border border-[#dfd2c0]">
          <p className="font-serif text-lg font-bold text-[#380e15] mb-2">
            Have a custom design inquiry or special wedding date timeline?
          </p>
          <p className="text-xs text-[#6e6258] mb-4">
            Speak directly with our senior designer in Indira Nagar, Lucknow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-5 py-2.5 bg-[#4a0e17] text-[#f4e8c1] text-xs font-semibold uppercase tracking-wider hover:bg-[#681926] transition-colors"
            >
              Call {STORE_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Anurosh%20Lucknow,%20I%20have%20a%20question%20regarding%20bridal%20customization.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#c5a059] text-[#71501b] text-xs font-semibold uppercase tracking-wider hover:bg-[#c5a059]/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
