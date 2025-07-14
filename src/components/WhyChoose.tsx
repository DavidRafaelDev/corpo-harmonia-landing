import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Users, ShieldCheck } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "ROI comprovado em redução de absenteísmo",
      description: "Empresas parceiras reportam até 40% de redução nas faltas por motivos de saúde e 35% menos licenças médicas relacionadas ao estresse.",
      stats: "40% menos faltas"
    },
    {
      icon: Award,
      title: "Terapias com validação científica e institucional",
      description: "Todas as práticas oferecidas são reconhecidas pelo SUS e possuem base científica comprovada em estudos internacionais.",
      stats: "100% reconhecidas"
    },
    {
      icon: Users,
      title: "Atendimento personalizado para empresas",
      description: "Desenvolvemos programas específicos considerando o perfil dos colaboradores, cultura organizacional e objetivos de cada empresa.",
      stats: "Programas únicos"
    },
    {
      icon: ShieldCheck,
      title: "Profissionais certificados e parceiros especializados",
      description: "Nossa equipe conta com terapeutas certificados e experiência comprovada no ambiente corporativo, garantindo resultados efetivos.",
      stats: "Equipe especializada"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que escolher a <span className="text-primary">Harmonia</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em transformar ambientes corporativos através 
            de terapias integrativas eficazes e cientificamente validadas.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="card-hover bg-gradient-card border-0 shadow-soft group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={28} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {reason.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                        {reason.stats}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-accent rounded-3xl p-12 border border-accent/20">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Resultados que falam por si
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Colaboradores atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Empresas parceiras</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Satisfação geral</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;