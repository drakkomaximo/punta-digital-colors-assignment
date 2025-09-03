'use client';

import { useState, useEffect } from 'react';

interface ScrollToTopProps {
  modalOpen?: boolean;
}

export const ScrollToTop = ({ modalOpen = false }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-palette-cyan to-palette-hot-pink text-white rounded-full shadow-2xl hover:shadow-[0_20px_40px_rgba(255,105,180,0.4)] transform transition-all duration-300 flex items-center justify-center group ${
        isVisible && !modalOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ 
        pointerEvents: isVisible && !modalOpen ? 'auto' : 'none',
        filter: 'drop-shadow(0 8px 16px rgba(0, 255, 255, 0.3))'
      }}
    >
      <svg 
        className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-200" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};
