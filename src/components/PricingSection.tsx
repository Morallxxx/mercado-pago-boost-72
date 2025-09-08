import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Zap, Star } from "lucide-react";

const PricingSection = () => {
  const whatsappMessage = `🚀 Quero adquirir o Gateway Individual Mercado Pago por R$ 200!

✅ Entendi que vou receber:
- Código fonte PHP completo
- Instalação e configuração completa
- Integração Mercado Pago
- 30 dias de suporte VIP
- 1 ano de atualizações gratuitas
- Entrega em 24h

💰 Quero parar de pagar comissões e ter meu próprio sistema!

Pode confirmar os detalhes e forma de pagamento?`;

  const benefits = [
    "Código fonte PHP completo",
    "Instalação e configuração completa", 
    "Integração Mercado Pago configurada",
    "Design responsivo profissional",
    "Painel administrativo completo",
    "Sistema de relatórios avançado",
    "Documentação técnica completa",
    "30 dias de suporte técnico VIP",
    "1 ano de atualizações gratuitas",
    "Certificado SSL incluído",
    "Backup automático configurado",
    "Otimização para SEO"
  ];

  const urgencyFeatures = [
    { icon: Clock, text: "Entrega em 24h", highlight: true },
    { icon: Zap, text: "Configuração automática", highlight: false },
    { icon: Star, text: "Suporte premium", highlight: false }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">{" "}
          <Badge variant="destructive" className="mb-4 bg-destructive/10 text-destructive border-destructive/20 animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            Oferta Limitada
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Invista Apenas
            <span className="block text-primary text-5xl md:text-6xl lg:text-7xl">R$ 200</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            E tenha seu próprio gateway para sempre. <span className="text-primary font-semibold">Zero comissões mensais!</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* ROI Calculator */}
          <div className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              💰 Calcule Sua Economia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="text-2xl font-bold text-primary">R$ 1.000</p>
                <p className="text-sm text-muted-foreground">Vendas mensais</p>
                <p className="text-xs mt-2">
                  <span className="text-destructive">Hotmart: R$ 99/mês</span><br/>
                  <span className="text-primary">Nosso: R$ 0/mês</span>
                </p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="text-2xl font-bold text-primary">R$ 5.000</p>
                <p className="text-sm text-muted-foreground">Vendas mensais</p>
                <p className="text-xs mt-2">
                  <span className="text-destructive">Hotmart: R$ 495/mês</span><br/>
                  <span className="text-primary">Nosso: R$ 0/mês</span>
                </p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="text-2xl font-bold text-primary">R$ 10.000</p>
                <p className="text-sm text-muted-foreground">Vendas mensais</p>
                <p className="text-xs mt-2">
                  <span className="text-destructive">Hotmart: R$ 990/mês</span><br/>
                  <span className="text-primary">Nosso: R$ 0/mês</span>
                </p>
              </div>
            </div>
            <p className="text-center mt-6 text-primary font-bold">
              Se você vende mais de R$ 2.000/mês, já se paga no primeiro mês!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;