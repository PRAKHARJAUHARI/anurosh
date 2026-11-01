import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#380e15',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://anurosh.com'),
  title: {
    default: 'Anurosh | Premium Bridal & Ethnic Clothing Lucknow | Indira Nagar',
    template: '%s | Anurosh',
  },
  description:
    'Anurosh — Premium Bridal & Ethnic Clothing. Flagship studio located at 18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016.',
  keywords: [
    'Anurosh',
    'Anurosh Lucknow',
    'bridal clothing lucknow',
    'ethnic clothing lucknow',
    'indira nagar bridal studio',
    'premium bridal wear lucknow',
    'sadbhavna road maitri park boutique',
  ],
  alternates: {
    canonical: 'https://anurosh.com',
  },
  openGraph: {
    title: 'Anurosh | Premium Bridal & Ethnic Clothing',
    description:
      'Flagship bridal and ethnic couture studio in Indira Nagar, Lucknow.',
    url: 'https://anurosh.com',
    siteName: 'Anurosh',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Lucknow',
    'geo.position': '26.8837;80.9984',
    'ICBM': '26.8837, 80.9984',
    'business:contact_data:street_address': '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar',
    'business:contact_data:locality': 'Lucknow',
    'business:contact_data:region': 'Uttar Pradesh',
    'business:contact_data:postal_code': '226016',
    'business:contact_data:country_name': 'India',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: 'Anurosh - Premium Bridal & Ethnic Clothing',
    url: 'https://anurosh.com',
    telephone: '+91-98765-43210',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226016',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8837,
      longitude: 80.9984,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:30',
        closes: '21:00',
      },
    ],
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Bridal', href: '/collections/bridal' },
    { name: 'Ethnic', href: '/collections/ethnic' },
    { name: 'Collaboration', href: '/collaboration' },
    { name: 'About', href: '/about' },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#fdfbf7] text-[#221c18] selection:bg-[#380e15] selection:text-white">
        {/* Navigation Header */}
        <header className="border-b border-[#e5d8c6] bg-white sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-center sm:text-left">
              <span className="font-serif text-2xl font-bold tracking-[0.25em] text-[#380e15] uppercase block">
                Anurosh
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#8e6d2b] uppercase font-medium">
                Premium Bridal & Ethnic • Lucknow
              </span>
            </Link>

            {/* Exact Navigation Links requested */}
            <nav className="flex items-center space-x-6 text-xs uppercase tracking-widest font-semibold text-[#5a4d43]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#380e15] transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Page Content (Blank pages) */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        {/* Minimal Footer with Store Info for SEO */}
        <footer className="border-t border-[#e8ded2] bg-[#faf6ee] py-6 text-xs text-[#73655a]">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <p>
              <strong>Anurosh:</strong> 18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016
            </p>
            <p>© {new Date().getFullYear()} Anurosh. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
