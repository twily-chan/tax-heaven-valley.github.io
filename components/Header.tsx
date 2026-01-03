import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'My Profile', href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Me', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-paper-100/95 backdrop-blur-md shadow-md py-3 border-b border-gold-500/20' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#hero" className="group flex items-center gap-3 relative z-50">
            <div className={`w-8 h-8 md:w-10 md:h-10 border-2 rounded-full flex items-center justify-center transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'border-lawyer-green text-lawyer-green' : 'border-lawyer-green bg-paper-50 text-lawyer-green'}`}>
               <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.8L19.4 19H4.6L12 5.8zM12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
            </div>
            <div>
              <h1 className={`text-lg md:text-xl font-serif font-bold tracking-wide leading-none transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-lawyer-green' : 'text-lawyer-green'}`}>
                Tax Heaven <span className="text-gold-600">Valley</span>
              </h1>
              <p className={`text-[9px] md:text-[10px] uppercase tracking-widest font-sans ${isScrolled || isMobileMenuOpen ? 'text-lawyer-green/80' : 'text-lawyer-green'}`}>Nasir Uddin Nayon</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.15em] hover:text-gold-600 transition-colors duration-300 ${
                  isScrolled ? 'text-lawyer-darkGreen' : 'text-lawyer-darkGreen'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 transform transition-all duration-300 bg-lawyer-green ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 transition-opacity duration-300 bg-lawyer-green ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 transform transition-all duration-300 bg-lawyer-green ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar (Drawer) */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-visibility duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-lawyer-darkGreen/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-paper-100 shadow-2xl flex flex-col pt-24 pb-8 px-8 border-l border-gold-500/20 transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col space-y-6">
            {links.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lawyer-darkGreen hover:text-gold-600 font-serif font-bold text-2xl border-b border-gold-500/10 pb-4 transition-all duration-300 transform translate-x-0 hover:translate-x-2"
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <h4 className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-4">Contact</h4>
            <p className="text-lawyer-darkGreen text-sm mb-2">+880 1711-000000</p>
            <p className="text-lawyer-darkGreen text-sm">nasir@taxheavenvalley.com</p>
          </div>
        </div>
      </div>
    </>
  );
};