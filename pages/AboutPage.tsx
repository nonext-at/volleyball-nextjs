import React from 'react';
import { ArrowRight, Users, Trophy, TrendingUp } from 'lucide-react';
import { IMAGES } from '../constants';
import { Page } from '../types';

interface AboutPageProps {
    onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background-light z-10"></div>
          <img
            src={IMAGES.ABOUT_HERO}
            alt="Beach Volleyball Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-white uppercase bg-primary/40 backdrop-blur-md rounded-full">EST. 2018</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            Empowering Every Player <br /><span className="text-primary">Under the Sun</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            Our mission is to foster a vibrant beach volleyball community where competition meets growth on the sand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">Discover Our Story</button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all">Watch Our Film</button>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">Our Journey</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-slate-200 hidden md:block"></div>
            
            {/* Timeline Item 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-24 group">
              <div className="w-full md:w-[45%] mb-8 md:mb-0 text-right">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">The Spark</h3>
                <p className="text-slate-600 leading-relaxed">It all began on a single court with four friends and a shared passion for the game. We realized the beach lacked a home for competitive spirits and social souls alike.</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center z-10 shadow-xl shadow-primary/40 hidden md:flex">
                <span className="text-white font-bold text-xs">2018</span>
              </div>
              <div className="w-full md:w-[45%] h-64 rounded-xl overflow-hidden shadow-2xl transition-transform group-hover:scale-105">
                <img src={IMAGES.ABOUT_TIMELINE_1} alt="Early Days" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-24 group">
              <div className="w-full md:w-[45%] mb-8 md:mb-0 text-left">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Building Community</h3>
                <p className="text-slate-600 leading-relaxed">By 2021, SandSpike had grown into a family of 500+ members. We launched our youth clinics and regional tournaments, cementing our place in the local sports scene.</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center z-10 shadow-xl shadow-primary/40 hidden md:flex">
                <span className="text-white font-bold text-xs">2021</span>
              </div>
              <div className="w-full md:w-[45%] h-64 rounded-xl overflow-hidden shadow-2xl transition-transform group-hover:scale-105">
                <img src={IMAGES.ABOUT_TIMELINE_2} alt="Growing Community" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="w-full md:w-[45%] mb-8 md:mb-0 text-right">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">The Future</h3>
                <p className="text-slate-600 leading-relaxed">Today, we are expanding our reach with state-of-the-art training facilities and international exchange programs. The sand is our canvas, and we're just getting started.</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center z-10 shadow-xl shadow-primary/40 hidden md:flex">
                <span className="text-white font-bold text-xs">2024</span>
              </div>
              <div className="w-full md:w-[45%] h-64 rounded-xl overflow-hidden shadow-2xl transition-transform group-hover:scale-105">
                <img src={IMAGES.ABOUT_TIMELINE_3} alt="Future Vision" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-4 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black mb-4 text-slate-900">The Leadership Team</h2>
              <p className="text-slate-600 text-lg">Meet the visionaries and coaches dedicated to making SandSpike the best volleyball experience on the coast.</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
              View All Staff <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
              <div className="size-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/10">
                <img src={IMAGES.ABOUT_TEAM_1} alt="Alex Rivera" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Alex Rivera</h4>
              <p className="text-primary font-medium text-sm mb-4 uppercase tracking-wider">Founder & Head Coach</p>
              <p className="text-slate-500 text-sm leading-relaxed">A former pro with 15 years on the sand, Alex brings a championship mindset to every training session.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
              <div className="size-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/10">
                <img src={IMAGES.ABOUT_TEAM_2} alt="Sarah Chen" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Sarah Chen</h4>
              <p className="text-primary font-medium text-sm mb-4 uppercase tracking-wider">Director of Operations</p>
              <p className="text-slate-500 text-sm leading-relaxed">The engine behind our events, Sarah ensures every tournament and program runs with flawless precision.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
              <div className="size-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/10">
                <img src={IMAGES.ABOUT_TEAM_3} alt="Marcus Thorne" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Marcus Thorne</h4>
              <p className="text-primary font-medium text-sm mb-4 uppercase tracking-wider">Community Outreach</p>
              <p className="text-slate-500 text-sm leading-relaxed">Marcus connects SandSpike with the world, fostering partnerships that expand our volleyball family.</p>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
              <div className="size-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/10">
                <img src={IMAGES.ABOUT_TEAM_4} alt="Elena Rodriguez" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Elena Rodriguez</h4>
              <p className="text-primary font-medium text-sm mb-4 uppercase tracking-wider">Lead Youth Coach</p>
              <p className="text-slate-500 text-sm leading-relaxed">Passionate about the next generation, Elena designs programs that make kids fall in love with the sport.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Bento Box */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-slate-900">What We Stand For</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Our values are the foundation of every spike, serve, and dive we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="bg-primary/5 p-10 rounded-xl border border-primary/20 flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-500">
              <div className="size-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-colors">
                <Users size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white text-slate-900">Community</h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-white/90">We believe in inclusivity. On our courts, everyone is welcome, from seasoned veterans to those touching a volleyball for the first time.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-primary/5 p-10 rounded-xl border border-primary/20 flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-500">
              <div className="size-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-colors">
                <Trophy size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white text-slate-900">Competition</h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-white/90">We push limits. We celebrate athletic excellence and the drive to improve, providing the platform to test your skills against the best.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-primary/5 p-10 rounded-xl border border-primary/20 flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-500">
              <div className="size-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-colors">
                <TrendingUp size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white text-slate-900">Growth</h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-white/90">Development never stops. Our coaching philosophy focuses on consistent skill improvement and personal character building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background-dark rounded-xl overflow-hidden relative min-h-[400px] flex items-center">
            <div className="absolute inset-0 z-0">
              <img
                src={IMAGES.ABOUT_CTA_BG}
                alt="CTA Background"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="relative z-10 p-12 md:p-24 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to hit the sand?</h2>
              <p className="text-white/80 text-lg mb-10">Join the SandSpike community today and experience beach volleyball like never before. All levels are welcome.</p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => onNavigate(Page.MEMBERSHIP)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:-translate-y-0.5"
                >
                  Join the Club
                </button>
                <button 
                  onClick={() => onNavigate(Page.CLINICS)}
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all"
                >
                  View All Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
