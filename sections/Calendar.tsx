
import React from 'react';
import { RACES } from '../constants';

const Calendar: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <header className="mb-20 text-center">
          <h2 className="text-xs font-bold tracking-[0.5em] text-[#ff1801] uppercase mb-4">The World Tour</h2>
          <h1 className="text-5xl md:text-8xl font-title font-bold tracking-tighter uppercase">RACE CALENDAR</h1>
        </header>

        <div className="space-y-4">
          {RACES.map((race, idx) => (
            <div
              key={race.id}
              className="group relative flex flex-col md:flex-row items-center border border-white/5 hover:border-white/20 transition-all duration-300 p-6 md:p-0 overflow-hidden"
            >
              <div className="md:w-1/4 p-10 flex flex-col justify-center items-center text-center">
                <span className="text-[#ff1801] font-title text-5xl font-bold mb-2">{(idx + 1).toString().padStart(2, '0')}</span>
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">{race.date}</span>
              </div>

              <div className="md:w-1/2 p-10 flex flex-col justify-center border-y md:border-y-0 md:border-x border-white/5">
                <div className="flex items-center space-x-4 mb-4">
                  <h3 className="text-3xl font-title font-bold uppercase">{race.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-8 text-sm">
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-widest mb-1">Circuit</span>
                    <span className="font-bold">{race.circuit}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-widest mb-1">Location</span>
                    <span className="font-bold">{race.location}</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/4 relative h-64 md:h-auto overflow-hidden">
                <img
                  src={race.image}
                  alt={race.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center p-10 pointer-events-none">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <button className="px-6 py-3 bg-white text-black text-[10px] font-bold tracking-widest transform -skew-x-12 pointer-events-auto">TICKETS</button>
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

export default Calendar;
