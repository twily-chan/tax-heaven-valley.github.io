import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "James Sterling",
    role: "CEO",
    company: "Sterling Ventures",
    quote: "Nasir didn't just handle our tax case; he took ownership of it. His calm demeanor and strategic brilliance during the audit were invaluable.",
  },
  {
    id: 2,
    author: "Dr. Sarah Chen",
    role: "Private Investor",
    company: "Family Office",
    quote: "I was looking for a personal lawyer, not a faceless firm. Nasir Uddin Nayon provided the bespoke attention and expert counsel my estate planning required.",
  },
  {
    id: 3,
    author: "Marcus Thorne",
    role: "Developer",
    company: "Thorne Holdings",
    quote: "Tax Heaven Valley is aptly named. Nasir navigated a complex liability issue that others couldn't solve. He is my go-to consultant for all tax matters.",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-lawyer-green text-paper-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16">
          <div className="max-w-2xl">
            <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">Client Stories</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-paper-50">
              Trusted Relationships
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-lawyer-darkGreen/50 p-6 md:p-8 rounded-lg border border-gold-500/20 hover:border-gold-500 transition-colors duration-300 relative">
              <div className="text-gold-500 mb-4 md:mb-6">
                 <svg className="w-6 h-6 md:w-[30px] md:h-[30px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              <p className="text-paper-200 italic mb-6 leading-relaxed text-sm md:text-base">"{item.quote}"</p>
              <div>
                <h5 className="text-paper-50 font-bold font-serif">{item.author}</h5>
                <p className="text-gold-500 text-[10px] md:text-xs uppercase tracking-wide">{item.role}, {item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};