import React from 'react';
import { Heart, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-3xl font-bold mb-4">Harmonia</div>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Transformando ambientes corporativos através de terapias integrativas 
              reconhecidas e eficazes. Bem-estar que gera resultados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('solucoes')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('beneficios')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Reiki Corporativo</li>
              <li>Meditação Guiada</li>
              <li>Acupuntura</li>
              <li>Aromaterapia</li>
              <li>Consultoria em Bem-estar</li>
              <li>Treinamentos Corporativos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>(11) 3456-7890</p>
                  <p>(11) 98765-4321</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>contato@harmonia.com.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>Av. Paulista, 1000 - Sala 1012</p>
                  <p>Bela Vista, São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <span>© 2024 Harmonia. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>para o seu bem-estar</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs opacity-80">
              Terapias integrativas reconhecidas pelo SUS e baseadas em evidências científicas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;