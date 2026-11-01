import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Flagship Atelier | Anurosh — Lucknow',
  description:
    'Visit Anurosh Flagship Atelier at 18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016. Telephone: +91 98765 43210.',
};

export default function ContactPage() {
  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';
  const mapsExternalUrl = 'https://maps.google.com/?q=26.851224,81.0147014';

  return (
    <div className="min-h-screen bg-[#fdfbf8] text-[#241e1b] pt-36 sm:pt-40 md:pt-44 pb-20 px-6 selection:bg-[#9b7c53] selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#9b7c53] font-light block">
            Indira Nagar • Lucknow
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-[0.2em] text-[#241e1b] uppercase">
            Contact Us
          </h1>
          <p className="text-xs sm:text-sm text-[#73655d] font-light tracking-wide leading-relaxed">
            We welcome you to our flagship boutique for private bridal fittings, custom trousseau consultations, and Awadhi karigari commissions.
          </p>
          <div className="w-12 h-px bg-[#9b7c53]/40 mx-auto mt-4" />
        </div>

        {/* Studio Info Details Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-[#eee6db] bg-[#faf6f0] p-8 md:p-10">
          
          {/* Address */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#9b7c53]">
              <MapPin className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-light">Studio Location</span>
            </div>
            <address className="not-italic text-xs sm:text-sm text-[#4a3f38] font-light leading-relaxed">
              <strong className="font-normal text-[#241e1b] block mb-1">Anurosh</strong>
              18/355, Sadbhavna Road,<br />
              Near Maitri Park, Indira Nagar,<br />
              Lucknow, Uttar Pradesh - 226016
            </address>
          </div>

          {/* Timings */}
          <div className="space-y-3 md:border-l md:border-[#e8e0d5] md:pl-8">
            <div className="flex items-center gap-2 text-[#9b7c53]">
              <Clock className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-light">Atelier Timings</span>
            </div>
            <p className="text-xs sm:text-sm text-[#4a3f38] font-light leading-relaxed">
              Monday to Sunday<br />
              10:30 AM – 9:00 PM<br />
              <span className="text-[11px] text-[#8a7b70]">Private salon fittings by appointment.</span>
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3 md:border-l md:border-[#e8e0d5] md:pl-8">
            <div className="flex items-center gap-2 text-[#9b7c53]">
              <Phone className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-light">Concierge</span>
            </div>
            <div className="text-xs sm:text-sm text-[#4a3f38] font-light leading-relaxed space-y-1">
              <p>
                Phone: <a href={`tel:${phone}`} className="underline text-[#241e1b]">{phone}</a>
              </p>
              <p>
                Email: <a href="mailto:atelier@anurosh.com" className="underline text-[#241e1b]">atelier@anurosh.com</a>
              </p>
              <div className="pt-2">
                <a
                  href={mapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#9b7c53] hover:underline"
                >
                  Open in Google Maps App →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Embedded Google Maps (Official Store Coordinates provided by User) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs tracking-wider font-light text-[#73655d]">
            <span className="uppercase text-[10px] tracking-[0.25em] text-[#9b7c53]">Interactive Navigation</span>
            <span>Near Maitri Park, Indira Nagar</span>
          </div>
          
          <div className="w-full overflow-hidden border border-[#eee6db] bg-[#faf6f0] shadow-sm rounded-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6455445247575!2d81.01470139999999!3d26.851224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3c916190ecb%3A0xd22dec27070a0741!2sAnurosh!5e0!3m2!1sen!2sin!4v1793540213371!5m2!1sen!2sin"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Anurosh Flagship Boutique Location Map"
              className="w-full h-[400px] sm:h-[480px] filter contrast-[1.02]"
            />
          </div>
        </div>

      </div>
    </div>
  );
}