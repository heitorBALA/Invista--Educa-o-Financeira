import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, BookOpen } from "lucide-react";

interface RecommendationsProps {
  xp?: number;
  completedMissions?: number;
}

export default function Recommendations({ xp = 0, completedMissions = 0 }: RecommendationsProps) {
  // Recomendações pré-definidas baseadas no progresso
  const getRecommendations = () => {
    const recommendations = [];

    // Recomendação 1: Sempre disponível
    recommendations.push({
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Comece com a Missão 1: O Ninho",
      description: "Aprenda os fundamentos de finanças pessoais e entenda seu fluxo de caixa.",
      action: "Iniciar Missão",
      color: "bg-primary/10 border-primary/20",
    });

    // Recomendação 2: Após 50 XP
    if (xp >= 50) {
      recommendations.push({
        icon: <TrendingUp className="w-6 h-6 text-green-600" />,
        title: "Próximo Passo: Renda Fixa",
        description: "Você está pronto para aprender sobre investimentos em renda fixa. Tesouro Direto, CDB e muito mais!",
        action: "Ver Missão 2",
        color: "bg-green-50 border-green-200",
      });
    }

    // Recomendação 3: Após 100 XP
    if (xp >= 100) {
      recommendations.push({
        icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
        title: "Dica Especial: Diversificação",
        description: "Não coloque todos os ovos na mesma cesta! Aprenda como diversificar seus investimentos.",
        action: "Ler Artigo",
        color: "bg-yellow-50 border-yellow-200",
      });
    }

    // Recomendação 4: Após 150 XP
    if (xp >= 150) {
      recommendations.push({
        icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
        title: "Avançado: Renda Variável",
        description: "Você já domina o básico! Agora é hora de explorar ações, ETFs e outras opções de renda variável.",
        action: "Ver Missão 3",
        color: "bg-blue-50 border-blue-200",
      });
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold text-foreground">Recomendações para Você</h2>
          <p className="text-foreground/60">Baseado no seu progresso, aqui estão as próximas etapas sugeridas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec, idx) => (
            <Card key={idx} className={`p-6 border-2 ${rec.color} space-y-4`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{rec.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg">{rec.title}</h3>
                  <p className="text-sm text-foreground/70 mt-1">{rec.description}</p>
                </div>
              </div>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                {rec.action}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
