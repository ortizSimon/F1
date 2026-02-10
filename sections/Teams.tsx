
import React from 'react';
import { TEAMS } from '../constants';

const Teams: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <header className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.5em] text-[#ff1801] uppercase mb-4">The Paddock</h2>
          <h1 className="text-5xl md:text-7xl font-title font-bold leading-none tracking-tighter">CONSTRUCTORS</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TEAMS.map((team) => (
            <div
              key={team.id}
              className="group relative overflow-hidden bg-zinc-900 aspect-[16/9] border border-white/5 cursor-pointer"
            >
              {/* Image and Background */}
              <img
                src={team.image}
                alt={team.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              
              {/* Team Color Accent Line */}
              <div
                className="absolute top-0 left-0 w-full h-1 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-left"
                style={{ backgroundColor: team.color }}
              />

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 p-10 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-title font-bold mb-2 group-hover:text-white transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">
                      {team.fullName}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 block mb-1">Championships</span>
                    <span className="text-3xl font-title">{team.worldChampionships}</span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-widest">Base</span>
                    <span className="text-xs font-bold">{team.base}</span>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-widest">Power Unit</span>
                    <span className="text-xs font-bold">{team.powerUnit}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-10 group-hover:translate-x-0 transition-transform">
                <button className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
