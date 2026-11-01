import type { Metadata, Viewport } from 'next';
import HeaderNav from '@/components/HeaderNav';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#fdfbf8',
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

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#fdfbf7] text-[#221c18] selection:bg-[#380e15] selection:text-white">
        {/* Navigation Header with Interactive Logo Trigger */}
        <HeaderNav />

        {/* Page Content (Blank pages) */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        {/* Minimalist Luxury Footer */}
        <footer className="border-t border-[#eee6db] bg-[#fcfaf6] py-8 text-xs font-light text-[#7a6d64]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="tracking-wide">
              <strong className="font-normal text-[#2b221e]">Anurosh:</strong> 18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016
            </p>
            <p className="tracking-wider text-[11px] text-[#9a8d84]">© {new Date().getFullYear()} Anurosh. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
