import React from 'react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-secondary/95 backdrop-blur-md sticky top-0 z-40 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
            {/* Logo Icon Style */}
            <div className="relative h-10 w-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary skew-x-[-10deg] rounded-sm group-hover:shadow-[0_0_10px_rgba(220,38,38,0.6)] transition-shadow"></div>
              <span className="relative z-10 font-display text-white text-lg italic">B</span>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-2xl font-display tracking-wider uppercase text-white italic leading-none">
                BigBoyZ <span className="text-primary">Rc</span>
              </h1>
            </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input 
            type="text" 
            placeholder="Search the garage..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface text-gray-200 rounded-lg py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-primary border border-gray-700 placeholder-gray-500 transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute right-3 top-3 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>

        {/* Simple Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="text-gray-400 hover:text-white hover:text-shadow transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#catalog" className="text-gray-400 hover:text-white transition-colors relative group">
            Inventory
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#location" className="text-gray-400 hover:text-white transition-colors relative group">
            Shop Info
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        </nav>
      </div>
      {/* Decorative red line */}
      <div className="h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
    </header>
  );
};