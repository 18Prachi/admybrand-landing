import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-fadeInUp');
          element.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
    observer.observe(element);

    return () => observer.unobserve(element);
  }, [options.threshold, options.rootMargin]);

  return ref;
};