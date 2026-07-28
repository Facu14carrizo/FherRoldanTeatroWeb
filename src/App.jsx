import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BioSection from './components/BioSection';
import LaColmenaSection from './components/LaColmenaSection';
import PortfolioGrid from './components/PortfolioGrid';
import GallerySection from './components/GallerySection';
import AwardsSection from './components/AwardsSection';
import TestimonialsSection from './components/TestimonialsSection';
import WorkshopsSection from './components/WorkshopsSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0908] text-[#f5f5f4] selection:bg-[#f59e0b] selection:text-[#0a0908]">
      <Navbar />
      <main>
        <Hero />
        <BioSection />
        <LaColmenaSection />
        <PortfolioGrid />
        <GallerySection />
        <AwardsSection />
        <TestimonialsSection />
        <WorkshopsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
