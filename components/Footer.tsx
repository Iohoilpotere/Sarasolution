
import React from 'react';

const Footer: React.FC = () => {
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'home' || !id) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
  return (
    <footer className="bg-black/50 border-t border-blue-500/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-lime-400 tracking-tighter">SARASOLUTIONS</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Impresa di costruzioni e impiantistica. La soluzione completa per la tua casa e la tua azienda.
            </p>
             <p className="mt-4 text-gray-500 text-xs">
              Sarasolutions S.r.l. <br />
              P.IVA 1234567890 <br />
              Sede Legale: Via Roma 1, 00100 Roma, IT
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white tracking-wider">Link Utili</h4>
            <ul className="mt-4 space-y-2">
              <li><a onClick={() => handleScrollTo('home')} className="cursor-pointer text-gray-400 hover:text-lime-400 text-sm transition-colors">Home</a></li>
              <li><a onClick={() => handleScrollTo('services')} className="cursor-pointer text-gray-400 hover:text-lime-400 text-sm transition-colors">Servizi</a></li>
              <li><a onClick={() => handleScrollTo('contact')} className="cursor-pointer text-gray-400 hover:text-lime-400 text-sm transition-colors">Contatti</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-400 text-sm transition-colors">Lavora con noi</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white tracking-wider">Settori</h4>
            <ul className="mt-4 space-y-2">
              <li><a onClick={() => handleScrollTo('services')} className="cursor-pointer text-gray-400 hover:text-lime-400 text-sm transition-colors">Impiantistica</a></li>
              <li><a onClick={() => handleScrollTo('services')} className="cursor-pointer text-gray-400 hover:text-lime-400 text-sm transition-colors">Edilizia</a></li>
              <li><a onClick={() => handleScrollTo('services')} className="cursor-pointer text-gray-400 hover:text-lime-400 text-sm transition-colors">Energie Rinnovabili</a></li>
              <li><a onClick={() => handleScrollTo('services')} className="cursor-pointer text-gray-400 hover:text-lime-400 text-sm transition-colors">Immobiliare</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold text-white tracking-wider">Contatti</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400 text-sm">info@saras.land</li>
              <li className="text-gray-400 text-sm">+39 012 345 6789</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sarasolutions S.r.l. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
