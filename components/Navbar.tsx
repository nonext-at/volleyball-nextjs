import React, { useState } from 'react';
import { Menu, X, Search, Volleyball } from 'lucide-react';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate(Page.HOME)}
          >
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
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              Sand<span className="text-primary">Spike</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-primary'
                    : 'text-slate-600 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
             {currentPage !== Page.HOME && (
                 <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                     <Search size={20} />
                 </button>
             )}
            <button className="hidden sm:block font-semibold px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              Login
            </button>
            <button 
              onClick={() => onNavigate(Page.MEMBERSHIP)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              Join the Club
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                   currentPage === item.page
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full text-center font-semibold px-4 py-2 text-slate-600 border border-slate-200 rounded-lg">
                Login
              </button>
              <button 
                onClick={() => {
                  onNavigate(Page.MEMBERSHIP);
                  setIsOpen(false);
                }}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-md"
              >
                Join the Club
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
