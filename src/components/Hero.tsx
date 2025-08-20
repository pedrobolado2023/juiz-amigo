import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, Brain, Shield } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary-light/10 to-secondary-light/20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-accent-foreground border border-border/20">
              <Brain className="w-4 h-4 text-primary" />
              Inteligência Artificial para Concursos
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Seu{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Juiz Amigo
                </span>{" "}
                para Concursos Jurídicos
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Agente de IA especializado que te ajuda a estudar para concursos jurídicos com 
                verificação em tempo real de fontes oficiais e personalização completa.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground font-medium">Fontes Oficiais STF/STJ</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-success" />
                <span className="text-foreground font-medium">Via WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-success" />
                <span className="text-foreground font-medium">IA Dupla Verificação</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-foreground font-medium">Informações Validadas</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Começar Teste Grátis
                <MessageSquare className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="elegant" size="xl">
                Ver Como Funciona
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Precisão</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilidade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Questões Resolvidas</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow bg-gradient-card border border-border/20 backdrop-blur-sm">
              <img 
                src={heroImage} 
                alt="Plataforma Juiz Amigo para concursos jurídicos" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-success text-success-foreground rounded-full p-4 shadow-elegant animate-float">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-full p-4 shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
              <Brain className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;