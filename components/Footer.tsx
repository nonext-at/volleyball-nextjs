import React from 'react';
import { Facebook, Camera, PlayCircle, MapPin, Phone, Send } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-2 rounded-lg">
               <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6 text-white"
              >
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                <path d="M2 12a10 10 0 0 0 10 10V12z"></path>
              </svg>
            </div>
            <span className="text-2xl font-extrabold text-white uppercase tracking-tight">
              Sand<span className="text-primary">Spike</span>
            </span>
          </div>
          <p className="text-slate-400 mb-6 leading-relaxed">
            The premier destination for beach volleyball enthusiasts. Quality courts, expert coaching, and a community like no other.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <Camera size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <PlayCircle size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Navigation</h4>
          <ul className="space-y-4">
            <li><button onClick={() => onNavigate(Page.CLINICS)} className="hover:text-primary transition-colors">Clinics & Training</button></li>
            <li><button onClick={() => onNavigate(Page.TOURNAMENTS)} className="hover:text-primary transition-colors">Tournament Brackets</button></li>
            <li><a href="#" className="hover:text-primary transition-colors">Private Coaching</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Membership Perks</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Court Rentals</a></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Location</h4>
          <div className="flex items-start gap-3 text-slate-400 mb-4">
            <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
            <p>122 Beachfront Drive<br />Ocean City, FL 33139</p>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <Phone className="text-primary flex-shrink-0" size={20} />
            <p>(555) 123-4567</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Stay Updated</h4>
          <p className="text-slate-400 text-sm mb-4">Get weather alerts and tournament updates directly.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-slate-800 border-0 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary text-white placeholder-slate-500"
            />
            <button className="absolute right-2 top-1.5 bg-primary text-white p-1.5 rounded-lg hover:bg-primary-dark transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© 2024 SandSpike Volleyball Club. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;