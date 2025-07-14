import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Gerente de RH",
      company: "TechSolutions Ltda",
      content: "Implementamos o programa da Harmonia há 6 meses e os resultados são impressionantes. A redução do absenteísmo foi de 35% e os colaboradores estão visivelmente mais engajados e produtivos.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "CEO",
      company: "InovaCorp",
      content: "As sessões de meditação e reiki transformaram completamente o clima organizacional. Nosso turnover caiu pela metade e a satisfação dos colaboradores aumentou significativamente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Diretora Executiva",
      company: "Crescer Consultoria",
      content: "O programa de bem-estar da Harmonia foi um investimento certeiro. Além dos benefícios para os colaboradores, percebemos um aumento real na produtividade e criatividade das equipes.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Coordenador de Projetos",
      company: "DesignHub",
      content: "Como alguém que sofria com dores nas costas devido ao trabalho, a acupuntura oferecida pela empresa mudou minha vida. Agora trabalho com mais conforto e disposição.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quem já vivenciou, <span className="text-secondary">recomenda</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de gestores e colaboradores que transformaram 
            seus ambientes de trabalho com nossas terapias integrativas.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-card overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg lg:text-xl text-muted-foreground italic mb-8 leading-relaxed">
                  "{testimonials[currentSlide].content}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="text-center">
                  <div className="font-bold text-foreground text-lg mb-1">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-primary font-semibold mb-1">
                    {testimonials[currentSlide].role}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary/20 hover:bg-primary/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary/20 hover:bg-primary/10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Recomendariam</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Renovam contrato</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">6 meses</div>
              <div className="text-sm text-muted-foreground">Tempo médio parceria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;