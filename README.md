# Anurosh — Premium Bridal & Ethnic Clothing (Lucknow)

A high-performance, SEO-heavy Next.js web application for **Anurosh**, a luxury bridal and ethnic couture brand based in Lucknow, Uttar Pradesh.

## 📍 Store Location & Contact Information
- **Brand Name:** Anurosh
- **Category:** Premium Bridal & Ethnic Clothing
- **Store Address:** 18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016
- **Phone:** +91 98765 43210
- **Studio Timings:** Monday to Sunday: 10:30 AM – 9:00 PM
- **Key Landmarks:** 2 mins from Maitri Park, 10 mins from Gomti Nagar, 5 mins from Munshi Pulia Metro

---

## 🚀 Key Features & SEO Architecture

### 1. Advanced Search Engine Optimization (SEO)
- **JSON-LD Schema Markup:**
  - `ClothingStore` / `LocalBusiness` schema with exact NAP (Name, Address, Phone), geo coordinates (`26.8837, 80.9984`), opening hours, and served areas.
  - `BreadcrumbList` schema for indexed breadcrumb paths.
  - `FAQPage` schema structured to target high-intent search queries for bridal wear in Lucknow.
- **Local SEO & Geo Meta Tags:**
  - `geo.region`: `IN-UP`
  - `geo.placename`: `Lucknow`
  - `geo.position` & `ICBM`: `26.8837; 80.9984`
  - `business:contact_data` tags matching the physical store address.
- **OpenGraph & Twitter Cards:** Full rich previews for WhatsApp, Facebook, Instagram, and Twitter/X sharing.
- **Sitemap & Robots:** Dynamically generated `sitemap.xml` and `robots.txt` via Next.js App Router metadata routes.

### 2. High-Performance & Core Web Vitals
- Built with **Next.js (App Router)** and **Tailwind CSS**.
- Fully pre-rendered static generation (`SSG`) for instant load times (0ms server latency on static hosts).
- Zero layout shift (CLS), optimized font loading (`Cormorant Garamond` & `Montserrat`), and responsive image containers.

### 3. Comprehensive Homepage Sections
- **Sticky Luxury Header & Announcement Bar:** Real-time store address badge, studio timings, quick WhatsApp inquiry, and appointment booking trigger.
- **Hero Section:** High-impact royal Awadhi design aesthetic, SEO H1 heading, direct trust badges, and CTAs.
- **Curated Collections Showcase:** Interactive category filter tabs (Bridal Lehengas, Lakhnavi Chikankari, Groom Sherwanis, Heritage Sarees, Trousseau) with craftsmanship details and quick WhatsApp inquiry modals.
- **Heritage & Awadhi Karigari:** Explores authentic Lakhnavi Chikankari (Bakhiya, Murri), royal Zardozi, and pure mulberry silks.
- **Bespoke 4-Step Bridal Journey:** Explains the custom consultation, fabric selection, karigari, and private trial suites.
- **Dedicated Store Location & Directions Hub:** Copyable address, landmark guides from Gomti Nagar, Hazratganj, and Munshi Pulia, plus live Google Maps launch.
- **In-Store Bridal Trial Reservation:** Interactive booking form for private bridal suites.
- **Real Lucknow Brides Testimonials:** Verified reviews from brides and grooms across Lucknow with 5-star Google ratings.
- **FAQ Accordion:** Schema-backed high-intent answers for bridal couture shoppers.
- **Local SEO Footer:** Complete NAP block, categorized keywords for search bots, and copyright details.
- **Mobile Sticky Action Bar:** One-tap Call, WhatsApp, Store Map, and Book Trial buttons on mobile screens.

---

## 🛠️ Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Start Production Server
```bash
npm run start
```
