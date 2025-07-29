import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'glass';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  variant = 'default',
  className,
  ...props
}, ref) => {
  const baseStyles = 'w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';
  
  const variants = {
    default: 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    glass: 'bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/70 focus:border-white/40 focus:ring-white/50'
  };

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(baseStyles, variants[variant], error && 'border-red-500 focus:border-red-500 focus:ring-red-500', className)}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';