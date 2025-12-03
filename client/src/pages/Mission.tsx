import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, CheckCircle, Award, Zap } from "lucide-react";
import { useLocation } from "wouter";
import capitalinoImg from "../assets/capitalino.png";

export default function Mission() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [xp, setXp] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [missionComplete, setMissionComplete] = useState(false);

  const missionContent = [
    {
      type: "intro",
      title: "Bem-vindo à Missão 1: O Ninho",
      subtitle: "Onde está o seu dinheiro?",
      content: "Nesta missão, você aprenderá os fundamentos de finanças pessoais e descobrirá por que entender seu fluxo de caixa é o primeiro passo para começar a investir.",
      mentor: "Com Ivo, seu futuro é um ninho de oportunidades!",
    },
    {
      type: "lesson",
      title: "Lição 1: Entendendo seu Fluxo de Caixa",
      videoUrl: "https://www.youtube.com/embed/Mq97i5qi93c",
      content: "Fluxo de caixa é simplesmente o dinheiro que entra (receitas) e o dinheiro que sai (despesas) da sua vida. Para começar a investir, você precisa primeiro entender para onde seu dinheiro está indo.",
      details: [
        "Receitas: Salário, freelances, vendas, aluguéis",
        "Despesas Fixas: Aluguel, internet, seguros",
        "Despesas Variáveis: Alimentação, lazer, compras",
        "Diferença: Receita - Despesas = Sobra para investir",
      ],
      mentor: "Pense no seu fluxo de caixa como um rio. Você precisa saber quanto entra e quanto sai para descobrir se há água sobrando para irrigar seu ninho! 💧",
    },
    {
      type: "lesson",
      title: "Lição 2: A Importância de Poupar",
      videoUrl: "https://www.youtube.com/embed/GjLQnuREjlY",
      content: "Poupar é guardar uma parte do seu dinheiro para o futuro. Mas não é apenas guardar embaixo do colchão - é investir esse dinheiro para que ele cresça!",
      details: [
        "Regra dos 50/30/20: 50% necessidades, 30% desejos, 20% poupança",
        "Comece pequeno: Até 5-10% do seu salário já faz diferença",
        "Automatize: Configure transferências automáticas para sua conta de poupança",
        "Objetivo claro: Saber para que você está poupando motiva mais",
      ],
      mentor: "Ivo diz: Cada real poupado hoje é um real que trabalha para você amanhã! 💰",
    },
    {
      type: "lesson",
      title: "Lição 3: Definindo Seus Objetivos Financeiros",
      videoUrl: "https://www.youtube.com/embed/-Qb9egLMRYU",
      content: "Objetivos financeiros claros são como um mapa do tesouro. Eles te guiam e te motivam a tomar as melhores decisões com seu dinheiro.",
      details: [
        "Curto Prazo (0-1 ano): Fundo de emergência, viagem, eletrônico",
        "Médio Prazo (1-5 anos): Carro, educação, mudança",
        "Longo Prazo (5+ anos): Aposentadoria, casa, liberdade financeira",
        "SMART: Específico, Mensurável, Alcançável, Relevante, com Tempo",
      ],
      mentor: "Defina seus objetivos como se estivesse construindo um ninho confortável. Cada objetivo é um galho que você adiciona! 🏠",
    },
    {
      type: "quiz",
      title: "Quiz: Teste Seus Conhecimentos",
      questions: [
        {
          question: "Qual é a fórmula básica do fluxo de caixa?",
          options: [
            "Receita - Despesas = Sobra",
            "Receita + Despesas = Total",
            "Despesas - Receita = Lucro",
            "Receita × Despesas = Fluxo",
          ],
          correct: 0,
          explanation: "Correto! Fluxo de caixa = Receita - Despesas. A sobra é o que você pode investir.",
        },
        {
          question: "Qual é a regra recomendada para distribuir seu dinheiro?",
          options: [
            "100% em investimentos",
            "50% necessidades, 30% desejos, 20% poupança",
            "70% gastos, 30% poupança",
            "Não há regra, depende de cada um",
          ],
          correct: 1,
          explanation: "Excelente! A regra 50/30/20 é um bom ponto de partida para organizar suas finanças.",
        },
        {
          question: "Qual é o primeiro passo para começar a investir?",
          options: [
            "Comprar ações imediatamente",
            "Abrir uma conta em corretora",
            "Entender seu fluxo de caixa e ter uma sobra",
            "Pedir dinheiro emprestado",
          ],
          correct: 2,
          explanation: "Perfeito! Você precisa entender seu dinheiro antes de investir. Sem sobra, não há como investir.",
        },
        {
          question: "Qual é a melhor forma de começar a poupar?",
          options: [
            "Guardar o máximo possível de uma vez",
            "Começar pequeno e automatizar as transferências",
            "Esperar ter muito dinheiro para começar",
            "Poupar apenas quando sobra dinheiro",
          ],
          correct: 1,
          explanation: "Muito bem! Começar pequeno e automatizar é a chave para manter a consistência.",
        },
        {
          question: "Qual é a importância de definir objetivos financeiros?",
          options: [
            "Apenas para pessoas ricas",
            "Guiar suas decisões e manter você motivado",
            "Não tem importância real",
            "Apenas para longo prazo",
          ],
          correct: 1,
          explanation: "Correto! Objetivos claros são como um mapa que te guia nas decisões financeiras.",
        },
      ],
    },
  ];

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmitQuiz = () => {
    const quizStep = missionContent[currentStep] as any;
    let correctCount = 0;

    quizStep.questions.forEach((q: any, idx: number) => {
      if (selectedAnswers[idx] === q.correct) {
        correctCount++;
      }
    });

    const earnedXP = correctCount * 20;
    setXp(earnedXP);
    setShowResults(true);
  };

  const handleContinue = () => {
    if (currentStep < missionContent.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowResults(false);
      setSelectedAnswers({});
    } else {
      setMissionComplete(true);
    }
  };

  const currentContent = missionContent[currentStep] as any;

  if (missionComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-accent/10 to-white flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center space-y-6 border-primary/20">
          <div className="space-y-2">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold text-foreground">Missão Completa!</h1>
            <p className="text-foreground/60">Parabéns por completar a Missão 1!</p>
          </div>

          <div className="space-y-4">
            <div className="bg-accent/20 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-foreground font-semibold">XP Ganho</span>
                <span className="text-2xl font-bold text-primary">+{xp} XP</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground font-semibold">Badge Desbloqueada</span>
                <span className="text-2xl">🎖️</span>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <p className="text-sm text-foreground">
                <strong>Ivo diz:</strong> Você acabou de dar o primeiro passo para a liberdade financeira! Agora você entende seu dinheiro. Próximo passo: aprender sobre Renda Fixa! 🦉
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary/5"
              onClick={() => setLocation("/")}
            >
              Voltar para Home
            </Button>
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
              onClick={() => setLocation("/")}
            >
              Ver Planos
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/5">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-40">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setLocation("/")} className="text-foreground/60 hover:text-foreground">
              ← Voltar
            </button>
            <div>
              <h2 className="font-bold text-foreground">Missão 1: O Ninho</h2>
              <p className="text-sm text-foreground/60">Etapa {currentStep + 1} de {missionContent.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
            <Zap size={18} className="text-primary" />
            <span className="font-bold text-primary">{xp} XP</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-border h-1">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / missionContent.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12 max-w-2xl">
        {currentContent.type === "intro" && (
          <Card className="p-8 space-y-6 border-primary/20">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground">{currentContent.title}</h1>
              <p className="text-xl text-primary font-semibold">{currentContent.subtitle}</p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">{currentContent.content}</p>

            <div className="bg-accent/20 rounded-lg p-4 border border-primary/20 space-y-2">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                  <img src={capitalinoImg} alt="Ivo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ivo diz:</p>
                  <p className="text-sm text-foreground/70">{currentContent.mentor}</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
              onClick={handleContinue}
            >
              Começar Aula <ChevronRight size={20} />
            </Button>
          </Card>
        )}

        {currentContent.type === "lesson" && (
          <Card className="p-8 space-y-6 border-primary/20">
            <h1 className="text-3xl font-bold text-foreground">{currentContent.title}</h1>

            {currentContent.videoUrl && (
              <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={currentContent.videoUrl}
                  title={currentContent.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <p className="text-lg text-foreground/70 leading-relaxed">{currentContent.content}</p>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Pontos-chave:</h3>
              {currentContent.details.map((detail: string, idx: number) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/70">{detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-accent/20 rounded-lg p-4 border border-primary/20 space-y-2">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                  <img src={capitalinoImg} alt="Ivo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ivo diz:</p>
                  <p className="text-sm text-foreground/70">{currentContent.mentor}</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
              onClick={handleContinue}
            >
              Próxima Lição <ChevronRight size={20} />
            </Button>
          </Card>
        )}

        {currentContent.type === "quiz" && (
          <div className="space-y-6">
            <Card className="p-8 border-primary/20">
              <h1 className="text-3xl font-bold text-foreground mb-6">{currentContent.title}</h1>

              <div className="space-y-6">
                {currentContent.questions.map((question: any, qIdx: number) => (
                  <div key={qIdx} className="space-y-3">
                    <h3 className="font-semibold text-foreground">
                      {qIdx + 1}. {question.question}
                    </h3>

                    <div className="space-y-2">
                      {question.options.map((option: string, oIdx: number) => (
                        <button
                          key={oIdx}
                          onClick={() => !showResults && handleAnswerSelect(qIdx, oIdx)}
                          disabled={showResults}
                          className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                            selectedAnswers[qIdx] === oIdx
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          } ${
                            showResults && oIdx === question.correct
                              ? "border-green-500 bg-green-50"
                              : ""
                          } ${
                            showResults &&
                            selectedAnswers[qIdx] === oIdx &&
                            oIdx !== question.correct
                              ? "border-red-500 bg-red-50"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedAnswers[qIdx] === oIdx
                                  ? "border-primary bg-primary"
                                  : "border-border"
                              }`}
                            >
                              {selectedAnswers[qIdx] === oIdx && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                            <span className="text-foreground">{option}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {showResults && (
                      <div
                        className={`p-3 rounded-lg text-sm ${
                          selectedAnswers[qIdx] === question.correct
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-blue-50 text-blue-800 border border-blue-200"
                        }`}
                      >
                        <p className="font-semibold mb-1">
                          {selectedAnswers[qIdx] === question.correct ? "✓ Correto!" : "ℹ️ Explicação:"}
                        </p>
                        <p>{question.explanation}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {!showResults ? (
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length < currentContent.questions.length}
              >
                Enviar Respostas
              </Button>
            ) : (
              <div className="space-y-4">
                <Card className="p-6 bg-accent/20 border-primary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-foreground/60">Respostas Corretas</p>
                      <p className="text-2xl font-bold text-primary">
                        {Object.values(selectedAnswers).filter(
                          (ans, idx) => ans === currentContent.questions[idx].correct
                        ).length}{" "}
                        / {currentContent.questions.length}
                      </p>
                    </div>
                    <Award size={40} className="text-primary" />
                  </div>
                </Card>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
                  onClick={handleContinue}
                >
                  Completar Missão <CheckCircle size={20} />
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
