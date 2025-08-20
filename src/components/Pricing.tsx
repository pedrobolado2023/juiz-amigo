import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "29,90",
      period: "mês",
      description: "Ideal para quem está começando a estudar para concursos",
      features: [
        "50 perguntas por mês",
        "1 matéria por vez",
        "Suporte via WhatsApp",
        "Acesso a fontes básicas",
        "Correções em tempo real"
      ],
      buttonText: "Começar Grátis",
      buttonVariant: "elegant" as const,
      popular: false
    },
    {
      name: "Intermediário",
      price: "59,90",
      period: "mês",
      description: "Para estudantes que querem acelerar o aprendizado",
      features: [
        "200 perguntas por mês",
        "3 matérias simultâneas",
        "Relatórios de desempenho",
        "Histórico completo de estudos",
        "Análise de evolução",
        "Suporte prioritário"
      ],
      buttonText: "Mais Popular",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Premium",
      price: "99,90",
      period: "mês",
      description: "Para quem busca máxima performance e aprovação",
      features: [
        "Perguntas ilimitadas",
        "Todas as matérias disponíveis",
        "Simulados personalizados",
        "Análise detalhada de pontos fracos",
        "Planos de estudo personalizados",
        "Suporte VIP 24/7",
        "Acesso a materiais exclusivos"
      ],
      buttonText: "Máxima Performance",
      buttonVariant: "premium" as const,
      popular: false
    }
  ];

  const annualPlan = {
    name: "Anual Premium",
    originalPrice: "1.198,80",
    price: "799,90",
    savings: "33% de economia",
    features: [
      "Todos os recursos Premium",
      "Módulo de redação jurídica",
      "Mentoria mensal personalizada",
      "Acesso vitalício a atualizações",
      "Certificado de conclusão"
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-accent-foreground border border-border/20 mb-4">
            <Star className="w-4 h-4 text-secondary" />
            Planos e Preços
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Escolha o Plano{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Ideal para Você
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todos os planos incluem nossa tecnologia de IA dupla verificação e 
            acesso às fontes oficiais. Comece com 7 dias grátis!
          </p>
        </div>

        {/* Monthly Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative group transition-all duration-300 ${
              plan.popular 
                ? 'border-primary shadow-glow bg-gradient-card scale-105' 
                : 'border-border/20 bg-card/80 hover:shadow-elegant'
            } backdrop-blur-sm`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground font-semibold px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  size="lg" 
                  className="w-full group"
                >
                  {plan.buttonText}
                  <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Annual Plan */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-secondary bg-gradient-to-r from-secondary-light/20 to-secondary-light/10 backdrop-blur-sm">
            <div className="absolute top-0 right-0 bg-success text-success-foreground px-4 py-1 text-sm font-semibold">
              {annualPlan.savings}
            </div>
            
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{annualPlan.name}</h3>
                  <div className="flex items-baseline gap-4 mb-4">
                    <div className="flex items-baseline">
                      <span className="text-sm text-muted-foreground">R$</span>
                      <span className="text-4xl font-bold text-foreground">{annualPlan.price}</span>
                      <span className="text-sm text-muted-foreground">/ano</span>
                    </div>
                    <div className="text-lg text-muted-foreground line-through">
                      R$ {annualPlan.originalPrice}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    O plano anual oferece o melhor custo-benefício com recursos exclusivos 
                    para garantir sua aprovação.
                  </p>
                  <Button variant="premium" size="lg" className="group">
                    Economizar 33% Agora
                    <Star className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4">Recursos Exclusivos:</h4>
                  <ul className="space-y-3">
                    {annualPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-success-light rounded-full px-6 py-3 text-success font-medium">
            <CheckCircle className="w-5 h-5" />
            Garantia de 30 dias ou seu dinheiro de volta
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;