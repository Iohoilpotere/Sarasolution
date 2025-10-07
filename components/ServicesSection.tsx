import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-blue-500 tracking-wider uppercase">I Nostri Servizi</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soluzioni Complete per Ogni Esigenza
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Offriamo una vasta gamma di servizi specializzati, garantendo sempre la massima qualità, efficienza e innovazione.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 p-8 rounded-lg border border-transparent hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white group-hover:bg-lime-400 group-hover:text-gray-900 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="mt-4 text-base text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;