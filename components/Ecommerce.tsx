
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover object-center group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-white">{product.name}</h3>
      <p className="mt-2 text-sm text-gray-400 h-10">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xl font-semibold text-lime-400">{product.price.toFixed(2)} €</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
          Aggiungi al Carrello
        </button>
      </div>
    </div>
  </div>
);

const Ecommerce: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">E-commerce</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Prodotti e componenti selezionati per la tua casa e i tuoi impianti.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
