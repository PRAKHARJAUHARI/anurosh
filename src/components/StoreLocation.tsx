'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Car, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { STORE_INFO } from '@/data/content';

export default function StoreLocation() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="store-location" className="py-20 sm:py-28 bg-[#181315] text-[#f8ede2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/20 text-[#e6c875] border border-[#c5a059]/30 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Flagship Lucknow Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Experience Anurosh in Indira Nagar
          </h2>
          <p className="text-sm sm:text-base text-[#cec2b7] leading-relaxed">
            Step into our sanctuary of bridal elegance. Conveniently situated on Sadbhavna Road near Maitri Park, 
            our studio offers private trial suites, full fabric archives, and dedicated bridal couturiers.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Store Info Card */}
          <div className="lg:col-span-5 bg-[#231b1e] border border-[#c5a059]/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[11px] font-semibold tracking-widest text-[#e6c875] uppercase block">
                    Flagship Boutique
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Anurosh Couture
                  </h3>
                </div>
                <div className="p-3 rounded-full bg-[#380e15] text-[#e6c875] border border-[#c5a059]/40">
                  <Compass className="w-6 h-6" />
                </div>
              </div>

              {/* Exact Address with Copy Tool */}
              <div className="mb-6 space-y-2">
                <p className="text-xs text-[#a3978d] uppercase tracking-wider font-semibold">
                  Official Store Address
                </p>
                <div className="bg-[#181315] p-4 border border-[#c5a059]/30 rounded-none relative">
                  <address className="not-italic text-sm sm:text-base font-medium text-[#fcf6ee] leading-relaxed">
                    <span className="block font-bold text-white">18/355, Sadbhavna Road</span>
                    <span className="block text-[#e6c875]">Near Maitri Park, Indira Nagar</span>
                    <span className="block text-white/90">Lucknow, Uttar Pradesh - 226016</span>
                    <span className="block text-xs text-[#a3978d] mt-1">India</span>
                  </address>
                  <button
                    onClick={handleCopyAddress}
                    type="button"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#e6c875] hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400 font-semibold">Address Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Operating Hours & Contact */}
              <div className="space-y-4 mb-8 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#e6c875] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Studio Timings:</strong>
                    <span className="text-[#c7bcb2]">{STORE_INFO.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#e6c875] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Direct Inquiries:</strong>
                    <a href={`tel:${STORE_INFO.phone}`} className="text-[#e6c875] hover:underline block">
                      {STORE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#e6c875] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Parking & Amenities:</strong>
                    <span className="text-[#c7bcb2]">Dedicated Guest Parking & Valet Assistance Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-[#c5a059] hover:bg-[#dfbe73] text-[#241710] font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Anurosh%20Lucknow,%20I%20am%20coming%20to%20your%20Indira%20Nagar%20store%20today.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#c5a059]/60 hover:bg-[#c5a059]/15 text-[#e6c875] text-xs uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Route Guide & Landmarks Card */}
          <div className="lg:col-span-7 bg-[#211a1c] border border-[#c5a059]/30 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  How to Reach Our Indira Nagar Studio
                </h4>
                <span className="text-xs uppercase tracking-wider text-[#e6c875] bg-[#380e15] px-2.5 py-1 border border-[#c5a059]/30 font-medium">
                  Central Lucknow
                </span>
              </div>

              {/* Landmark Routes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-[#191315] border border-white/5 rounded-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e6c875] block mb-1">
                    From Gomti Nagar
                  </span>
                  <p className="text-xs text-[#cfc2b6] leading-relaxed">
                    Just <strong className="text-white">10 mins drive</strong> via Mithaiwala Chauraha or Lohia Path into Indira Nagar.
                  </p>
                </div>

                <div className="p-4 bg-[#191315] border border-white/5 rounded-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e6c875] block mb-1">
                    From Hazratganj
                  </span>
                  <p className="text-xs text-[#cfc2b6] leading-relaxed">
                    Approx <strong className="text-white">15 mins</strong> via Faizabad Road or Nishatganj Bridge straight toward Sadbhavna Road.
                  </p>
                </div>

                <div className="p-4 bg-[#191315] border border-white/5 rounded-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e6c875] block mb-1">
                    Metro Connectivity
                  </span>
                  <p className="text-xs text-[#cfc2b6] leading-relaxed">
                    Only <strong className="text-white">5 mins</strong> from Munshi Pulia or Bhootnath Market Metro Stations.
                  </p>
                </div>
              </div>

              {/* Stylized Visual Map Card */}
              <div className="relative rounded-none border border-[#c5a059]/30 bg-[#161214] p-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                <div className="relative z-10 py-6 max-w-md mx-auto">
                  <MapPin className="w-10 h-10 text-[#e6c875] mx-auto mb-3 animate-bounce" />
                  <h5 className="font-serif text-lg font-bold text-white mb-1">
                    Sadbhavna Road • Near Maitri Park
                  </h5>
                  <p className="text-xs text-[#b8aca1] mb-5">
                    18/355, Sector 18, Indira Nagar, Lucknow, UP 226016
                  </p>
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4a0e17] hover:bg-[#681926] text-[#f4e8c1] border border-[#c5a059]/50 font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg"
                  >
                    <span>Launch Live GPS Navigation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Note on Private Appointments */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#a89d92]">
              <span>Private bridal suites are pre-sanitized for every bridal appointment.</span>
              <span className="text-[#e6c875] font-medium hidden sm:inline">Valet Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
