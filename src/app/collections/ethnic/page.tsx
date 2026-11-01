import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethnic | Anurosh — Lucknow',
  description: 'Anurosh Heritage Ethnic Collection.',
};

export default function EthnicPage() {
  return (
    <div className="min-h-[75vh] bg-[#fdfbf8] pt-36 sm:pt-40 pb-20 flex items-center justify-center p-6">
      <div className="text-center space-y-2">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#9b7c53] font-light block">
          Heritage Handloom
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-[#241e1b] uppercase">
          Ethnic
        </h1>
      </div>
    </div>
  );
}