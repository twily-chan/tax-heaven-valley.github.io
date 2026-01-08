import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="mx-auto w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-8 animate-fade-in-up">
           <img 
             src="/../img/icon.png" 
             alt="Tax Heaven Valley Logo" 
             className="w-full h-full object-contain drop-shadow-lg"
           />
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
          <Link 
            to="/contact" 
            className="group relative px-6 py-3 md:px-8 md:py-4 bg-lawyer-green text-paper-50 font-bold tracking-wide rounded overflow-hidden shadow-lg hover:shadow-lawyer-green/30 transition-all duration-300 text-sm md:text-base inline-block"
          >
            <span className="relative z-10">Consult With Me</span>
            <div className="absolute inset-0 h-full w-full bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
          <Link 
            to="/expertise" 
            className="px-6 py-3 md:px-8 md:py-4 border border-lawyer-green/40 text-lawyer-darkGreen font-bold tracking-wide rounded hover:bg-lawyer-green hover:text-paper-50 hover:border-transparent transition-all duration-300 text-sm md:text-base inline-block"
          >
            Explore My Expertise
          </Link>
        </div>
      </div>
    </section>
  );
};