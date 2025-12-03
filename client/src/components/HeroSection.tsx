import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import capitalinoImg from "../assets/capitalino.png";

export default function HeroSection() {
  const [, setLocation] = useLocation();
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Novo: Aprenda a investir com Ivo</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Seu futuro é um <span className="text-primary">ninho de oportunidades</span>
          </h1>

          <p className="text-lg text-foreground/70 leading-relaxed">
            Aprenda a investir de forma simples, prática e divertida. Com Ivo, seu mentor corujão, você sai do zero ao primeiro investimento real em poucas semanas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2"
              onClick={() => setLocation("/mission")}
            >
              Começar Grátis
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Conhecer Ivo
            </Button>
          </div>

          <div className="flex gap-8 pt-4 text-sm text-foreground/60">
            <div>
              <div className="font-bold text-primary">10K+</div>
              <div>Usuários ativos</div>
            </div>
            <div>
              <div className="font-bold text-primary">4.9★</div>
              <div>Avaliação média</div>
            </div>
            <div>
              <div className="font-bold text-primary">100%</div>
              <div>Gratuito para começar</div>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-3xl"></div>
            
            {/* Main content box */}
            <div className="relative bg-gradient-to-br from-white to-accent/20 rounded-3xl p-8 border border-primary/10 shadow-lg">
              <div className="space-y-6">


                {/* Ivo representation */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center animate-float">
                  <img 
                    src={capitalinoImg} 
                    alt="Ivo" 
                    className="h-64 w-auto"
                  />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Ivo</h3>
                  <p className="text-sm text-foreground/60">Seu mentor investidor</p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">Missões gamificadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">Aprenda de verdade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">Invista com confiança</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
