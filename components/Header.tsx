import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import { Logo } from './icons/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScrollTo = (id: string) => {
    const elementId = id.substring(1); // remove '#'
    // For '#home', scroll to top
    if (elementId === 'home' || !elementId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }

  const renderNavLinks = (isMobile: boolean = false) => (
    NAV_LINKS.map((link) => (
       <a 
          key={link.name} 
          onClick={() => handleScrollTo(link.href)} 
          className={`cursor-pointer font-medium transition-all duration-300 flex items-center gap-2 group ${
            isMobile 
              ? 'text-2xl text-gray-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg w-full justify-center' 
              : 'text-sm text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md'
          }`}
        >
          {link.icon}
          <span className="group-hover:text-lime-300 transition-colors duration-300">{link.name}</span>
        </a>
    ))
  );

  return (
    <>
      <header
        id="home"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a onClick={() => handleScrollTo('#home')} className="cursor-pointer flex items-center gap-2 group">
                 <Logo className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-2">
              {renderNavLinks()}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-8">
          <nav className="flex flex-col space-y-6 items-center">
             {renderNavLinks(true)}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;