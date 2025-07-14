import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 hero-bg opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto fade-in visible">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground mb-6">
            <span className="text-sm font-medium">Terapias reconhecidas pelo SUS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Bem-estar que gera{" "}
            <span className="text-secondary-light">resultados</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme o ambiente da sua empresa com terapias integrativas 
            reconhecidas e personalizadas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('solucoes')}
              size="lg"
              className="btn-hero text-lg px-8 py-6 group"
            >
              Quero conhecer a proposta
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('sobre')}
              size="lg"
              variant="outline"
              className="btn-outline-hero text-lg px-8 py-6 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              <Play className="mr-2 h-5 w-5" />
              Saiba mais
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">95%</div>
              <div className="text-sm text-primary-foreground/80">Redução de estresse</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">80%</div>
              <div className="text-sm text-primary-foreground/80">Menos absenteísmo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">90%</div>
              <div className="text-sm text-primary-foreground/80">Maior produtividade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">85%</div>
              <div className="text-sm text-primary-foreground/80">Satisfação dos colaboradores</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;