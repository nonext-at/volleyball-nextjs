import React from 'react';
import { Calendar, Clock, MapPin, Ticket, Share2, Info, Volleyball, Lock } from 'lucide-react';
import { IMAGES } from '../constants';

const EventDetailsPage: React.FC = () => {
  return (
    <main className="max-w-[1280px] mx-auto pb-20">
      {/* Hero Section */}
      <div className="px-4 lg:px-20 pt-6">
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl lg:rounded-3xl overflow-hidden shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            alt="People playing volleyball on a sunny beach" 
            src={IMAGES.EVENT_DETAILS_HERO}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
            <div className="max-w-3xl">
              <span className="bg-primary px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-4 inline-block">Social Event</span>
              <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-4">BBQ & Bump Mixer</h1>
              <p className="text-lg text-white/90 font-medium">Serve, Spike, and Sizzle. Join us for our legendary monthly beach volleyball mixer followed by a sunset BBQ.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-4 lg:px-20 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details & Content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Date</p>
                <p className="font-bold">July 22nd, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Time</p>
                <p className="font-bold">2:00 PM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                <p className="font-bold">North Shore Beach</p>
              </div>
            </div>
          </div>

          {/* Event Description */}
          <section>
            <h2 className="text-2xl font-bold mb-4">About the Mixer</h2>
            <div className="prose max-w-none text-slate-600 space-y-4 leading-relaxed">
              <p>Get ready for the ultimate summer vibe! Our BBQ & Bump Mixer is designed for players of all levels. We start the afternoon with randomized 4v4 mixer sets, allowing you to meet new club members and practice your skills in a low-pressure, high-fun environment.</p>
              <p>As the sun begins to set, we'll fire up the grills. We've got grass-fed burgers, marinated chicken, and plenty of vegetarian options. Feel free to bring your own specialized beverages (non-glass containers only!).</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Check-in starts at 1:45 PM</li>
                <li>Round Robin Mixer: 2:30 PM - 5:30 PM</li>
                <li>BBQ & Sunset Social: 6:00 PM onwards</li>
                <li>All equipment (balls, nets) provided</li>
              </ul>
            </div>
          </section>

          {/* Who's Coming Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Who's Coming</h2>
              <span className="text-sm font-semibold text-primary">42 people attending</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex -space-x-3 overflow-hidden">
                <img className="inline-block size-12 rounded-full ring-2 ring-white object-cover" alt="Attendee" src={IMAGES.ATTENDEE_1} />
                <img className="inline-block size-12 rounded-full ring-2 ring-white object-cover" alt="Attendee" src={IMAGES.ATTENDEE_2} />
                <img className="inline-block size-12 rounded-full ring-2 ring-white object-cover" alt="Attendee" src={IMAGES.ATTENDEE_3} />
                <img className="inline-block size-12 rounded-full ring-2 ring-white object-cover" alt="Attendee" src={IMAGES.ATTENDEE_4} />
                <img className="inline-block size-12 rounded-full ring-2 ring-white object-cover" alt="Attendee" src={IMAGES.ATTENDEE_5} />
                <div className="flex items-center justify-center size-12 rounded-full bg-slate-200 ring-2 ring-white text-xs font-bold text-slate-600">+37</div>
              </div>
              <p className="text-sm text-slate-500 ml-2">Joined by Sarah, Mike, Alex and 39 others</p>
            </div>
          </section>

          {/* Gallery Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Past Mixer Gallery</h2>
              <button className="text-sm font-bold text-primary hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
              <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Gallery" src={IMAGES.EVENT_GALLERY_1} />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Gallery" src={IMAGES.EVENT_GALLERY_2} />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Gallery" src={IMAGES.EVENT_GALLERY_3} />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Gallery" src={IMAGES.EVENT_GALLERY_4} />
              </div>
              <div className="overflow-hidden rounded-xl relative group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery" src={IMAGES.EVENT_GALLERY_5} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-bold">+12 photos</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: RSVP Sidebar */}
        <div className="space-y-6">
          {/* RSVP Card */}
          <div className="sticky top-24 bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Price</p>
                  <p className="text-3xl font-black text-primary">$25.00</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md inline-block">Only 8 spots left!</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
                  <Ticket size={20} />
                  Get Tickets
                </button>
                <button className="w-full py-3 bg-slate-100 text-slate-800 font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                   <Share2 size={18} /> Share Event
                </button>
              </div>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Info className="text-slate-400" size={16} />
                  Event Policy
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Full refund available up to 48 hours before the event. In case of rain, the mixer will be rescheduled for the following Sunday.
                </p>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
            <h3 className="font-bold mb-3">Location</h3>
            <div className="aspect-video bg-slate-200 rounded-xl mb-3 overflow-hidden">
              <img className="w-full h-full object-cover grayscale opacity-80" alt="Map" src={IMAGES.EVENT_MAP} />
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm font-bold">North Shore Beach, Court 4-8</p>
                <p className="text-xs text-slate-500">123 Sunset Way, Coastal City, HI</p>
              </div>
            </div>
            <button className="w-full mt-4 py-2 border border-primary/30 text-primary text-sm font-bold rounded-lg hover:bg-primary/5 transition-colors">
              Open in Google Maps
            </button>
          </div>

          {/* Organizer Profile */}
          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex items-center gap-4">
            <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white">
              <Volleyball size={24} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-bold uppercase">Organized by</p>
              <p className="font-bold">SandSpike Club</p>
            </div>
            <button className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full hover:bg-primary/20 transition-colors">
              Follow
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventDetailsPage;
