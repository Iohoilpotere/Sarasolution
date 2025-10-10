
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection'; // New import
import logo from './assets/logo-saras.png';

// Page enum and page state are removed for a single-page layout.

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 font-sans antialiased">
      <Header />
      <main className="pt-20"> {/* Padding top to avoid content being hidden by fixed header */}
        <Hero />
        <ServicesSection />
        <ContactSection /> {/* New Section */}
      </main>
      <Footer />
    </div>
    <img src={logo} alt="SARAS" className="h-12 inline-block align-middle" />
  );
};

export default App;
