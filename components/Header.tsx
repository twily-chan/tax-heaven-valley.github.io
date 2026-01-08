import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink as NavLinkType } from '../types';

const links: NavLinkType[] = [
  { label: 'Home', href: '/' },
  { label: 'My Profile', href: '/about' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact Me', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force background if not on home page
  const showBackground = isScrolled || !isHome || isMobileMenuOpen;

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
          showBackground
            ? 'bg-paper-100/95 backdrop-blur-md shadow-md py-3 border-b border-gold-500/20' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-3 relative z-50">
            <div className={`w-8 h-8 md:w-10 md:h-10 border-2 rounded-full flex items-center justify-center transition-colors duration-300 overflow-hidden ${showBackground ? 'border-lawyer-green' : 'border-lawyer-green bg-paper-50'}`}>
               <img 
                 src="/../img/icon.png" 
                 alt="Logo" 
                 className="w-full h-full object-cover" 
               />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-serif font-bold tracking-wide leading-none transition-colors duration-300 text-lawyer-green">
                Tax Heaven <span className="text-gold-600">Valley</span>
              </h1>
              <p className={`text-[9px] md:text-[10px] uppercase tracking-widest font-sans ${showBackground ? 'text-lawyer-green/80' : 'text-lawyer-green'}`}>Nasir Uddin Nayon</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-10">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-xs font-bold uppercase tracking-[0.15em] hover:text-gold-600 transition-colors duration-300 text-lawyer-darkGreen ${location.pathname === link.href ? 'text-gold-600' : ''}`}
              >
                {link.label}
              </Link>
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
              <Link
                key={link.label}
                to={link.href}
                className={`text-lawyer-darkGreen hover:text-gold-600 font-serif font-bold text-2xl border-b border-gold-500/10 pb-4 transition-all duration-300 transform translate-x-0 hover:translate-x-2 ${location.pathname === link.href ? 'text-gold-600' : ''}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
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