import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Tax Controversy",
    description: "I provide vigorous representation in IRS examinations, appeals, and litigation, personally handling your case from start to finish.",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "I work directly with you to optimize tax structures for your business and personal assets, ensuring long-term efficiency.",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Estate & Trusts",
    description: "Preserving your legacy is personal. I craft sophisticated estate plans to minimize tax liability and protect your family's future.",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Corporate Tax",
    description: "Structuring complex mergers, acquisitions, and reorganizations to maximize value and compliance for your company.",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Audit Defense",
    description: "Facing an audit can be intimidating. I stand between you and the authorities, managing every communication and defense strategy.",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "International Compliance",
    description: "Expert guidance on cross-border transactions and reporting requirements for individuals with global interests.",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-paper-100 border-t border-gold-500/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h3 className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3">My Expertise</h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-lawyer-darkGreen mb-4 md:mb-6">
            Specialized Legal Counsel
          </h2>
          <p className="text-lawyer-darkGreen/70 text-base md:text-lg">
            As a dedicated practitioner, I focus on specific areas of tax law to provide the highest level of expertise and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-paper-50 p-6 md:p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gold-500/10 hover:border-gold-500 group relative overflow-hidden"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-lawyer-green/5 rounded-full flex items-center justify-center text-lawyer-green mb-4 md:mb-6 group-hover:bg-lawyer-green group-hover:text-gold-500 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-lg md:text-xl font-serif font-bold text-lawyer-green mb-3 md:mb-4 group-hover:text-gold-600 transition-colors">{service.title}</h4>
              <p className="text-lawyer-darkGreen/80 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};