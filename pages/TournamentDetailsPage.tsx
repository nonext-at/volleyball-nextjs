import React, { useState } from 'react';
import { Calendar, MapPin, Users, AlertTriangle, Trophy, Lock, HelpCircle, Mail, Phone, ChevronDown, ArrowRight, Medal } from 'lucide-react';
import { IMAGES } from '../constants';

const TournamentDetailsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(16, 28, 34, 0.9) 100%), url("${IMAGES.TOURNAMENT_DETAILS_HERO}")`
                    }}
                ></div>
                <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-20 pb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">Summer Pro-Am Series</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-4 tracking-tighter">Midnight Sun Open</h1>
                    <div className="flex flex-wrap items-center gap-6 text-white/80">
                        <div className="flex items-center gap-2">
                            <Calendar size={20} className="text-primary" />
                            <span className="text-sm md:text-base font-medium">June 21-23, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={20} className="text-primary" />
                            <span className="text-sm md:text-base font-medium">Santa Monica Gold Courts, CA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users size={20} className="text-primary" />
                            <span className="text-sm md:text-base font-medium">2-v-2 Division</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Info & Registration */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-20 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Registration Card */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center border border-slate-100">
                    <div className="flex-1 w-full">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-slate-900">Registration Status</h3>
                            <span className="text-primary font-bold">12/16 Teams</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-3">
                            <div className="h-full bg-primary" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                            <AlertTriangle size={18} className="text-orange-500" />
                            Only <span className="font-bold text-slate-900">4 spots</span> remaining! Closes in 3 days.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px] w-full md:w-auto">
                        <button className="w-full bg-primary text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform">
                            Register Team
                        </button>
                        <p className="text-center text-xs text-slate-500">Registration fee: $120 per team</p>
                    </div>
                </div>
                {/* Prize Pool Card */}
                <div className="bg-primary text-white rounded-xl shadow-xl p-8 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 size-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                    <p className="text-white/80 font-semibold mb-2 flex items-center gap-2">
                        <Trophy size={20} />
                        Total Prize Pool
                    </p>
                    <h2 className="text-4xl font-black mb-6">$5,000</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm border-b border-white/20 pb-2">
                            <span>1st Place</span>
                            <span className="font-bold">$3,000</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-white/20 pb-2">
                            <span>2nd Place</span>
                            <span className="font-bold">$1,500</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>3rd Place</span>
                            <span className="font-bold">$500</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bracket Visualization */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-20 py-20 overflow-x-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">Tournament Bracket</h2>
                        <p className="text-slate-500">Real-time match progression and seeds</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors text-slate-700">Winners Bracket</button>
                        <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-500 hover:bg-white border border-transparent hover:border-slate-200 transition-colors">Consolation</button>
                    </div>
                </div>
                {/* Bracket Content */}
                <div className="flex items-center min-w-[800px] py-4">
                    {/* Quarter Finals */}
                    <div className="flex flex-col justify-around gap-12 flex-1">
                        <div className="space-y-4">
                            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm relative after:content-[''] after:absolute after:border-r-2 after:border-slate-200 after:h-full after:-right-6 after:top-1/2 after:-translate-y-1/2">
                                <div className="flex justify-between text-xs font-bold mb-2 text-slate-400"><span>Match 01</span><span>Final</span></div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                                    <span className="font-semibold text-slate-800">Spike Force</span><span className="text-primary font-black">21</span>
                                </div>
                                <div className="flex justify-between items-center opacity-60">
                                    <span className="text-slate-800">Beach Kings</span><span className="text-slate-800">18</span>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm relative">
                                <div className="flex justify-between text-xs font-bold mb-2 text-slate-400"><span>Match 02</span><span>Final</span></div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2 opacity-60">
                                    <span className="text-slate-800">Volley Vets</span><span className="text-slate-800">15</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-primary">Sand Sovereigns</span><span className="font-black text-slate-800">21</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm relative after:content-[''] after:absolute after:border-r-2 after:border-slate-200 after:h-full after:-right-6 after:top-1/2 after:-translate-y-1/2">
                                <div className="flex justify-between text-xs font-bold mb-2 text-slate-400"><span>Match 03</span><span>Final</span></div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                                    <span className="font-semibold text-primary">Coastal Elites</span><span className="font-black text-slate-800">21</span>
                                </div>
                                <div className="flex justify-between items-center opacity-60">
                                    <span className="text-slate-800">Pacific Pair</span><span className="text-slate-800">19</span>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm relative">
                                <div className="flex justify-between text-xs font-bold mb-2 text-slate-400"><span>Match 04</span><span>In Progress</span></div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                                    <span className="font-semibold text-slate-800">Sunset Squad</span><span className="font-black text-slate-800">12</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-slate-800">Tidal Wave</span><span className="font-black text-slate-800">14</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Semi Finals */}
                    <div className="flex flex-col justify-around gap-12 flex-1 px-8">
                        <div className="bg-white p-4 rounded-xl border-2 border-primary/20 shadow-md relative">
                            <div className="absolute -left-8 top-1/2 w-8 h-px bg-primary/20"></div>
                            <div className="flex justify-between text-xs font-bold mb-3 text-primary uppercase"><span>Semi-Final A</span></div>
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                                <span className="font-bold text-slate-800">Spike Force</span><span className="text-slate-400">TBD</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-slate-800">Sand Sovereigns</span><span className="text-slate-400">TBD</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-md relative">
                            <div className="absolute -left-8 top-1/2 w-8 h-px bg-slate-200"></div>
                            <div className="flex justify-between text-xs font-bold mb-3 text-slate-400 uppercase"><span>Semi-Final B</span></div>
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2 opacity-50">
                                <span className="font-bold text-slate-800">Coastal Elites</span><span>--</span>
                            </div>
                            <div className="flex justify-between items-center opacity-50">
                                <span className="font-bold text-slate-800">Winner Match 04</span><span>--</span>
                            </div>
                        </div>
                    </div>
                    {/* Final */}
                    <div className="flex flex-col justify-center flex-1">
                        <div className="bg-gradient-to-br from-primary to-blue-600 p-1 rounded-2xl shadow-2xl relative">
                            <div className="absolute -left-8 top-1/2 w-8 h-px bg-primary/40"></div>
                            <div className="bg-white p-6 rounded-xl">
                                <div className="text-center mb-6">
                                    <Medal size={40} className="text-yellow-500 mx-auto mb-2" />
                                    <h3 className="text-lg font-black uppercase tracking-tighter text-slate-900">Grand Final</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg opacity-40">
                                        <span className="font-bold text-slate-800">Winner Semi A</span>
                                        <Lock size={18} />
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg opacity-40">
                                        <span className="font-bold text-slate-800">Winner Semi B</span>
                                        <Lock size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules & Regulations */}
            <section className="bg-white py-20 border-t border-slate-100">
                <div className="max-w-[1200px] mx-auto px-4 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-slate-900">Rules & Regulations</h2>
                        <div className="space-y-4">
                            <details className="group bg-slate-50 rounded-xl p-4 cursor-pointer" open>
                                <summary className="flex items-center justify-between font-bold list-none text-slate-800">
                                    <span>Tournament Format</span>
                                    <ChevronDown className="transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="mt-4 text-slate-500 text-sm leading-relaxed space-y-2">
                                    <p>Double elimination format. Matches are best of 3 sets. First two sets to 21, third set to 15 (cap at 17).</p>
                                    <p>FIVB standard sand volleyball rules apply. No open-hand tips. Double contact on first ball must be hard driven.</p>
                                </div>
                            </details>
                            <details className="group bg-slate-50 rounded-xl p-4 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold list-none text-slate-800">
                                    <span>Equipment & Attire</span>
                                    <ChevronDown className="transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="mt-4 text-slate-500 text-sm leading-relaxed">
                                    <p>Official Mikasa Beach Pro balls provided. Players must wear matching team colors. Sand socks permitted. No jewelry allowed on court.</p>
                                </div>
                            </details>
                            <details className="group bg-slate-50 rounded-xl p-4 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold list-none text-slate-800">
                                    <span>Weather Policy</span>
                                    <ChevronDown className="transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="mt-4 text-slate-500 text-sm leading-relaxed">
                                    <p>Tournament is rain or shine. In case of lightning, play is suspended for 30 mins after last strike. Schedule may be compressed to finish event.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="bg-background-dark text-white rounded-2xl p-10 flex flex-col justify-center">
                        <HelpCircle size={48} className="text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Questions?</h3>
                        <p className="text-white/60 mb-8">Need more clarification on rules or team registration? Our team is here to help you get court-ready.</p>
                        <div className="flex flex-col gap-4">
                            <button className="flex items-center gap-3 text-white font-semibold hover:text-primary transition-colors text-left">
                                <Mail size={20} /> contact@sandspike.com
                            </button>
                            <button className="flex items-center gap-3 text-white font-semibold hover:text-primary transition-colors text-left">
                                <Phone size={20} /> (555) 012-3456
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsors */}
            <section className="max-w-[1200px] mx-auto px-4 md:px-20 py-20 border-t border-slate-100">
                <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-12">Proudly sponsored by</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all text-slate-800">
                    <div className="text-2xl font-black italic tracking-tighter">HYDRO+</div>
                    <div className="text-2xl font-bold tracking-widest">AURA</div>
                    <div className="text-2xl font-black">SUN<span className="text-primary">GUARD</span></div>
                    <div className="text-2xl font-medium">peak performance</div>
                    <div className="text-2xl font-bold italic">Sandsation</div>
                </div>
            </section>
        </main>

        {/* Floating Register Button */}
        <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
            <button className="flex items-center gap-3 bg-primary text-white pl-6 pr-4 py-4 rounded-full font-bold shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                Register Team <span className="p-2 bg-white/20 rounded-full"><ArrowRight size={20} /></span>
            </button>
        </div>
    </div>
  );
};

export default TournamentDetailsPage;
