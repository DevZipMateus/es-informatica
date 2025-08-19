
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EgestorERP from '@/components/EgestorERP';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PlansSection from '@/components/PlansSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
      {/* SEO Meta Tags - handled in index.html */}
      <Header />
      <main className="overflow-x-hidden">
        <div className="hero-gradient">
          <HeroSection />
        </div>
        <div className="bg-white overflow-x-hidden">
          <EgestorERP />
          <AboutSection />
          <ServicesSection />
          <PlansSection />
          <LocationSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
