import React, { useState } from 'react';
import { Product } from '../types';
import { ProductModal } from './ProductModal';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (products.length === 0) {
    return (
      <div className="text-center py-24 bg-surface rounded-lg border border-gray-800">
        <p className="text-gray-400 text-xl font-display tracking-wide">No gear found matching your criteria.</p>
        <button className="mt-4 text-primary hover:text-red-400 underline">Clear Filters</button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            onClick={() => setSelectedProduct(product)}
            className="group bg-surface rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-gray-800 hover:border-primary/50 overflow-hidden flex flex-col cursor-pointer relative"
          >
            {/* Status Badges */}
            <div className="absolute top-3 left-3 z-10">
               {product.inStock ? (
                 <span className="bg-green-500/90 text-white text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-wider backdrop-blur-sm shadow-sm">In Stock</span>
               ) : (
                 <span className="bg-red-600/90 text-white text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-wider backdrop-blur-sm shadow-sm">Sold Out</span>
               )}
            </div>

            <div className="relative h-56 overflow-hidden bg-gray-900">
               <img 
                 src={product.image} 
                 alt={product.name}
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow relative">
              <div className="absolute -top-6 right-4 bg-primary text-white font-display text-lg px-3 py-1 rounded-sm shadow-lg skew-x-[-10deg]">
                 <span className="skew-x-[10deg] inline-block">${product.price.toFixed(0)}</span>
              </div>

              <span className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">{product.category}</span>
              <h3 className="text-xl font-display text-white mb-2 leading-tight group-hover:text-primary transition-colors italic">{product.name}</h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-grow font-light border-l-2 border-gray-700 pl-3">{product.description}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
                 <span className="text-xs text-gray-500 uppercase font-semibold">View Specs</span>
                 <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  );
};