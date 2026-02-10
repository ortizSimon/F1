
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Cinematic Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552033039-4467367c0068?auto=format&fit=crop&q=80&w=2000"
          alt="F1 Background"
          className="w-full h-full object-cover scale-110 blur-[2px] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 h-screen flex flex-col justify-center">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-3 px-3 py-1 bg-[#ff1801]/10 border border-[#ff1801]/30 rounded-full">
            <span className="w-2 h-2 bg-[#ff1801] rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-widest text-[#ff1801]">NEXT RACE: MONACO GP - 04D 12H 45M</span>
          </div>

          <h1 className="text-6xl md:text-[120px] font-title font-bold leading-none tracking-tighter drop-shadow-2xl">
            SPEED IS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1801] to-white">EVERYTHING.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Experience the absolute pinnacle of motorsport. Engineering perfection, superhuman reflexes, and the relentless pursuit of one thousandth of a second.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-10">
            <button className="px-10 py-5 bg-[#ff1801] text-white font-bold tracking-[0.2em] text-xs transform -skew-x-12 hover:scale-105 transition-transform">
              EXPLORE THE GRID
            </button>
            <button className="px-10 py-5 border border-white/20 text-white font-bold tracking-[0.2em] text-xs transform -skew-x-12 hover:bg-white hover:text-black transition-all">
              WATCH LIVE
            </button>
          </div>
        </div>
      </div>

      {/* Kinetic Elements */}
      <div className="absolute bottom-10 right-10 z-10 hidden xl:block">
        <div className="flex items-end space-x-10">
          <div className="text-right">
            <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Top Speed</div>
            <div className="text-4xl font-title">352 <span className="text-sm text-[#ff1801]">KM/H</span></div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">G-Force</div>
            <div className="text-4xl font-title">5.8 <span className="text-sm text-[#ff1801]">G</span></div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Braking Power</div>
            <div className="text-4xl font-title">250 <span className="text-sm text-[#ff1801]">BAR</span></div>
          </div>
        </div>
      </div>

      {/* Background kinetic lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#ff1801]/20 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 400 + 100}px`,
              opacity: Math.random(),
              animation: `kineticMove ${Math.random() * 5 + 3}s linear infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes kineticMove {
          0% { transform: translateX(-100%) skew(-45deg); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateX(200%) skew(-45deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;
