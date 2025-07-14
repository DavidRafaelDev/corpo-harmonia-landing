import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary">
              Harmonia
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('solucoes')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('contato')}
              className="btn-hero"
            >
              Agende uma conversa gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection('solucoes')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('beneficios')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection('contato')}
                  className="w-full btn-hero"
                >
                  Agende uma conversa gratuita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;