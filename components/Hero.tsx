import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-paper-100 overflow-hidden"
    >
      {/* Background Texture/Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
        }}
      ></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 md:h-32 bg-gradient-to-b from-paper-50 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 bg-gradient-to-t from-paper-50 to-transparent z-10"></div>

      <div className="relative z-20 container mx-auto px-6 pt-16 md:pt-20 text-center">
        
        {/* Logo/Icon Representation */}
        <div className="mx-auto w-16 h-16 md:w-24 md:h-24 mb-6 md:mb-8 text-lawyer-green opacity-90 animate-fade-in-up">
           <svg viewBox="0 0 100 100" fill="currentColor">
             <path d="M50 10 L85 80 L15 80 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
             <path d="M50 25 L50 80" stroke="currentColor" strokeWidth="2"/>
             <path d="M25 80 L25 50 L75 50 L75 80" fill="none" stroke="currentColor" strokeWidth="2"/>
             <circle cx="50" cy="40" r="5" fill="currentColor" className="text-gold-500"/>
           </svg>
        </div>

        <div className="inline-block mb-6 px-3 py-1 md:px-4 md:py-1 border border-lawyer-green/30 rounded-full bg-lawyer-green/5 backdrop-blur-sm animate-fade-in-up">
          <span className="text-lawyer-green font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-xs">
            Nasir Uddin Nayon
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-lawyer-darkGreen mb-6 leading-tight max-w-5xl mx-auto drop-shadow-sm animate-fade-in-up delay-100">
          Precision in Law.<br />
          <span className="text-gold-600 italic">
            Excellence in Taxation.
          </span>
        </h1>
        
        <p className="text-lawyer-darkGreen/80 text-base md:text-xl max-w-xl md:max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          I am a specialized Tax Consultant Lawyer providing bespoke legal strategies. I navigate the complexities of tax law to protect your wealth and secure your future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center animate-fade-in-up delay-300 px-4">
          <a 
            href="#contact" 
            className="group relative px-6 py-3 md:px-8 md:py-4 bg-lawyer-green text-paper-50 font-bold tracking-wide rounded overflow-hidden shadow-lg hover:shadow-lawyer-green/30 transition-all duration-300 text-sm md:text-base"
          >
            <span className="relative z-10">Consult With Me</span>
            <div className="absolute inset-0 h-full w-full bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 md:px-8 md:py-4 border border-lawyer-green/40 text-lawyer-darkGreen font-bold tracking-wide rounded hover:bg-lawyer-green hover:text-paper-50 hover:border-transparent transition-all duration-300 text-sm md:text-base"
          >
            Explore My Expertise
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-lawyer-green/50">
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};