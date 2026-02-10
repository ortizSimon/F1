
import React from 'react';
import { DRIVERS } from '../constants';

const Drivers: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <header className="mb-20 flex justify-between items-end">
          <div>
            <h2 className="text-xs font-bold tracking-[0.5em] text-[#ff1801] uppercase mb-4">Elite Athletes</h2>
            <h1 className="text-5xl md:text-7xl font-title font-bold leading-none tracking-tighter uppercase">WORLD CLASS DRIVERS</h1>
          </div>
          <div className="hidden lg:block">
            <div className="flex space-x-4">
               <button className="p-4 border border-white/10 hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
               </button>
               <button className="p-4 border border-white/10 hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
               </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DRIVERS.map((driver) => (
            <div
              key={driver.id}
              className="group relative bg-[#111] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#ff1801]/30"
            >
              <div className="absolute top-4 left-4 z-20">
                <span className="text-7xl font-title font-black text-white/5 transition-colors group-hover:text-[#ff1801]/10">#{driver.number}</span>
              </div>
              
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform scale-110 group-hover:scale-100"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-1 h-12 bg-[#ff1801]" />
                  <div>
                    <h3 className="text-2xl font-title font-bold leading-none">{driver.name.split(' ')[0]}<br/>{driver.name.split(' ')[1]}</h3>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-[#ff1801] uppercase mt-1">{driver.team}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <div className="text-center">
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-widest">Wins</span>
                    <span className="text-lg font-title">{driver.wins}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-widest">Points</span>
                    <span className="text-lg font-title">{driver.points}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-widest">Podiums</span>
                    <span className="text-lg font-title">{driver.podiums}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drivers;
