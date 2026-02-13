import React from 'react';
import { MapPin, Clock, Users, ShieldCheck } from 'lucide-react';
import { CLINICS_DATA, COACHES_DATA, IMAGES } from '../constants';

const ClinicsPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 mt-10">
      {/* Header */}
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Refine Your Game</h1>
        <p className="text-slate-500 text-lg">Master the sand with our expert-led clinics designed for every skill level, from first-timers to podium contenders.</p>
      </header>

      {/* Toggle */}
      <div className="flex justify-center mb-16">
        <div className="bg-white p-1.5 rounded-xl shadow-sm border border-primary/5 flex items-center gap-1">
          <button className="px-8 py-3 rounded-lg font-semibold bg-primary text-white shadow-md">Beginner</button>
          <button className="px-8 py-3 rounded-lg font-semibold text-slate-500 hover:bg-primary/5 transition-colors">Intermediate</button>
          <button className="px-8 py-3 rounded-lg font-semibold text-slate-500 hover:bg-primary/5 transition-colors">Advanced</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Clinics Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLINICS_DATA.map((clinic) => (
                <div key={clinic.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                        <img 
                            src={clinic.image} 
                            alt={clinic.title} 
                            className="w-full h-full object-cover" 
                        />
                        {clinic.badge && (
                            <div className="absolute top-4 left-4">
                                <span className={`${clinic.badge.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                                    {clinic.badge.label}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-slate-900">{clinic.title}</h3>
                            <span className="text-primary font-bold">{clinic.price}</span>
                        </div>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-slate-500">
                                <Clock className="text-primary mr-2" size={18} />
                                {clinic.date}
                            </div>
                            <div className="flex items-center text-sm text-slate-500">
                                <MapPin className="text-primary mr-2" size={18} />
                                {clinic.location}
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                            <div className="flex items-center gap-3">
                                <img src={clinic.coach.avatar} alt="Coach" className="w-8 h-8 rounded-full object-cover" />
                                <span className="text-sm font-medium">{clinic.coach.name}</span>
                            </div>
                            <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Coaches */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 sticky top-28">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
              <Users className="text-primary" size={24} />
              Meet our Coaches
            </h2>
            <div className="space-y-8">
              {COACHES_DATA.map((coach) => (
                <div key={coach.id} className="flex flex-col items-center text-center">
                    <div className="relative mb-3">
                        <img src={coach.avatar} alt={coach.name} className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/10" />
                        {coach.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow">
                                <ShieldCheck className="text-primary" size={12} />
                            </div>
                        )}
                    </div>
                    <h4 className="font-bold text-slate-900">{coach.name}</h4>
                    <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-2">{coach.role}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{coach.description}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 border border-primary/20 text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors text-sm">
                View All Coaches
            </button>
          </div>
        </aside>
      </div>

      {/* CTA Section */}
      <section className="mt-20 relative rounded-3xl overflow-hidden bg-primary p-8 md:p-16 text-white text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't find the right time?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Book a 1-on-1 private session with one of our coaches for personalized training and video analysis.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-transform">
                Book Private Training
            </button>
            <button className="bg-primary-dark/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                Inquire About Groups
            </button>
          </div>
        </div>
      </section>

      {/* Locations Footer Snippet */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-slate-200 pt-12 mb-10">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Primary Locations</h3>
          <p className="text-slate-500 mb-6">Our clinics take place across three premium beach locations. Check your booking confirmation for specific court numbers.</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">North Beach Courts</h4>
                <p className="text-sm text-slate-500">1200 Coastal Way, Miami Beach, FL</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">East Dunes Facility</h4>
                <p className="text-sm text-slate-500">88 Ocean Blvd, Key Biscayne, FL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
          <img 
            src={IMAGES.CLINICS_FOOTER}
            alt="Aerial view of beach volleyball courts" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default ClinicsPage;