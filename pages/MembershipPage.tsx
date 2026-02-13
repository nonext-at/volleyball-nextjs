import React from 'react';
import { CheckCircle, X, Star, Users, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../constants';

const MembershipPage: React.FC = () => {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="px-6 py-12 md:px-20 lg:px-40 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full w-fit">2024 MEMBERSHIPS OPEN</span>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter text-slate-900">
              Level Up Your Game. <br /><span className="text-primary">Join the Club.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-[500px]">
              Experience the ultimate beach volleyball lifestyle with priority court access, expert coaching, and a vibrant community of athletes.
            </p>
            <div className="flex items-center gap-4">
              <a href="#tiers" className="bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform text-center">View Tiers</a>
              <a href="#why" className="bg-slate-100 text-slate-800 font-bold py-4 px-8 rounded-xl hover:bg-slate-200 transition-colors text-center">Why Join?</a>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video lg:aspect-square shadow-2xl">
            <img src={IMAGES.MEMBERSHIP_HERO} alt="Athletic beach volleyball game" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Current Event</p>
                <p className="font-bold text-slate-900">Sunset Open Finals</p>
              </div>
              <div className="flex -space-x-3">
                <img src={IMAGES.MEMBER_1} alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src={IMAGES.MEMBER_2} alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src={IMAGES.MEMBER_3} alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="px-6 py-20 md:px-20 lg:px-40 bg-background-light" id="why">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-slate-900">High-Energy Perks</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Become part of the most active sand sports community in the region with benefits designed for every skill level.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Perk 1 */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors group">
            <div className="text-primary bg-primary/10 p-3 rounded-lg w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Court Access</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Priority booking for our premium sand courts anytime. Never wait for a game again.</p>
          </div>
          {/* Perk 2 */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors group">
            <div className="text-primary bg-primary/10 p-3 rounded-lg w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Pro Coaching</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Weekly clinics and exclusive personal training sessions with certified pro coaches.</p>
          </div>
          {/* Perk 3 */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors group">
            <div className="text-primary bg-primary/10 p-3 rounded-lg w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Tag size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Discounts</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Save 20% on all official SandSpike gear and all tournament registration fees.</p>
          </div>
          {/* Perk 4 */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors group">
            <div className="text-primary bg-primary/10 p-3 rounded-lg w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Calendar size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Exclusive Events</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Early access to sunset tournaments and members-only beach social mixers.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20 md:px-20 lg:px-40 bg-white" id="tiers">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-slate-900">Choose Your Tier</h2>
          <p className="text-slate-600">Flexible plans tailored to your commitment and competitive drive.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Basic Tier */}
          <div className="flex flex-col p-8 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-lg font-bold text-slate-500 mb-2">Basic</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-slate-900">$29</span>
              <span className="text-slate-400 font-medium">/mo</span>
            </div>
            <p className="text-sm text-slate-500 mb-8">Perfect for weekend warriors and casual hitters.</p>
            <ul className="flex flex-col gap-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle size={18} className="text-primary" /> 2 Priority Bookings / mo</li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle size={18} className="text-primary" /> Basic Equipment Rental</li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle size={18} className="text-primary" /> Community Slack Access</li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-300"><X size={18} /> No Pro Clinic Access</li>
            </ul>
            <button className="w-full py-3 px-4 rounded-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">Get Started</button>
          </div>
          {/* Premium Tier (Featured) */}
          <div className="flex flex-col p-8 rounded-xl bg-slate-900 text-white relative shadow-2xl scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Premium</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black">$59</span>
              <span className="text-slate-400 font-medium">/mo</span>
            </div>
            <p className="text-sm text-slate-300 mb-8">The complete experience for active players.</p>
            <ul className="flex flex-col gap-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle size={18} className="text-primary" /> Unlimited Priority Bookings</li>
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle size={18} className="text-primary" /> 2 Weekly Pro Clinics</li>
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle size={18} className="text-primary" /> 15% Gear Discount</li>
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle size={18} className="text-primary" /> Exclusive Event Access</li>
            </ul>
            <button className="w-full py-4 px-4 rounded-lg font-bold bg-primary text-white shadow-lg shadow-primary/30 hover:brightness-110 transition-all">Join Premium</button>
          </div>
          {/* Pro Tier */}
          <div className="flex flex-col p-8 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-lg font-bold text-slate-500 mb-2">Pro</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-slate-900">$99</span>
              <span className="text-slate-400 font-medium">/mo</span>
            </div>
            <p className="text-sm text-slate-500 mb-8">Dedicated perks for competitive athletes.</p>
            <ul className="flex flex-col gap-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle size={18} className="text-primary" /> Everything in Premium</li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle size={18} className="text-primary" /> 1-on-1 Monthly Coaching</li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle size={18} className="text-primary" /> Free Tournament Entries</li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle size={18} className="text-primary" /> Pro Gear Welcome Pack</li>
            </ul>
            <button className="w-full py-3 px-4 rounded-lg font-bold border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">Go Pro</button>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="px-6 py-20 md:px-20 lg:px-40 bg-primary/10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="p-10 md:w-1/2 flex flex-col justify-center bg-primary text-white">
            <h2 className="text-3xl font-black mb-4">Start Your Membership Today</h2>
            <p className="text-white/80 leading-relaxed mb-6">Join 500+ members in the local SandSpike community. No long-term contracts, cancel anytime.</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-white" size={24} />
                <span className="text-sm font-bold">Instant Access Post-Registration</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-white" size={24} />
                <span className="text-sm font-bold">Secure Payment Processing</span>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/2">
            <form action="#" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
                <input className="w-full border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all" placeholder="John Doe" type="text" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email Address</label>
                <input className="w-full border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all" placeholder="john@example.com" type="email" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Select Your Tier</label>
                <select className="w-full border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all bg-white">
                  <option>Basic Plan ($29/mo)</option>
                  <option selected>Premium Plan ($59/mo)</option>
                  <option>Pro Plan ($99/mo)</option>
                </select>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform" type="submit">Complete Registration</button>
              <p className="text-[10px] text-center text-slate-400 mt-4">By clicking the button, you agree to our Terms of Service and Privacy Policy.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 border-t border-slate-200 bg-white">
        <div className="px-6 md:px-20 lg:px-40 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-black text-xl text-slate-900"><Star className="text-primary fill-primary" size={24} /> SPIKE LIFE</div>
          <div className="flex items-center gap-2 font-black text-xl text-slate-900"><Star className="text-primary fill-primary" size={24} /> BEACH PROS</div>
          <div className="flex items-center gap-2 font-black text-xl text-slate-900"><Star className="text-primary fill-primary" size={24} /> SAND HUB</div>
          <div className="flex items-center gap-2 font-black text-xl text-slate-900"><Star className="text-primary fill-primary" size={24} /> VOLLEY TOUR</div>
        </div>
      </section>
    </main>
  );
};

export default MembershipPage;
