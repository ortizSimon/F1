
import React from 'react';
import { PRODUCTS } from '../constants';

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <header className="mb-20 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-xs font-bold tracking-[0.5em] text-[#ff1801] uppercase mb-4">Official Gear</h2>
            <h1 className="text-5xl md:text-7xl font-title font-bold tracking-tighter uppercase">APEX STORE</h1>
          </div>
          <div className="flex space-x-4">
            {['All', 'Apparel', 'Collectibles', 'Accessories'].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 text-[10px] font-bold tracking-widest uppercase border border-white/10 hover:border-[#ff1801] hover:text-[#ff1801] transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-zinc-900 border border-white/5 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                  <button className="p-4 bg-white text-black hover:bg-[#ff1801] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-6 left-6">
                   <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase border border-white/10">
                      {product.team}
                   </span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-title font-bold uppercase mb-1 group-hover:text-[#ff1801] transition-colors">{product.name}</h3>
                  <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">{product.category}</p>
                </div>
                <span className="text-xl font-title font-bold text-[#ff1801]">${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
