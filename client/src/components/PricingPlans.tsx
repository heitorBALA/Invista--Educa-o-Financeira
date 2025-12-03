import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingPlans() {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "para sempre",
      description: "Perfeito para explorar o conceito",
      features: [
        "Nível 1 completo (3 missões)",
        "Gamificação básica",
        "Comunidade básica",
        "Suporte por email",
        "Conhecer Ivo",
      ],
      cta: "Começar Grátis",
      highlighted: false,
    },
    {
      name: "Iniciante",
      price: "R$ 29,90",
      period: "/mês",
      description: "Para quem quer aprender Renda Fixa",
      features: [
        "Níveis 1 e 2 (15 missões)",
        "Gamificação completa",
        "Comunidade Premium",
        "Suporte prioritário",
        "Certificado de conclusão",
        "Dicas semanais do Ivo",
      ],
      cta: "Escolher Plano",
      highlighted: false,
    },
    {
      name: "Investidor",
      price: "R$ 59,90",
      period: "/mês",
      description: "Para dominar o mercado",
      features: [
        "Níveis 1, 2 e 3 (30 missões)",
        "Desafios exclusivos",
        "Comunidade VIP",
        "Suporte 24/7",
        "2 webinars mensais",
        "Análise de portfólio",
        "Ferramentas avançadas",
      ],
      cta: "Escolher Plano",
      highlighted: true,
    },
    {
      name: "Elite",
      price: "R$ 79,90",
      period: "/mês",
      description: "Para otimizar sua carteira",
      features: [
        "Todos os níveis + conteúdo exclusivo",
        "Mentoria 1:1 mensal",
        "Comunidade Elite",
        "Suporte VIP 24/7",
        "4 webinars mensais",
        "Ferramentas de análise premium",
        "Certificação profissional",
      ],
      cta: "Escolher Plano",
      highlighted: false,
    },
  ];

  return (
    <section id="planos" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Planos de Preços
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Escolha o plano perfeito para sua jornada de investidor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col p-6 transition-all ${
                plan.highlighted
                  ? "border-2 border-primary bg-gradient-to-b from-white to-accent/10 shadow-xl scale-105 md:scale-100"
                  : "border border-border hover:border-primary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-sm text-foreground/60">{plan.period}</div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className={`w-full mt-6 ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border border-primary text-primary hover:bg-primary/5"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-primary/20 text-center">
          <p className="text-foreground/70">
            Todos os planos incluem acesso à comunidade, suporte e atualizações contínuas.
            <br />
            <span className="text-primary font-semibold">Cancele a qualquer momento.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
