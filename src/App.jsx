import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FamilyOwnedSection from './components/FamilyOwnedSection';
import StorySection from './components/StorySection';
import ValuePillars from './components/ValuePillars';
import ProductCards from './components/ProductCards';
import EventsBanner from './components/EventsBanner';
import StoreAndMarkets from './components/StoreAndMarkets';
import TestimonialsSection from './components/TestimonialsSection';
import FarmingPractices from './components/FarmingPractices';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="app-root">
      {/* 1. Utility Top Bar with Contact & WhatsApp Shop Online */}
      <TopBar />

      {/* 2. Main Navigation Bar with Dropdowns */}
      <Navbar />

      {/* 3. Hero Section with Rotating Purity Seal & Milk Wave Flow */}
      <main>
        <Hero />

        {/* 4. Hijaz Dairy Shop - Saddar, Karachi Info with Corner Prints */}
        <FamilyOwnedSection />

        {/* 5. Traditional Taste & Story Heritage with Heritage Badge */}
        <StorySection />

        {/* 6. Non-GMO, Grass-Fed, Pure Badges with Corner Prints */}
        <ValuePillars />

        {/* 7. Product Carousel with WhatsApp Direct Orders & Ribbon */}
        <ProductCards />

        {/* 8. Events & Bulk Orders Banner */}
        <EventsBanner />

        {/* 9. Visit Hijaz Dairy Shop in Saddar, Karachi */}
        <StoreAndMarkets />

        {/* 10. Customer Reviews & 4.5 Star Rating Showcase */}
        <TestimonialsSection />

        {/* 11. Hygienic & Pure Practices with Corner Prints */}
        <FarmingPractices />
      </main>

      {/* 12. Footer with WhatsApp Query Box, Contact & Rating */}
      <Footer />

      {/* 13. Floating Quick WhatsApp Order Button */}
      <FloatingWhatsApp />
    </div>
  );
}
