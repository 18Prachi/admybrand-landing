import React, { useState } from 'react';
import { Play, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { ContactForm } from '../forms/ContactForm';

export const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Sparkles className="text-white/30" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Zap className="text-white/30" size={20} />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse">
          <TrendingUp className="text-white/30" size={28} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium">
            <Sparkles size={16} className="text-yellow-400" />
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
              <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
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