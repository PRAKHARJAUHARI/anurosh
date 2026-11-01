import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#4a0e17',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.anurosh.com'),
  title: {
    default: 'Anurosh | Premium Bridal & Ethnic Clothing Lucknow | Indira Nagar Designer Studio',
    template: '%s | Anurosh Lucknow',
  },
  description:
    'Discover royal bridal lehengas, authentic Lakhnavi Chikankari couture, handcrafted Zardozi embroidery, and bespoke ethnic wedding wear at Anurosh. Visit our flagship bridal studio at 18/355, Sadbhavna Road, Indira Nagar, Lucknow.',
  keywords: [
    'Anurosh Lucknow',
    'Anurosh bridal store',
    'bridal lehenga lucknow',
    'ethnic clothing lucknow',
    'designer bridal wear indira nagar',
    'best bridal lehenga in lucknow',
    'lakhnavi chikankari bridal couture',
    'handcrafted zardozi lehengas',
    'sadbhavna road maitri park clothing boutique',
    'indira nagar bridal studio lucknow',
    'groom sherwani lucknow',
    'wedding trousseau lucknow',
    'luxury indian ethnic wear',
  ],
  authors: [{ name: 'Anurosh Bridal Couture' }],
  creator: 'Anurosh',
  publisher: 'Anurosh',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://www.anurosh.com',
  },
  openGraph: {
    title: 'Anurosh | Premium Bridal & Ethnic Clothing Studio in Lucknow',
    description:
      'Timeless Indian elegance and bespoke Awadhi craftsmanship. Handcrafted bridal lehengas, pure silk sarees, and regal ethnic wear in Indira Nagar, Lucknow.',
    url: 'https://www.anurosh.com',
    siteName: 'Anurosh',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: 'Anurosh Lucknow Premium Bridal & Ethnic Couture Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anurosh | Premium Bridal & Ethnic Clothing Lucknow',
    description:
      'Flagship bridal studio at Indira Nagar, Lucknow. Luxury bespoke bridal lehengas, chikankari couture, and ethnic wear.',
    images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&h=630&q=85'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  // Enhanced schema structured data for LocalBusiness & ClothingStore
  const storeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    '@id': 'https://www.anurosh.com/#store',
    name: 'Anurosh - Premium Bridal & Ethnic Clothing',
    alternateName: ['Anurosh', 'Anurosh Lucknow', 'Anurosh Bridal Studio'],
    description:
      'Anurosh is a premier bridal and ethnic clothing studio in Lucknow, crafting bespoke wedding lehengas, regal sherwanis, authentic Lakhnavi Chikankari couture, and hand-embroidered Zardozi masterpieces.',
    url: 'https://www.anurosh.com',
    telephone: '+91-98765-43210',
    email: 'contact@anurosh.com',
    priceRange: '₹₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking',
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
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:30',
        closes: '21:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Uttar Pradesh' },
      { '@type': 'Place', name: 'Indira Nagar' },
      { '@type': 'Place', name: 'Gomti Nagar' },
      { '@type': 'Place', name: 'Hazratganj' },
      { '@type': 'Place', name: 'Aliganj' },
      { '@type': 'Country', name: 'India' },
    ],
    hasMap:
      'https://maps.google.com/?q=18/355+Sadbhavna+Road+Near+Maitri+Park+Indira+Nagar+Lucknow+Uttar+Pradesh+226016',
    image: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    ],
    sameAs: [
      'https://www.instagram.com/anuroshclothing',
      'https://www.facebook.com/anuroshclothing',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.anurosh.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Bridal Lehengas Lucknow',
        item: 'https://www.anurosh.com/#collections',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Bespoke Studio Indira Nagar',
        item: 'https://www.anurosh.com/#store-location',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased selection:bg-[#c5a059] selection:text-white">
        {children}
      </body>
    </html>
  );
}
