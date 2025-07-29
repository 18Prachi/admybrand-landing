import React from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = false
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg border border-gray-200',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl',
    gradient: 'bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-200'
  };

  const hoverStyles = hover ? 'hover:shadow-2xl hover:scale-105 cursor-pointer' : '';

  return (
    <div className={cn(baseStyles, variants[variant], hoverStyles, className)}>
      {children}
    </div>
  );
};