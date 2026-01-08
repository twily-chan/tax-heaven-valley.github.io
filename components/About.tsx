import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-paper-50 relative overflow-hidden border-t border-gold-500/10">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-paper-100">
              {/* Profile Image */}
              <img 
                src="/../img/profile.png" 
                alt="Nasir Uddin Nayon" 
                className="w-full h-auto aspect-[3/4] object-cover object-top bg-lawyer-green/10"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback Placeholder (Hidden by default unless img fails) */}
              <div className="hidden aspect-[3/4] bg-lawyer-green/10 flex items-center justify-center">
                 <svg className="w-24 h-24 md:w-32 md:h-32 text-lawyer-green/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-lawyer-green/90 to-transparent flex items-end p-6 md:p-8">
                 <div>
                    <h3 className="text-white font-serif text-xl md:text-2xl font-bold">Nasir Uddin Nayon</h3>
                    <p className="text-gold-400 font-sans tracking-widest text-xs md:text-sm uppercase">Tax Consultant Lawyer</p>
                 </div>
              </div>
            </div>
            {/* Gold Frame - Hidden on mobile for cleaner look */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500/50 z-0 rounded-lg hidden lg:block"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-px w-8 md:w-12 bg-gold-600"></div>
              <span className="text-gold-600 font-bold uppercase tracking-widest text-xs">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-lawyer-darkGreen mb-6 md:mb-8 leading-tight">
              A Personal Commitment to <br/>
              <span className="italic text-gold-600">Your Financial Security</span>
            </h2>
            
            <p className="text-lawyer-darkGreen/80 mb-6 leading-relaxed text-base md:text-lg">
              Welcome to Tax Heaven Valley. I am Nasir Uddin Nayon, and I have dedicated my career to mastering the intricacies of tax law. Unlike large, impersonal firms, I offer direct, one-on-one counsel to ensure your specific needs are met with precision and care.
            </p>
            
            <p className="text-lawyer-darkGreen/80 mb-8 leading-relaxed text-base md:text-lg">
              My practice is built on a foundation of trust and results. Whether you are an individual facing an audit or a business owner planning for the future, I act as your personal shield and strategist, navigating the labyrinth of regulations so you don't have to.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gold-500/20">
              <div>
                <span className="block text-3xl md:text-4xl font-serif font-bold text-lawyer-green mb-1">7+</span>
                <span className="text-[10px] md:text-xs text-lawyer-darkGreen/60 uppercase tracking-widest font-bold">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif font-bold text-lawyer-green mb-1">100%</span>
                <span className="text-[10px] md:text-xs text-lawyer-darkGreen/60 uppercase tracking-widest font-bold">Client Dedication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};