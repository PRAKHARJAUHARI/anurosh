'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { STORE_INFO } from '@/data/content';

export default function FloatingActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#161214]/95 backdrop-blur-md border-t border-[#c5a059]/40 py-2 px-3 sm:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-[#eadecf]">
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/5 text-[#f4e8c1]"
        >
          <Phone className="w-4 h-4 mb-1 text-[#e6c875]" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Anurosh%20Lucknow,%20I%20would%20like%20to%20inquire%20about%20bridal%20wear.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/5 text-[#f4e8c1]"
        >
          <MessageCircle className="w-4 h-4 mb-1 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/5 text-[#f4e8c1]"
        >
          <MapPin className="w-4 h-4 mb-1 text-[#e6c875]" />
          <span>Store Map</span>
        </a>

        <a
          href="#book-appointment"
          className="flex flex-col items-center justify-center p-1.5 rounded bg-[#c5a059] text-[#221610] font-bold"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span>Book Trial</span>
        </a>
      </div>
    </div>
  );
}
