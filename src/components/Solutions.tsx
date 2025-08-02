import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Brain, Target, Flower } from "lucide-react";
import reikiImage from "/lovable-uploads/d1f7eb15-6c6f-4b45-9803-0f51830805b9.png";
import meditationImage from "/lovable-uploads/59410714-3f6c-485f-81d6-5aecd0b7abc7.png";
import acupunctureImage from "/lovable-uploads/1f26f7e2-5499-450d-aed0-91fb78276d3f.png";
import aromatherapyImage from "/lovable-uploads/c1d0fb35-6462-4398-b827-06562f94c03a.png";

const Solutions = () => {
  const solutions = [
    {
      title: "Reiki",
      description: "Alívio de estresse e equilíbrio energético",
      details: "Técnica japonesa de cura energética que promove o relaxamento profundo e reduz significativamente os níveis de estresse corporativo.",
      icon: Sparkles,
      image: reikiImage,
      benefits: ["Reduz ansiedade", "Melhora o sono", "Aumenta a energia"]
    },
    {
      title: "Meditação Guiada",
      description: "Clareza mental, foco e produtividade",
      details: "Sessões estruturadas que desenvolvem a concentração e mindfulness, resultando em maior produtividade e bem-estar mental.",
      icon: Brain,
      image: meditationImage,
      benefits: ["Melhora o foco", "Reduz burnout", "Aumenta criatividade"]
    },
    {
      title: "EFT (Emotional Freedom Techniques)",
      description: "Redução a ansiedade e melhora a concentração",
      details: "A EFT, também conhecida como tapping, é uma técnica que estimula pontos de acupressão no corpo",
      icon: Target,
      image: acupunctureImage,
      benefits: ["Reduz estresse", "Reduz Ansiedade", "Melhora o foco"]
    },
    {
      title: "Aromaterapia",
      description: "Criação de ambiente harmonioso e produtivo",
      details: "Uso terapêutico de óleos essenciais para criar ambientes de trabalho mais agradáveis e propícios à concentração.",
      icon: Flower,
      image: aromatherapyImage,
      benefits: ["Melhora o humor", "Reduz estresse", "Aumenta bem-estar"]
    }
  ];

  return (
    <section id="solucoes" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossas terapias para empresas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Soluções integradas de bem-estar que transformam o ambiente corporativo 
            e potencializam o desempenho das equipes.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary">
            <span className="text-sm font-medium">As práticas são reconhecidas pelo SUS e adaptadas à cultura da sua empresa.</span>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="card-hover bg-gradient-card border-0 shadow-soft overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                      <IconComponent size={24} />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {solution.description}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.details}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Implementação personalizada para sua empresa
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada programa é desenvolvido considerando a cultura organizacional, 
              horários de trabalho e necessidades específicas dos colaboradores.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                Sessões no local de trabalho
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                Horários flexíveis
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                Profissionais certificados
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                Relatórios de progresso
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;