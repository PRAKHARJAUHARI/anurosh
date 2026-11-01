import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CollectionsShowcase from '@/components/CollectionsShowcase';
import HeritageSection from '@/components/HeritageSection';
import BespokeJourney from '@/components/BespokeJourney';
import StoreLocation from '@/components/StoreLocation';
import AppointmentBooking from '@/components/AppointmentBooking';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingActionBar from '@/components/FloatingActionBar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f5] text-[#2b2523]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CollectionsShowcase />
        <HeritageSection />
        <BespokeJourney />
        <StoreLocation />
        <AppointmentBooking />
        <Testimonials />
        <FaqSection />
      </main>
      <Footer />
      <FloatingActionBar />
    </div>
  );
}
