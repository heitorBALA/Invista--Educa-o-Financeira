import { Card } from "@/components/ui/card";
import { BookOpen, Zap, TrendingUp, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: BookOpen,
      title: "Aprenda com Ivo",
      description: "Missões simples e práticas que explicam conceitos financeiros sem jargões complexos.",
    },
    {
      icon: Zap,
      title: "Ganhe XP e Badges",
      description: "Cada progresso é recompensado. Suba de nível e desbloqueie novos conteúdos.",
    },
    {
      icon: TrendingUp,
      title: "Invista de Verdade",
      description: "Guias passo a passo para abrir conta e fazer seu primeiro investimento real.",
    },
    {
      icon: Award,
      title: "Acompanhe seu Progresso",
      description: "Veja seu portfólio crescer e celebre cada vitória com a comunidade.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-gradient-to-b from-white to-accent/5">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Como Funciona
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Quatro passos simples para começar sua jornada como investidor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg bg-white"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground">
                    <Icon size={24} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <span>Passo {index + 1}</span>
                    <div className="flex-1 h-0.5 bg-primary/20"></div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
