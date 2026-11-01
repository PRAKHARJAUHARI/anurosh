import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bridal | Anurosh — Lucknow',
  description: 'Anurosh Bridal Couture.',
};

export default function BridalPage() {
  return (
    <div className="min-h-[70vh] bg-[#fdfbf8] flex items-center justify-center p-6">
      <div className="text-center space-y-2">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#9b7c53] font-light block">
          Couture Archive
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-[#241e1b] uppercase">
          Bridal
        </h1>
      </div>
    </div>
  );
}