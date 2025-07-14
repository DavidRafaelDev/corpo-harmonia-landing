import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <WhyChoose />
      <Testimonials />
      <Benefits />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
