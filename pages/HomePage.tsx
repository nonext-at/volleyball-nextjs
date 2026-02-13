import React from 'react';
import { ArrowRight, ChevronDown, Calendar, ChevronRight } from 'lucide-react';
import { Page } from '../types';
import { IMAGES } from '../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HOME_HERO}
            alt="Volleyball match at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="inline-block bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            Season Opener 2024
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            SPIKE YOUR <br /> <span className="text-primary">SUMMER</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join the city's most vibrant beach volleyball community. From first-timers to competitive pros, we have a court waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
                onClick={() => onNavigate(Page.CLINICS)}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/30"
            >
              Start Playing Today
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
                onClick={() => onNavigate(Page.TOURNAMENTS)}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-xl text-lg font-bold transition-all"
            >
              View Schedule
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={40} />
        </div>
      </header>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-8 rounded-2xl shadow-xl border border-primary/5">
          <div className="text-center border-r border-slate-100 last:border-0">
            <p className="text-3xl font-extrabold text-primary">24</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Pristine Courts</p>
          </div>
          <div className="text-center border-r border-slate-100 last:border-0">
            <p className="text-3xl font-extrabold text-primary">1.2k</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Active Members</p>
          </div>
          <div className="text-center border-r border-slate-100 last:border-0">
            <p className="text-3xl font-extrabold text-primary">15+</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Weekly Clinics</p>
          </div>
          <div className="text-center last:border-0">
            <p className="text-3xl font-extrabold text-primary">8</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Pro Coaches</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Upcoming Events</h2>
            <p className="text-slate-500 max-w-xl text-lg">
              Whether you're looking to compete or learn the basics, there's always something happening on the sand.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">All Events</button>
            <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-all">Tournaments</button>
            <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-all">Clinics</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-primary/20 transition-all hover:-translate-y-2 cursor-pointer" onClick={() => onNavigate(Page.TOURNAMENTS)}>
            <div className="relative h-56 overflow-hidden">
              <img 
                src={IMAGES.EVENT_1} 
                alt="Volleyball action" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase">Tournament</div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded">Advanced</span>
                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded">2v2</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <Calendar size={14} />
                June 15 - 16, 2024
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900">Midnight Sun Open</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Our biggest tournament of the season. High-stakes competition under the lights with pro-am brackets.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-slate-900 font-extrabold text-lg">$45 <span className="text-xs font-normal text-slate-400">/ team</span></span>
                <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Register <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-primary/20 transition-all hover:-translate-y-2 cursor-pointer" onClick={() => onNavigate(Page.CLINICS)}>
            <div className="relative h-56 overflow-hidden">
              <img 
                src={IMAGES.EVENT_2} 
                alt="Volleyball clinic" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase">Clinic</div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded">Beginner</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <Calendar size={14} />
                Every Tuesday @ 6PM
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900">Foundations of Sand</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Master the fundamentals: passing, setting, and court movement. Perfect for those new to the beach.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-slate-900 font-extrabold text-lg">$25 <span className="text-xs font-normal text-slate-400">/ session</span></span>
                <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Book Spot <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-primary/20 transition-all hover:-translate-y-2 cursor-pointer">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={IMAGES.EVENT_3} 
                alt="Volleyball game" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase">Social</div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded">All Levels</span>
                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded">4v4</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <Calendar size={14} />
                July 4, 2024
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900">BBQ & Bump Mixer</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                A casual 4v4 mixer followed by a beach BBQ. The perfect way to meet other club members and friends.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-slate-900 font-extrabold text-lg">Free <span className="text-xs font-normal text-slate-400">for members</span></span>
                <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  RSVP Now <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Join the Community?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-light">
            Members get unlimited court access, discounts on tournaments, and priority registration for all coaching clinics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              See Membership Plans
            </button>
            <button className="bg-primary-dark/20 border-2 border-white/30 text-white px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;