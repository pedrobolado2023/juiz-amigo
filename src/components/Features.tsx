import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  MessageSquare, 
  Shield, 
  Clock, 
  Target, 
  BookOpen,
  CheckCircle2,
  Zap,
  Users
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "IA Dupla Verificação",
      description: "Sistema único com Agente Principal + Supervisor para garantir máxima precisão nas respostas.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Fontes Oficiais",
      description: "Integração direta com STF, STJ e Planalto para informações sempre atualizadas e confiáveis.",
      color: "text-success"
    },
    {
      icon: MessageSquare,
      title: "Via WhatsApp",
      description: "Estude diretamente pelo WhatsApp, a plataforma que você já usa todos os dias.",
      color: "text-secondary"
    }
  ];

  const additionalFeatures = [
    {
      icon: Target,
      title: "Personalização Total",
      description: "Adapte o estudo ao seu nível e concurso específico"
    },
    {
      icon: Clock,
      title: "Disponível 24/7",
      description: "Estude quando quiser, sempre com respostas instantâneas"
    },
    {
      icon: BookOpen,
      title: "Memória Conversacional",
      description: "Lembra do seu histórico e evolução nos estudos"
    },
    {
      icon: CheckCircle2,
      title: "Correção em Tempo Real",
      description: "Feedback imediato para acelerar seu aprendizado"
    },
    {
      icon: Zap,
      title: "Fluxo Contínuo",
      description: "Sem interrupções, mantenha o foco nos estudos"
    },
    {
      icon: Users,
      title: "Suporte Especializado",
      description: "Equipe especializada em concursos jurídicos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-accent-foreground border border-border/20 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            Por que escolher o Juiz Amigo?
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Tecnologia de Ponta para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Resultados Excepcionais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma combina inteligência artificial avançada com fontes oficiais 
            para criar a experiência de estudo mais eficiente do mercado.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="relative group hover:shadow-elegant transition-all duration-300 border-border/20 bg-gradient-card backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${feature.color.split('-')[1]}/10 to-${feature.color.split('-')[1]}/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/20 hover:shadow-card transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-success font-medium mb-4">
            <CheckCircle2 className="w-5 h-5" />
            Mais de 10.000 questões já foram resolvidas com 98% de precisão
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;