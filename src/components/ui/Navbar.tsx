import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../utils/cn';

interface NavbarProps {
  logo?: React.ReactNode;
  links?: { label: string; href: string }[];
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  links = [],
  className
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {logo}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 hover:text-pink-500',
                    isScrolled ? 'text-gray-700' : 'text-white'
                  )}
                >
                  {link.label}
                </a>
              ))}
              <Button variant={isScrolled ? 'primary' : 'secondary'} size="sm">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'p-2',
                isScrolled ? 'text-gray-700' : 'text-white'
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="primary" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};