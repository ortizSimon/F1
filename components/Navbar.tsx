
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#/' },
    { label: 'TEAMS', href: '#/teams' },
    { label: 'DRIVERS', href: '#/drivers' },
    { label: 'CALENDAR', href: '#/calendar' },
    { label: 'SHOP', href: '#/shop' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#ff1801] rounded-sm flex items-center justify-center transform -skew-x-12">
            <span className="font-title font-bold text-white text-xl">A</span>
          </div>
          <span className="font-title text-xl tracking-tighter hidden md:block">APEX F1</span>
        </a>

        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold tracking-widest text-gray-400 hover:text-[#ff1801] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="bg-[#ff1801] px-6 py-2 text-[10px] font-bold tracking-[0.2em] transform -skew-x-12 hover:bg-white hover:text-black transition-all duration-300">
            PADDOCK CLUB
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
