import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collaboration | Anurosh — Lucknow',
  description: 'Anurosh Collaborations.',
};

export default function CollaborationPage() {
  return (
    <div className="min-h-[70vh] bg-[#fdfbf8] flex items-center justify-center p-6">
      <div className="text-center space-y-2">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#9b7c53] font-light block">
          Partnerships
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-[#241e1b] uppercase">
          Collaboration
        </h1>
      </div>
    </div>
  );
}