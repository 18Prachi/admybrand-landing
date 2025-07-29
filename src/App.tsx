import React from 'react';
import { Sparkles } from 'lucide-react';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { PricingSection } from './components/sections/PricingSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FAQSection } from './components/sections/FAQSection';
import { Footer } from './components/sections/Footer';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' }
];

const logo = (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
      <Sparkles className="text-white" size={20} />
    </div>
    <span className="text-xl font-bold">ADmyBRAND</span>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar logo={logo} links={navLinks} />
      
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;