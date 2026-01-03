import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// The Homepage Component containing all sections
const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Contact />
  </>
);

// Wrapper for sub-pages to add top padding (since Header is fixed)
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="pt-24 min-h-screen bg-paper-50">
    {children}
  </div>
);

function App() {
  return (
    <div className="font-sans text-lawyer-darkGreen bg-paper-50 min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Individual Pages */}
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/expertise" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

          {/* Catch-all Route: If user types /taxfirm/unknown, redirect to Home or handle gracefully */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;