import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingDown, TrendingUp, Users, Heart } from "lucide-react";

const Benefits = () => {
  const comparisons = [
    {
      before: {
        icon: TrendingDown,
        title: "Alto nível de estresse",
        description: "Colaboradores sobrecarregados, burnout frequente e ambiente tenso",
        color: "text-red-500"
      },
      after: {
        icon: TrendingUp,
        title: "Aumento de produtividade",
        description: "Equipes mais focadas, criativas e engajadas com resultados superiores",
        color: "text-secondary"
      }
    },
    {
      before: {
        icon: TrendingDown,
        title: "Absenteísmo elevado",
        description: "Muitas faltas por motivos de saúde e licenças médicas constantes",
        color: "text-red-500"
      },
      after: {
        icon: Users,
        title: "Mais engajamento",
        description: "Colaboradores presentes, motivados e comprometidos com objetivos",
        color: "text-secondary"
      }
    },
    {
      before: {
        icon: TrendingDown,
        title: "Clima organizacional tóxico",
        description: "Conflitos frequentes, comunicação ruim e alta rotatividade",
        color: "text-red-500"
      },
      after: {
        icon: Heart,
        title: "Ambiente equilibrado",
        description: "Relações saudáveis, comunicação empática e retenção de talentos",
        color: "text-secondary"
      }
    }
  ];

  const additionalBenefits = [
    "Redução de 40% nos custos com planos de saúde",
    "Diminuição de 35% no turnover",
    "Aumento de 25% na satisfação dos colaboradores",
    "Melhoria de 30% na qualidade do trabalho",
    "Redução de 50% em conflitos internos",
    "Aumento de 20% na criatividade e inovação"
  ];

  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Benefícios para sua <span className="text-primary">empresa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja a transformação real que acontece quando o bem-estar se torna 
            prioridade no ambiente corporativo.
          </p>
        </div>

        {/* Before/After Comparisons */}
        <div className="space-y-12 mb-20">
          {comparisons.map((comparison, index) => {
            const BeforeIcon = comparison.before.icon;
            const AfterIcon = comparison.after.icon;
            
            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Before Card */}
                <Card className="bg-red-50 border-red-100 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                          <BeforeIcon className={`w-6 h-6 ${comparison.before.color}`} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">
                          {comparison.before.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {comparison.before.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>

                {/* After Card */}
                <Card className="bg-secondary/5 border-secondary/20 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20">
                          <AfterIcon className={`w-6 h-6 ${comparison.after.color}`} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">
                          {comparison.after.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {comparison.after.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits Grid */}
        <div className="bg-gradient-accent rounded-3xl p-8 lg:p-12 border border-accent/20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Resultados mensuráveis em números
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-primary-foreground shadow-glow overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold mb-4">
                ROI médio de 300% em 12 meses
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Para cada R$ 1 investido em bem-estar corporativo, as empresas 
                economizam R$ 3 em custos com saúde, turnover e produtividade.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">R$ 1</div>
                  <div className="text-sm opacity-80">Investimento</div>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm opacity-80">Resulta em</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">R$ 3</div>
                  <div className="text-sm opacity-80">Economia</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;