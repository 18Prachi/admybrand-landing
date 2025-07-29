import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen = false,
  onToggle
}) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <ChevronDown 
          size={20} 
          className={cn(
            'text-gray-500 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="px-6 py-4 bg-gray-50 text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactElement<AccordionItemProps>[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
  className
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      {children.map((child, index) => 
        React.cloneElement(child, {
          key: index,
          isOpen: openItems.includes(index),
          onToggle: () => handleToggle(index)
        })
      )}
    </div>
  );
};