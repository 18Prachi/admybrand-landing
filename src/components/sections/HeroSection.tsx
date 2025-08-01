import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { ContactForm } from '../forms/ContactForm';

export const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-purple-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium">
            <span>Powered by Advanced AI Technology</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your Marketing with{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              ADmyBRAND AI Suite revolutionizes digital marketing with cutting-edge artificial intelligence, 
              delivering personalized campaigns that convert and scale automatically.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="min-w-[200px] bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold shadow-2xl"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="min-w-[200px] group"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12">
            <p className="text-white/70 text-sm mb-8">Trusted by 10,000+ marketing professionals worldwide</p>
            <div className="flex flex-wrap items-center justify-center space-x-8 sm:space-x-12 opacity-60">
              {['TechCorp', 'InnovateLabs', 'GrowthCo', 'ScaleUp Inc', 'FutureBrand'].map((company) => (
                <div key={company} className="text-white/80 font-semibold text-lg">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image/Visual Element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl opacity-20">
        <div className="aspect-video bg-gradient-to-t from-white/10 to-transparent rounded-t-3xl backdrop-blur-sm border border-white/20"></div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Start Your Free Trial">
        <ContactForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};