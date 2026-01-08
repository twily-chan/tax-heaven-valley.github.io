import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-lawyer-darkGreen text-paper-200 py-12 md:py-16 border-t border-lawyer-green">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xl md:text-2xl font-serif font-bold text-paper-50 mb-2">
              Tax Heaven <span className="text-gold-500">Valley</span>
            </h4>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-gold-500 mb-6">Nasir Uddin Nayon | Tax Consultant Lawyer</p>
            <p className="max-w-md text-sm leading-relaxed mb-6 text-paper-200/80">
              Providing sophisticated, personal counsel for complex tax matters. I stand between you and the complexity of the law, ensuring your wealth and legacy are protected with integrity.
            </p>
            <div className="flex space-x-4">
              {['Likedin', 'Twitter', 'Facebook'].map(social => (
                <a key={social} href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-lawyer-green flex items-center justify-center hover:bg-gold-500 hover:text-lawyer-darkGreen transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-paper-50 font-bold uppercase tracking-widest text-xs mb-4 md:mb-6">Expertise</h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>Tax Controversy</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-paper-50 font-bold uppercase tracking-widest text-xs mb-4 md:mb-6">Links</h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Nasir</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-lawyer-green pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-paper-200/60 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Tax Heaven Valley | Nasir Uddin Nayon. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Attorney Advertising. Disclaimer applied.</p>
        </div>
      </div>
    </footer>
  );
};