import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Rocket } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Hero = () => {
  const whatsappMessage = `🚀 Olá! Tenho interesse no Gateway Individual Mercado Pago por R$ 200.

Quero parar de pagar comissões e ter meu próprio sistema de pagamento!

Pode me passar mais detalhes sobre:
- Entrega em 24h
- Código fonte PHP completo
- Configuração do Mercado Pago
- Suporte técnico

Aguardo retorno! 😊`;

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Effects - Optimized for mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(142_76%_36%_/_0.15),transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <Badge variant="secondary" className="mb-4 md:mb-6 px-3 md:px-4 py-2 text-xs md:text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
            <Zap className="w-3 md:w-4 h-3 md:h-4 mr-2" />
            Gateway Individual - Mercado Pago
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight text-shadow">
            Seu Gateway de
            <span className="block text-white animate-glow">Pagamento Próprio</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Pare de pagar comissões absurdas para Hotmart, Kiwify e Kirvano. 
            <span className="text-primary font-semibold"> Tenha seu próprio sistema</span> por apenas R$ 200!
          </p>
          
          <div className="flex justify-center items-center mb-8 md:mb-12 px-4">
            <WhatsAppButton
              phone="5511937587627"
              message={whatsappMessage}
              className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold"
            >
              💬 Comprar Agora por R$ 200
            </WhatsAppButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50 hover:bg-card/80 transition-colors duration-300">
              <Shield className="w-5 md:w-6 h-5 md:h-6 text-primary flex-shrink-0" />
              <span className="font-medium text-sm md:text-base">Entrega em 24h</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50 hover:bg-card/80 transition-colors duration-300">
              <Rocket className="w-5 md:w-6 h-5 md:h-6 text-primary flex-shrink-0" />
              <span className="font-medium text-sm md:text-base">Configuração Completa</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50 hover:bg-card/80 transition-colors duration-300">
              <Zap className="w-5 md:w-6 h-5 md:h-6 text-primary flex-shrink-0" />
              <span className="font-medium text-sm md:text-base">Tecnologia PHP Avançada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;