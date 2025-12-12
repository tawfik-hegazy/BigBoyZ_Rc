import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-surface rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] border border-gray-700 animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-primary text-white p-2 rounded-full backdrop-blur-md transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-900 relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 md:h-full object-cover opacity-90"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
           <div className="absolute top-4 left-4 bg-primary text-white text-xs font-black px-3 py-1 uppercase tracking-widest skew-x-[-10deg]">
              <span className="skew-x-[10deg] inline-block">BigBoyZ Exclusive</span>
           </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-surface">
          <div className="mb-6">
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-2 block">{product.category}</span>
            <h2 className="text-3xl md:text-4xl font-display text-white uppercase italic leading-tight">{product.name}</h2>
          </div>

          <div className="flex items-center gap-6 mb-8 border-b border-gray-700 pb-6">
            <span className="text-4xl font-display text-white">${product.price.toFixed(2)}</span>
            {product.inStock ? (
               <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold uppercase tracking-wide rounded-sm">In Stock</span>
            ) : (
               <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wide rounded-sm">Out of Stock</span>
            )}
          </div>

          <div className="prose prose-invert prose-sm text-gray-300 mb-8 font-light">
            <p>{product.description}</p>
          </div>

          <div className="bg-secondary rounded-lg p-6 mb-8 border border-gray-700">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Technical Specs</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-[10px] text-gray-500 uppercase font-black tracking-wider">{key}</dt>
                  <dd className="text-sm font-semibold text-gray-200">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-secondary p-5 rounded-lg border-l-4 border-primary">
             <div className="flex items-start gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                   <p className="text-sm font-bold text-white uppercase tracking-wide mb-1">Available In-Store Only</p>
                   <p className="text-xs text-gray-400">Visit us at 123 Speedway Lane to purchase.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};