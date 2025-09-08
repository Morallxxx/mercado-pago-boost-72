import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, CreditCard, Settings, Smartphone, Globe, Headphones, Shield, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Code,
      title: "Código PHP Avançado",
      description: "Sistema desenvolvido com as melhores práticas de programação, seguro e otimizado",
      highlight: "100% Personalizável"
    },
    {
      icon: CreditCard,
      title: "Integração Mercado Pago",
      description: "Conectado diretamente à API do Mercado Pago, sem intermediários",
      highlight: "Pagamentos Diretos"
    },
    {
      icon: Smartphone,
      title: "Totalmente Responsivo",
      description: "Funciona perfeitamente em desktop, tablet e celular",
      highlight: "Mobile First"
    },
    {
      icon: Shield,
      title: "Segurança Máxima", 
      description: "Criptografia SSL, proteção contra fraudes e transações seguras",
      highlight: "PCI Compliance"
    },
    {
      icon: Settings,
      title: "Configuração Completa",
      description: "Entregamos tudo instalado e configurado, pronto para usar",
      highlight: "Zero Configuração"
    },
    {
      icon: Globe,
      title: "Domínio Próprio",
      description: "Use seu próprio domínio, sua marca, sua identidade",
      highlight: "100% White Label"
    },
    {
      icon: Headphones,
      title: "Suporte Premium",
      description: "30 dias de suporte completo + 1 ano de atualizações gratuitas",
      highlight: "Suporte VIP"
    },
    {
      icon: Zap,
      title: "Performance Extrema",
      description: "Carregamento ultra-rápido, otimizado para conversão máxima",
      highlight: "Super Velocidade"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologia de
            <span className="block text-primary">Última Geração</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada linha de código foi pensada para entregar a melhor experiência e máxima conversão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {feature.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-card rounded-2xl border border-primary/20 shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              🚀 Entrega em 24 Horas!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Não espere semanas! Seu gateway estará funcionando em menos de 1 dia útil, 
              <span className="text-primary font-semibold"> completamente configurado e testado</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">✅ Instalação</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">✅ Configuração</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">✅ Testes</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">✅ Documentação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;