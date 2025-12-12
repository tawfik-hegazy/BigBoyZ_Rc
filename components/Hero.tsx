import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] bg-secondary overflow-hidden flex items-center">
      {/* Background Image with advanced overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=2070&auto=format&fit=crop" 
          alt="RC Action" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
            Est. 2024
          </div>
          <h2 className="text-6xl md:text-8xl font-display text-white mb-2 italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
            Big<span className="text-primary">BoyZ</span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase italic tracking-wide">
            Rc Garage
          </h3>
          <p className="text-lg text-gray-400 mb-8 font-light border-l-4 border-primary pl-6 leading-relaxed max-w-xl">
            The premier destination for serious RC enthusiasts. 
            High-performance machines, precision parts, and expert advice. 
            <span className="block mt-2 text-white font-semibold">Dominate the track. Rule the water.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#catalog" className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-10 rounded-sm transition-all transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] uppercase tracking-wider skew-x-[-10deg]">
              <span className="skew-x-[10deg] inline-block">View Inventory</span>
            </a>
             <a href="#location" className="bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-wider skew-x-[-10deg]">
              <span className="skew-x-[10deg] inline-block">Visit Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};