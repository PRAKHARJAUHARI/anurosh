'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, Phone, User, Mail, MessageSquare } from 'lucide-react';
import { STORE_INFO } from '@/data/content';

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    category: 'Bridal Lehenga (Custom Zardozi / Velvet)',
    timeSlot: 'Morning (11:00 AM – 1:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate booking confirmation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="book-appointment" className="py-20 sm:py-28 bg-[#f8f4ec] text-[#2c2420] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/20 text-[#8e6b22] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>VIP In-Studio Consultation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3d0f17] mb-3">
            Book Your Private Bridal Trial
          </h2>
          <p className="text-xs sm:text-sm text-[#665b53] leading-relaxed">
            Reserve a 1-on-1 personalized styling session with our senior bridal couturiers at our 
            Sadbhavna Road Indira Nagar studio. Enjoy dedicated trial suites, refreshments, and tailored advice.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white border border-[#dfd1be] shadow-xl p-6 sm:p-10 relative">
          {submitted ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 border border-green-200 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3a0f16]">
                Consultation Request Received!
              </h3>
              <p className="text-sm text-[#5f534a] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-black">{formData.name}</strong>. Our bridal concierge team from 
                the Indira Nagar studio will call you on <strong className="text-black">{formData.phone}</strong> shortly to confirm your private suite timing.
              </p>
              
              <div className="pt-6 border-t border-[#ede1d1] max-w-md mx-auto">
                <p className="text-xs text-[#8c7f74] mb-3">
                  Want an instant confirmation via WhatsApp?
                </p>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Anurosh%20Lucknow,%20I%20just%20submitted%20a%20bridal%20appointment%20request%20for%20${encodeURIComponent(
                    formData.name
                  )}%20(Category:%20${encodeURIComponent(formData.category)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Notify Concierge on WhatsApp</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#8a1f2f] underline hover:text-[#c5a059]"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3e35] mb-2">
                    Bride / Groom Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#a39485] absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#fcfaf7] border border-[#d6c7b2] text-sm text-[#2b221d] focus:border-[#4a0e17] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3e35] mb-2">
                    Mobile Number (WhatsApp Preferred) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#a39485] absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#fcfaf7] border border-[#d6c7b2] text-sm text-[#2b221d] focus:border-[#4a0e17] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3e35] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#a39485] absolute left-3 top-3.5" />
                    <input
                      type="email"
                      placeholder="e.g. radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#fcfaf7] border border-[#d6c7b2] text-sm text-[#2b221d] focus:border-[#4a0e17] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Wedding Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3e35] mb-2">
                    Wedding / Event Date (Approx) *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#a39485] absolute left-3 top-3.5" />
                    <input
                      type="date"
                      required
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#fcfaf7] border border-[#d6c7b2] text-sm text-[#2b221d] focus:border-[#4a0e17] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Collection / Outfit Interest */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3e35] mb-2">
                    Outfit Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#fcfaf7] border border-[#d6c7b2] text-sm text-[#2b221d] focus:border-[#4a0e17] focus:outline-none"
                  >
                    <option>Bridal Lehenga (Custom Zardozi / Velvet)</option>
                    <option>Lakhnavi Chikankari & Mukaish Couture</option>
                    <option>Groom Sherwani & Matching Stole</option>
                    <option>Couple Coordinated Wedding Ensembles</option>
                    <option>Banarasi & Katan Heritage Sarees</option>
                    <option>Sangeet, Cocktail & Mehendi Wear</option>
                  </select>
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3e35] mb-2">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#fcfaf7] border border-[#d6c7b2] text-sm text-[#2b221d] focus:border-[#4a0e17] focus:outline-none"
                  >
                    <option>Morning (11:00 AM – 1:00 PM)</option>
                    <option>Afternoon (1:30 PM – 4:00 PM)</option>
                    <option>Evening Prime (4:30 PM – 7:00 PM)</option>
                    <option>Late Evening (7:00 PM – 8:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3e35] mb-2">
                  Any Specific Preferences / Custom Requirements?
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about color preferences (e.g. traditional crimson, pastel peach, ivory gold), budget range, or specific Lucknow embroidery styles you love..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fcfaf7] border border-[#d6c7b2] text-sm text-[#2b221d] focus:border-[#4a0e17] focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#4a0e17] hover:bg-[#681926] text-[#f4e8c1] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Reserving Suite...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#e6c875]" />
                    <span>Confirm In-Store Bridal Consultation</span>
                  </>
                )}
              </button>

              <div className="text-center">
                <p className="text-[11px] text-[#786b61]">
                  Appointments are confirmed within 2 hours. Walk-ins are also welcome at 
                  18/355, Sadbhavna Road, Indira Nagar, Lucknow.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
