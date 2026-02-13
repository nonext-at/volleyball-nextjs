import React from 'react';
import { Clock, ArrowRight, Trophy, Star } from 'lucide-react';
import { IMAGES, TOURNAMENTS_DATA, LEADERBOARD_DATA } from '../constants';

const TournamentsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <header className="relative h-64 flex items-center overflow-hidden">
        <img 
            src={IMAGES.TOURNAMENT_HERO}
            alt="Beach Background" 
            className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white mt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Championship Season</h1>
          <p className="text-lg text-slate-200 max-w-2xl">Find your next challenge. Register your team and climb the seasonal leaderboard.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Tournaments Feed */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex gap-2">
                <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">All Events</button>
                <button className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors">Pro Series</button>
                <button className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors">Amateur</button>
                <button className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors">Mixed</button>
              </div>
              <div className="text-sm text-slate-500 font-medium">
                Showing 8 upcoming events
              </div>
            </div>

            {/* Tournament Cards */}
            <div className="space-y-4">
              {TOURNAMENTS_DATA.map((tournament) => (
                <div key={tournament.id} className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow ${tournament.isFull ? 'opacity-90' : ''}`}>
                  <div className="flex flex-col md:flex-row">
                    {/* Date Block */}
                    <div className={`w-full md:w-48 ${tournament.isFull ? 'bg-slate-200 grayscale' : 'bg-slate-100'} flex flex-col items-center justify-center p-4 text-center border-r border-slate-100`}>
                      <span className={`font-bold text-3xl ${tournament.isFull ? 'text-slate-600' : 'text-primary'}`}>{tournament.date}</span>
                      <span className="text-slate-500 uppercase text-xs font-semibold tracking-widest mt-1">{tournament.day}</span>
                      {tournament.time && (
                        <div className="mt-3 flex items-center gap-1 text-xs text-slate-400">
                          <Clock size={14} /> {tournament.time}
                        </div>
                      )}
                    </div>
                    
                    {/* Content Block */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {tournament.tags.map((tag, idx) => (
                              <span key={idx} className={`${tag.color} text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded`}>
                                {tag.label}
                              </span>
                            ))}
                          </div>
                          <h3 className={`text-xl font-bold ${tournament.isFull ? 'text-slate-500' : 'text-slate-900'}`}>{tournament.title}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-400 uppercase font-semibold">Prize Pool</div>
                          <div className={`text-lg font-bold ${tournament.isFull ? 'text-slate-400' : 'text-slate-900'}`}>{tournament.prizePool}</div>
                        </div>
                      </div>

                      {/* Details Grid */}
                      {!tournament.isFull ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                          <div>
                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Entry Fee</p>
                            <p className="font-semibold text-slate-800">{tournament.entryFee}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Location</p>
                            <p className="font-semibold text-slate-800">{tournament.location}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Spots Left</p>
                            <p className={`font-semibold ${tournament.spotsColor || 'text-slate-800'}`}>{tournament.spotsLeft}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-6 mb-2"></div>
                      )}

                      {/* Footer / Action */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        {tournament.isFull ? (
                            <>
                                <p className="text-sm text-slate-500 italic">This tournament is currently full.</p>
                                <button className="bg-slate-100 text-slate-600 px-6 py-2 rounded-lg font-bold hover:bg-slate-200 transition-all">
                                    Join Waitlist
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="flex -space-x-2">
                                {tournament.registeredAvatars.map((avatar, idx) => (
                                    <img key={idx} src={avatar} alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">+{tournament.registeredCount}</div>
                                </div>
                                <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:brightness-110 transition-all flex items-center gap-2">
                                    {tournament.id === '1' ? 'Register Team' : 'Register Team'} <ArrowRight size={16} />
                                </button>
                            </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Leaderboard */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 rounded-2xl p-6 text-white sticky top-24">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold">Leaderboard</h2>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">August Ranking</p>
                </div>
                <Trophy className="text-primary" size={28} />
              </div>
              
              <div className="space-y-4">
                {/* Top 3 */}
                {LEADERBOARD_DATA.slice(0, 3).map((entry) => (
                    <div key={entry.rank} className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/10 group hover:bg-white/10 transition-all">
                        <div className="relative">
                            <div className={`absolute -top-1 -left-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-slate-900 border-2 border-slate-900 ${
                                entry.rank === 1 ? 'bg-yellow-500' : entry.rank === 2 ? 'bg-slate-300' : 'bg-orange-400'
                            }`}>
                                {entry.rank}
                            </div>
                            <img src={entry.avatar} alt={`Rank ${entry.rank}`} className={`w-12 h-12 rounded-full border-2 ${entry.rank === 1 ? 'border-primary' : 'border-slate-700'} object-cover`} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-sm">{entry.name}</h4>
                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{entry.wins} Wins • {entry.losses} Losses</p>
                        </div>
                        <div className="text-right">
                            <p className={`${entry.rank === 1 ? 'text-primary' : 'text-white'} font-bold text-lg leading-none`}>{entry.points.toLocaleString()}</p>
                            <p className="text-[10px] text-slate-500 uppercase font-bold">PTS</p>
                        </div>
                    </div>
                ))}

                {/* Compact List */}
                <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
                  {LEADERBOARD_DATA.slice(3).map((entry) => (
                    <div key={entry.rank} className="flex items-center justify-between px-2 text-sm text-slate-400">
                        <div className="flex gap-4">
                        <span className="w-4 font-bold text-slate-500">{entry.rank}</span>
                        <span className="text-slate-300">{entry.name}</span>
                        </div>
                        <span className="font-bold">{entry.points.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-8 py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all text-sm">
                View Full Rankings
              </button>

              {/* Monthly Stats Widget */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="bg-primary/20 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="text-primary" size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">Player of the Month</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU9UiGscDXQ4p94EBPvYgn1H4EaSH3BrApOrwR0-ZIQkiqgrw_Jk3Ibn6i0OQJIspmcdJjyhtgby4oSQfbiXJB8gsyaVDcZLOO4g8r3uqZCaArfkeDFbVzMSDTG0p18LWpfDBisNADpBMVFcpoXDn3EU27qtZJWUAS9hwlQ5bJMC5CWclAvPkR_S3ERsp8Z_R1aDjNDh_3-t6JoSylvJrIPlxpAyt5p56mE2-cY2RWpKA7r4QH006xc-k8Hbgc0dafqmRp0vbor7E" 
                        alt="MVP" 
                        className="w-10 h-10 rounded-full object-cover" 
                    />
                    <div>
                      <p className="text-sm font-bold text-white">Alex Rivera</p>
                      <p className="text-[10px] text-primary font-medium">88% Win Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default TournamentsPage;