
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Assistant from './components/Assistant';
import Home from './sections/Home';
import Teams from './sections/Teams';
import Drivers from './sections/Drivers';
import Calendar from './sections/Calendar';
import Shop from './sections/Shop';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center overflow-hidden">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-2 border-white/10 rounded-full"></div>
          <div className="absolute inset-0 w-24 h-24 border-t-2 border-[#ff1801] rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-title font-bold text-[#ff1801]">F1</span>
          </div>
        </div>
        <div className="space-y-4 text-center">
           <h1 className="font-title text-xl tracking-[0.5em] text-white">IGNITING ENGINES</h1>
           <div className="flex space-x-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-6 bg-[#ff1801] animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
           </div>
        </div>
        {/* Decorative backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-20 pointer-events-none">
           <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,24,1,0.2)_0%,transparent_50%)]"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Assistant />
        
        <footer className="bg-[#0a0a0a] border-t border-white/5 py-20 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-[#ff1801] rounded-sm flex items-center justify-center transform -skew-x-12">
                  <span className="font-title font-bold text-white text-xl">A</span>
                </div>
                <span className="font-title text-xl tracking-tighter">APEX F1</span>
              </div>
              <p className="text-gray-500 max-w-sm text-sm">
                The ultimate digital destination for the high-octane world of Formula 1. Exclusive content, precision statistics, and official merchandise.
              </p>
              <div className="flex space-x-6">
                {['TW', 'IG', 'YT', 'FB'].map(social => (
                  <a key={social} href="#" className="text-xs font-bold tracking-widest text-gray-400 hover:text-[#ff1801] transition-colors">{social}</a>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-title text-[10px] font-bold tracking-[0.3em] text-white uppercase">Sitemap</h4>
              <ul className="space-y-4 text-xs font-bold text-gray-500">
                <li><a href="#/" className="hover:text-white transition-colors">HOME</a></li>
                <li><a href="#/teams" className="hover:text-white transition-colors">TEAMS</a></li>
                <li><a href="#/drivers" className="hover:text-white transition-colors">DRIVERS</a></li>
                <li><a href="#/calendar" className="hover:text-white transition-colors">CALENDAR</a></li>
              </ul>
            </div>

            <div className="space-y-6 text-right">
              <h4 className="font-title text-[10px] font-bold tracking-[0.3em] text-white uppercase">Subscribe</h4>
              <p className="text-xs text-gray-500">Stay up to speed with the latest news.</p>
              <div className="flex justify-end">
                <div className="flex bg-white/5 border border-white/10 p-1 w-full max-w-xs transform -skew-x-12">
                  <input type="email" placeholder="EMAIL" className="bg-transparent px-4 py-2 text-[10px] w-full focus:outline-none" />
                  <button className="bg-[#ff1801] text-white px-4 py-2 text-[10px] font-bold">JOIN</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">© 2024 APEX RACING HUB. ALL RIGHTS RESERVED.</span>
            <div className="flex space-x-10 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
              <a href="#" className="hover:text-white transition-colors">COOKIE SETTINGS</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
