export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'bridal-lehenga' | 'chikankari' | 'groom-sherwani' | 'festive-sarees' | 'trousseau';
  categoryLabel: string;
  image: string;
  priceNote: string;
  craftsmanship: string[];
  fabric: string;
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  brideName: string;
  groomName?: string;
  location: string;
  weddingVenue: string;
  outfit: string;
  quote: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Bespoke Orders' | 'Store Visit' | 'Craftsmanship' | 'Pricing & Delivery';
}

export const STORE_INFO = {
  brandName: 'Anurosh',
  tagline: 'Premium Bridal & Ethnic Clothing',
  subTagline: 'Awadhi Heritage Handcrafted For The Modern Bride',
  address: {
    line1: '18/355, Sadbhavna Road',
    landmark: 'Near Maitri Park, Indira Nagar',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226016',
    country: 'India',
    fullFormatted: '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016',
  },
  coordinates: {
    lat: 26.8837,
    lng: 80.9984,
  },
  phone: '+91 98765 43210',
  secondaryPhone: '+91 522 410 8899',
  whatsapp: '+919876543210',
  email: 'contact@anurosh.com',
  hours: 'Monday to Sunday: 10:30 AM – 9:00 PM',
  googleMapsUrl: 'https://maps.google.com/?q=18/355+Sadbhavna+Road+Near+Maitri+Park+Indira+Nagar+Lucknow+Uttar+Pradesh+226016',
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'nazakat-bridal-lehenga',
    title: 'The Noor-e-Awadh Crimson Bridal Lehenga',
    subtitle: 'Signature Heritage Velvet & Raw Silk Collection',
    category: 'bridal-lehenga',
    categoryLabel: 'Bridal Lehenga',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    priceNote: 'Made to Order / Bridal Couture',
    craftsmanship: ['Hand Zardozi', 'Real Dabka', 'Gotta Patti Borders', 'Micro-Sequin Sheen'],
    fabric: 'Pure Mulberry Silk & Micro Velvet',
    description: 'An architectural heirloom bridal lehenga crafted over 480 karigar hours featuring 16 kalis with antique gold zardozi motifs inspired by Lucknowi palace arches.',
    featured: true,
  },
  {
    id: 'roohani-chikankari-lehenga',
    title: 'The Roohani Ivory & Rose Gold Chikankari Couture',
    subtitle: 'Hand-done Bakhiya, Murri & Mukaish Work',
    category: 'chikankari',
    categoryLabel: 'Lakhnavi Chikankari',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
    priceNote: 'Exclusive Designer Piece',
    craftsmanship: ['32 Stitches Chikankari', 'Hand Mukaish Badla', 'Pearl & Cutdana Accents'],
    fabric: 'Pure Viscose Georgette with Pure Silk Inner',
    description: 'Pure Lakhnavi heritage crafted by generational artisans. Delicate shadow work combined with shimmering antique mukaish badla for daytime pheras or royal sangeet.',
    featured: true,
  },
  {
    id: 'shahi-groom-sherwani',
    title: 'The Sultanate Embroidered Royal Sherwani',
    subtitle: 'Matching Groom Ensemble with Stole & Safa',
    category: 'groom-sherwani',
    categoryLabel: 'Groom Couture',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=80',
    priceNote: 'Bespoke Tailored Fitting',
    craftsmanship: ['Tonal Resham Needlework', 'Subtle Zari Collars', 'Handcrafted Metal Buttons'],
    fabric: 'Italian Raw Silk with Tussar Dupion Sheen',
    description: 'Tailored for majestic presence. Seamlessly coordinated with your bride’s lehenga tone, designed with comfort-cut armholes and heritage floral crest embroidery.',
    featured: true,
  },
  {
    id: 'avani-banarasi-trousseau',
    title: 'The Rajkumari Handwoven Katan Silk Saree',
    subtitle: 'Kadwa Weave with Real Gold-Plated Zari',
    category: 'festive-sarees',
    categoryLabel: 'Heritage Sarees',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
    priceNote: 'Curated Trousseau Essential',
    craftsmanship: ['Handloom Kadwa Weave', 'Meenakari Borders', 'Antique Zari Pallu'],
    fabric: '100% Pure Certified Katan Silk',
    description: 'A bridal trousseau heirloom passed down generations. Handwoven over 45 days with rich floral jaal and meenakari highlights for the quintessential Indian bride.',
    featured: true,
  },
  {
    id: 'mehendi-mustard-anarkali',
    title: 'The Jharokha Saffron & Amber Floor Anarkali',
    subtitle: 'Intimate Haldi, Mehendi & Sangeet Stunner',
    category: 'trousseau',
    categoryLabel: 'Cocktail & Trousseau',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
    priceNote: 'Bespoke Custom Colors Available',
    craftsmanship: ['Mirror Work Highlights', 'Gotta Lace Hemline', 'Hand-dyed Ombré Dupatta'],
    fabric: 'Chanderi Silk & Organza',
    description: 'Effortless twirl-worthy flair with 6-meter ghera, vibrant festive tones, and lightweight feather-soft organza dupatta adorned with handmade tassels.',
  },
  {
    id: 'gulmohar-pastel-lehenga',
    title: 'The Gulmohar Blush Pink Floral Bridal Ensemble',
    subtitle: 'Modern Pastel Romance for Sunset Weddings',
    category: 'bridal-lehenga',
    categoryLabel: 'Bridal Lehenga',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
    priceNote: 'Double Dupatta Styling Included',
    craftsmanship: ['3D Resham Florals', 'Swarovski Sprinkles', 'Fine Marodi Work'],
    fabric: 'Raw Silk & Fine Tulle',
    description: 'For the contemporary bride desiring romance and imperial grandeur. Soft pastel blush lehenga elevated with dual dupattas and shimmering French knot details.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    brideName: 'Dr. Tanvi Srivastava & Raghav',
    location: 'Indira Nagar, Lucknow',
    weddingVenue: 'The Centrum, Lucknow',
    outfit: 'Custom Velvet Zardozi Bridal Lehenga & Matching Sherwani',
    quote: 'Finding my dream wedding lehenga in Lucknow was overwhelming until I walked into Anurosh near Maitri Park. Their attention to detail, personalized trials, and authentic zardozi embroidery beat the top designer houses in Delhi. My bridal pictures look like royalty!',
    rating: 5,
    date: 'January 2026',
  },
  {
    id: '2',
    brideName: 'Aiman Khan',
    location: 'Gomti Nagar, Lucknow',
    weddingVenue: 'Taj Mahal Lucknow',
    outfit: 'Pure Georgette Chikankari & Mukaish Nikaah Outfit',
    quote: 'Anurosh represents Lucknow’s rich artisanal soul. The intricate Chikankari work on pure georgette was breathtakingly delicate yet so grand for my Nikaah. Every single guest asked where I got it custom crafted.',
    rating: 5,
    date: 'February 2026',
  },
  {
    id: '3',
    brideName: 'Priyanka & Siddharth Verma',
    location: 'Hazratganj, Lucknow',
    weddingVenue: 'Hyatt Regency, Lucknow',
    outfit: 'Crimson Silk Bridal Lehenga + Custom Trousseau Sarees',
    quote: 'The team at Anurosh understood my exact vision. Right from the initial sketch at their Sadbhavna Road boutique to the final trial fitting, the process was seamless. The fit was 100% flattering without needing a single alteration on wedding day!',
    rating: 5,
    date: 'March 2026',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Store Visit',
    question: 'Where is Anurosh located in Lucknow, and what are the studio timings?',
    answer: 'Anurosh is conveniently located at 18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016. We are just 2 minutes from Maitri Park and easily connected via Ring Road and Faizabad Road. We are open all 7 days a week from 10:30 AM to 9:00 PM.',
  },
  {
    id: 'faq-2',
    category: 'Bespoke Orders',
    question: 'Can I customize my bridal lehenga color, embroidery, and blouse cut at Anurosh?',
    answer: 'Absolutely. Anurosh is celebrated for bespoke bridal customization. You can choose your preferred base fabrics (raw silk, velvet, organza, georgette), select custom color palettes (deep crimson, royal maroon, blush pink, ivory gold), modify neckline cuts, sleeve lengths, and even personalize bridal embroidery with your wedding hashtags or wedding dates.',
  },
  {
    id: 'faq-3',
    category: 'Pricing & Delivery',
    question: 'How much time in advance should I order my bridal lehenga or groom sherwani?',
    answer: 'For handcrafted bridal lehengas and heavy zardozi sherwanis, we recommend booking your consultation 4 to 8 weeks in advance to allow time for intricate hand embroidery by our master karigars and multiple personalized trial fittings. If you are on a tight timeline, we also offer express bespoke delivery and ready-to-fit designer collections.',
  },
  {
    id: 'faq-4',
    category: 'Craftsmanship',
    question: 'What makes Anurosh ethnic clothing unique in Lucknow?',
    answer: 'Anurosh honors the heritage Awadhi craftsmanship of Lucknow. Every piece combines authentic hand-embroidery traditions—including fine Lakhnavi Chikankari (Bakhiya, Murri, Phanda), heavy Zardozi, genuine Dabka, Mukaish badla, and Gotta Patti—with contemporary bridal cuts and premium certified pure fabrics.',
  },
  {
    id: 'faq-5',
    category: 'Store Visit',
    question: 'Do I need an appointment before visiting the Indira Nagar store?',
    answer: 'Walk-ins are warmly welcome during store hours (10:30 AM - 9:00 PM). However, for brides seeking a comprehensive private bridal consultation, trousseau styling, and dedicated designer attention in our private bridal trial suites, we recommend booking an appointment online or calling us at +91 98765 43210.',
  },
  {
    id: 'faq-6',
    category: 'Bespoke Orders',
    question: 'Do you offer coordinated bridal and groom matching outfits?',
    answer: 'Yes! We specialize in cohesive couple styling. Our designers harmonize the groom’s sherwani fabric, stole embroidery, or safa shade with the bride’s lehenga motifs and color palette for picture-perfect wedding photography.',
  },
];
