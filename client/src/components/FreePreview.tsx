import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Zap, Award, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function FreePreview() {
  const [, setLocation] = useLocation();
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-accent/5 to-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Prévia Gratuita
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comece agora sem pagar nada. Explore a primeira missão e veja se o Invistaí é para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                O que você vai aprender na Missão 1
              </h3>
              <p className="text-foreground/70">
                "O Ninho: Onde está o seu dinheiro?" é a porta de entrada para o mundo dos investimentos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Entendendo seu fluxo de caixa</h4>
                  <p className="text-sm text-foreground/60">Aprenda a categorizar suas receitas e despesas de forma simples.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">A importância de poupar</h4>
                  <p className="text-sm text-foreground/60">Descubra por que economizar é o primeiro passo para investir.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Seus objetivos financeiros</h4>
                  <p className="text-sm text-foreground/60">Defina seus objetivos de curto, médio e longo prazo.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quiz interativo</h4>
                  <p className="text-sm text-foreground/60">Teste seus conhecimentos e ganhe XP para sua primeira badge.</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => setLocation("/mission")}
            >
              Começar Missão 1 Grátis
            </Button>
          </div>

          {/* Right: Visual */}
          <div className="space-y-4">
            <Card className="p-6 bg-gradient-to-br from-white to-accent/20 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-foreground">Seu Progresso</h4>
                  <span className="text-sm text-primary font-semibold">100 XP</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
                <p className="text-sm text-foreground/60">Missão 1 completa!</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-accent/20 border-primary/20">
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Badges Conquistadas</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎖️</div>
                    <p className="text-xs text-foreground/60">Iniciante</p>
                  </div>
                  <div className="text-center opacity-50">
                    <div className="text-3xl mb-2">🏆</div>
                    <p className="text-xs text-foreground/60">Bloqueada</p>
                  </div>
                  <div className="text-center opacity-50">
                    <div className="text-3xl mb-2">💰</div>
                    <p className="text-xs text-foreground/60">Bloqueada</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-accent/20 border-primary/20">
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">Próximas Missões</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span className="text-foreground/70">Construindo o Alvo (Nível 2)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span className="text-foreground/70">Decifrando o Mercado (Nível 3)</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground">
              <BookOpen size={24} />
            </div>
            <h4 className="font-semibold text-foreground">Conteúdo Prático</h4>
            <p className="text-sm text-foreground/60">Sem jargões, apenas conceitos reais e aplicáveis.</p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground">
              <Zap size={24} />
            </div>
            <h4 className="font-semibold text-foreground">Gamificação</h4>
            <p className="text-sm text-foreground/60">Ganhe XP, desbloqueie badges e suba no ranking.</p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground">
              <Award size={24} />
            </div>
            <h4 className="font-semibold text-foreground">Certificados</h4>
            <p className="text-sm text-foreground/60">Receba certificados ao completar cada nível.</p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground">
              <Users size={24} />
            </div>
            <h4 className="font-semibold text-foreground">Comunidade</h4>
            <p className="text-sm text-foreground/60">Conecte com outros iniciantes e especialistas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
