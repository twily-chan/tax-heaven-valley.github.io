// import React from 'react';

// export const Contact: React.FC = () => {
//   return (
//     <section id="contact" className="py-16 md:py-24 bg-paper-100 relative">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col lg:flex-row gap-0 lg:gap-0 shadow-2xl rounded-lg overflow-hidden border border-gold-500/10">
          
//           {/* Info Side */}


//           {/* Form Side */}
//           <div className="w-full lg:w-3/5 p-6 md:p-12 bg-paper-50 order-2 lg:order-2">
//             <form onSubmit={(e) => e.preventDefault()} className="space-y-4 md:space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-xs font-bold text-lawyer-darkGreen uppercase tracking-wide mb-2">Full Name</label>
//                   <input type="text" id="name" className="w-full px-4 py-3 border border-lawyer-green/20 rounded-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-white text-base" placeholder="Your Name" />
//                 </div>
//                 <div>
//                    <label htmlFor="email" className="block text-xs font-bold text-lawyer-darkGreen uppercase tracking-wide mb-2">Email</label>
//                    <input type="email" id="email" className="w-full px-4 py-3 border border-lawyer-green/20 rounded-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-white text-base" placeholder="email@address.com" />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="topic" className="block text-xs font-bold text-lawyer-darkGreen uppercase tracking-wide mb-2">Topic</label>
//                 <div className="relative">
//                   <select id="topic" className="w-full px-4 py-3 border border-lawyer-green/20 rounded-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none appearance-none bg-white text-base">
//                     <option>Consultation Request</option>
//                     <option>Tax Controversy</option>
//                     <option>Estate Planning</option>
//                     <option>Other</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-lawyer-darkGreen">
//                     <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-xs font-bold text-lawyer-darkGreen uppercase tracking-wide mb-2">Message</label>
//                 <textarea id="message" rows={4} className="w-full px-4 py-3 border border-lawyer-green/20 rounded-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-white text-base" placeholder="How can I assist you?"></textarea>
//               </div>

//               <div className="pt-2">
//                 <button type="submit" className="w-full py-3 md:py-4 bg-lawyer-green text-paper-50 font-bold tracking-widest uppercase rounded-sm hover:bg-gold-600 transition-colors shadow-lg text-sm md:text-base">
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-paper-100 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-0 shadow-2xl rounded-lg overflow-hidden border border-gold-500/10 min-h-[500px]">
          
          {/* Info Side */}
          <div className="w-full lg:w-2/5 bg-lawyer-green p-8 md:p-12 text-paper-50 relative overflow-hidden order-1 lg:order-1">
             {/* Decorative circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold-500/30 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-gold-500/20 rounded-full blur-xl"></div>
            
            <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">Direct Contact</h3>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Let's Discuss Your Matter
            </h2>
            <p className="text-paper-200 mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
              I handle all inquiries personally. Please reach out to schedule a private consultation regarding your tax concerns.
            </p>
            
            <div className="space-y-6 md:space-y-8 relative z-10">
              <div className="flex items-start space-x-4">
                <div className="mt-1 text-gold-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-paper-50 mb-1 font-serif text-sm md:text-base">Office</h4>
                  <p className="text-paper-200 text-xs md:text-sm">Green City Regency Bhaban<br />Level 5, 26, Kakrail<br />Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 text-gold-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-paper-50 mb-1 font-serif text-sm md:text-base">Phone</h4>
                  <p className="text-paper-200 text-xs md:text-sm">+880 1712-413731</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 text-gold-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-paper-50 mb-1 font-serif text-sm md:text-base">Email</h4>
                  <p className="text-paper-200 text-xs md:text-sm">mail2nasir@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-3/5 relative order-1 lg:order-2 h-[400px] lg:h-auto min-h-[400px] bg-paper-200">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=Green%20City%20Regency%20Bhaban%2C%20Level%205%2C%2026%2C%20Kakrail%2C%20Dhaka%2C%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Tax Heaven Valley Location"
              className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};