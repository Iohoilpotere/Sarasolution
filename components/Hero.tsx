
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center -mt-20">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
          src="https://videos.pexels.com/video-files/7578540/7578540-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-tight">
          Costruiamo il{' '}
          <span className="text-lime-400">Futuro</span>. <br />
          Innoviamo il{' '}
          <span className="text-blue-500">Presente</span>.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          Dalla progettazione alla realizzazione, Sarasolutions è il tuo partner di fiducia per servizi di impiantistica, edilizia e soluzioni energetiche avanzate.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-lime-500 text-gray-900 px-8 py-3 rounded-md text-lg font-bold hover:bg-lime-400 transition-all duration-300 transform hover:scale-105"
          >
            Contattaci Ora
          </a>
          <a href="#services"
             className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Scopri i Servizi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
