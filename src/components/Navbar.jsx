import React, { useState, useEffect } from 'react';
import { Drama, Menu, X, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Perfil', href: '#perfil' },
    { name: 'Obras', href: '#obras' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Reconocimientos', href: '#premios' },
    { name: 'Talleres', href: '#talleres' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0908]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-3 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 text-decoration-none group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#991b1b] to-[#f59e0b] p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-[#0a0908] rounded-full flex items-center justify-center">
              <Drama className="w-5 h-5 text-[#f59e0b]" />
            </div>
          </div>
          <div>
            <span className="font-serif text-2xl font-bold text-[#f5f5f4] tracking-wide block leading-none">
              Fher Roldán
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#a8a29e] block font-sans mt-0.5">
              Teatro & Dramaturgia
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#d6d3d1] hover:text-[#f59e0b] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#f59e0b] hover:after:w-full after:transition-all text-decoration-none"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="hidden lg:block">
          <a href="#contacto" className="btn btn-primary text-xs uppercase tracking-wider px-5 py-2.5">
            <Mail className="w-4 h-4" /> Contratación / Talleres
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#f5f5f4] hover:text-[#f59e0b] focus:outline-none p-2"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141210] border-b border-[#f59e0b]/20 px-6 py-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#f5f5f4] hover:text-[#f59e0b] text-decoration-none border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary w-full text-center mt-2"
            >
              Contratación / Talleres
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
