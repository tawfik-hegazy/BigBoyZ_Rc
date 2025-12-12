import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ChatAssistant } from './components/ChatAssistant';
import { Category, Product } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="catalog" className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 border-b border-gray-800 pb-6">
            <div>
               <h2 className="text-4xl font-display text-white tracking-wider uppercase">Our <span className="text-primary">Inventory</span></h2>
               <p className="text-gray-400 mt-2">Browse the best gear in the industry.</p>
            </div>
            
            {/* Category Filter */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-3 w-full md:w-auto scrollbar-hide">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-5 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                    : 'bg-surface text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                All
              </button>
              {Object.values(Category).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                      : 'bg-surface text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;