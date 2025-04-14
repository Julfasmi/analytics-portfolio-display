
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-ds-navy/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-ds-navy dark:text-ds-lightest">
            <span className="text-ds-teal">D</span>ata<span className="text-ds-teal">S</span>cientist
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a 
              href="#" 
              className="ml-4 px-4 py-2 rounded-md border-2 border-ds-teal text-ds-teal hover:bg-ds-teal hover:bg-opacity-10 transition-all duration-300"
            >
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-ds-navy dark:text-ds-lightest"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-ds-navy p-4 rounded-lg shadow-lg mt-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a 
                href="#about" 
                className="px-3 py-2 text-ds-navy dark:text-ds-light hover:text-ds-teal transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="px-3 py-2 text-ds-navy dark:text-ds-light hover:text-ds-teal transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="px-3 py-2 text-ds-navy dark:text-ds-light hover:text-ds-teal transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="px-3 py-2 text-ds-navy dark:text-ds-light hover:text-ds-teal transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#" 
                className="px-3 py-2 text-ds-teal border-2 border-ds-teal rounded-md text-center hover:bg-ds-teal hover:bg-opacity-10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
