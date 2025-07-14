import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Ética",
      description: "Conduta transparente e responsável em todas as nossas práticas terapêuticas"
    },
    {
      icon: Users,
      title: "Escuta ativa",
      description: "Compreensão profunda das necessidades individuais e organizacionais"
    },
    {
      icon: Shield,
      title: "Acolhimento",
      description: "Ambiente seguro e respeitoso para o desenvolvimento pessoal e profissional"
    },
    {
      icon: Award,
      title: "Profissionalismo",
      description: "Excelência técnica e comprometimento com resultados mensuráveis"
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Colaboradores transformados",
      description: "Vidas impactadas positivamente"
    },
    {
      number: "50+",
      label: "Empresas parceiras",
      description: "Organizações que confiam em nosso trabalho"
    },
    {
      number: "95%",
      label: "Taxa de satisfação",
      description: "Avaliação média dos nossos serviços"
    },
    {
      number: "3",
      label: "Anos de experiência",
      description: "Especialização em bem-estar corporativo"
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-primary">Harmonia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneiros em bem-estar corporativo, transformamos ambientes de trabalho 
            através de terapias integrativas reconhecidas e eficazes.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Levar saúde mental e equilíbrio emocional ao ambiente corporativo 
                por meio de terapias integrativas aceitas, acessíveis e eficazes, 
                promovendo o bem-estar integral dos colaboradores.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência nacional em soluções de bem-estar holístico para 
                empresas, reconhecida pela excelência em resultados e pela 
                transformação positiva dos ambientes corporativos.
              </p>
            </CardContent>
          </Card>

          {/* Values Preview */}
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/30 mb-6">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nosso trabalho é fundamentado na ética, escuta ativa, acolhimento 
                e profissionalismo, garantindo uma abordagem humanizada e eficaz 
                para cada cliente.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Nossos valores fundamentais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-card transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-primary-foreground">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nossos resultados em números
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold mb-2 opacity-90">
                  {achievement.label}
                </div>
                <div className="text-sm opacity-80">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Equipe especializada
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Contamos com profissionais certificados e com experiência comprovada 
            em terapias integrativas aplicadas ao ambiente corporativo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Terapeutas Certificados</h4>
              <p className="text-sm text-muted-foreground">
                Formação reconhecida em suas especialidades
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Experiência Corporativa</h4>
              <p className="text-sm text-muted-foreground">
                Conhecimento específico do ambiente empresarial
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Abordagem Ética</h4>
              <p className="text-sm text-muted-foreground">
                Práticas responsáveis e transparentes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;