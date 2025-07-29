import React, { useState } from 'react';
import { Play, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { ContactForm } from '../forms/ContactForm';

export const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback gradient background if video fails to load */}
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Gradient overlay for extra visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-purple-900/20 to-blue-900/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse">
          <Sparkles className="text-pink-400/40" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Zap className="text-purple-400/40" size={20} />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse">
          <TrendingUp className="text-pink-400/40" size={28} />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-1000">
          <div className="w-2 h-2 bg-pink-400/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-bounce delay-500">
          <div className="w-3 h-3 bg-purple-400/30 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white/90 text-sm font-medium shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
            <span>Powered by Advanced AI Technology</span>
            <Sparkles size={16} className="text-pink-400" />
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              Transform Your Marketing with{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-pulse">
                AI Intelligence
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              ADmyBRAND AI Suite revolutionizes digital marketing with cutting-edge artificial intelligence, 
              delivering personalized campaigns that convert and scale automatically.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm font-medium">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span>340% Average ROI Increase</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Setup in 5 Minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span>14-Day Free Trial</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="min-w-[220px] bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              <Zap size={20} className="mr-2" />
              Start Free Trial
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="min-w-[220px] group bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16">
            <p className="text-white/70 text-sm mb-8 font-medium">Trusted by 10,000+ marketing professionals worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
              {['TechCorp', 'InnovateLabs', 'GrowthCo', 'ScaleUp Inc', 'FutureBrand'].map((company) => (
                <div key={company} className="text-white/80 font-semibold text-lg hover:text-white/100 transition-colors duration-300">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Start Your Free Trial">
        <ContactForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};