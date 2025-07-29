import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../utils/cn';

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = true,
  interval = 5000,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, children.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          className="ml-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-gray-800 rounded-full p-2"
        >
          <ChevronLeft size={20} />
        </Button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          className="mr-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-gray-800 rounded-full p-2"
        >
          <ChevronRight size={20} />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-200',
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};