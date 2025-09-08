import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Check, Zap } from "lucide-react";

const ComparisonSection = () => {
  const competitors = [
    {
      name: "Hotmart",
      commission: "9.9% + R$ 1,00",
      limitations: ["Taxas abusivas", "Dependência total", "Sem personalização", "Dados não são seus"],
      color: "text-orange-400"
    },
    {
      name: "Kiwify", 
      commission: "5.9% + R$ 0,89",
      limitations: ["Ainda assim caro", "Regras restritivas", "Layout limitado", "Suporte lento"],
      color: "text-blue-400"
    },
    {
      name: "Kirvano",
      commission: "4.9% + R$ 0,69", 
      limitations: ["Recursos básicos", "Pouca flexibilidade", "Dependência da plataforma", "Sem controle total"],
      color: "text-purple-400"
    }
  ];

  const ourBenefits = [
    "Taxa única de R$ 200 (sem comissões)",
    "Código fonte 100% seu",
    "Personalização total",
    "Integração direta Mercado Pago",
    "Suporte completo por 30 dias",
    "Atualizações gratuitas por 1 ano"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 bg-destructive/10 text-destructive border-destructive/20">{" "}
            <X className="w-4 h-4 mr-2" />
            Pare de Ser Explorado
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Compare e veja como você está
            <span className="block text-destructive">perdendo dinheiro</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Enquanto você paga comissões todo mês, poderia ter seu próprio sistema por uma taxa única
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">{" "}
          {/* Competitors Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8 text-destructive">
              Plataformas que Sugam seu Lucro
            </h3>
            {competitors.map((competitor, index) => (
              <Card key={competitor.name} className="bg-destructive/5 border-destructive/20 hover:bg-destructive/10 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className={`flex items-center justify-between ${competitor.color}`}>
                    {competitor.name}
                    <Badge variant="destructive" className="bg-destructive/20 text-destructive">
                      {competitor.commission}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {competitor.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-center gap-2 text-muted-foreground">
                        <X className="w-4 h-4 text-destructive flex-shrink-0" />
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Our Solution Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              Nossa Solução Definitiva
            </h3>
            <Card className="bg-gradient-card border-primary/30 shadow-glow hover:shadow-elevated transition-all duration-300 animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-primary">
                  Gateway Próprio
                  <Badge className="bg-gradient-green text-primary-foreground animate-pulse-glow">
                    <Zap className="w-4 h-4 mr-1" />
                    R$ 200 ÚNICO
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {ourBenefits.map((benefit, index) => (
                    <li key={benefit} className="flex items-center gap-3 text-foreground animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-center text-primary font-bold text-lg">
                    💰 Economia de milhares por ano!
                  </p>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Em apenas 2 vendas você já recupera o investimento
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;