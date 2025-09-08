import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, Shield } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  const whatsappMessage = `🚀 Interesse no Gateway Individual Mercado Pago!

Olá! Vi sua landing page e quero saber mais sobre:

✅ Gateway próprio por R$ 200
✅ Sem comissões mensais  
✅ Código fonte PHP completo
✅ Entrega em 24h
✅ Suporte técnico completo

Pode me passar mais informações?`;

  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Pronto para <span className="text-primary">Decolar?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Pare de perder dinheiro com comissões. Tenha seu gateway em 24h!
          </p>
          
          <WhatsAppButton
            phone="5511937587627"
            message={whatsappMessage}
            className="w-full md:w-auto px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold mb-6 md:mb-8"
          >
            🚀 Garantir Meu Gateway - R$ 200
          </WhatsAppButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="text-center">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">{" "}
              <Clock className="w-6 md:w-8 h-6 md:h-8 text-primary" />
            </div>
            <h3 className="font-bold mb-2 text-sm md:text-base">Entrega Rápida</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              24 horas para estar funcionando
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">{" "}
              <Shield className="w-6 md:w-8 h-6 md:h-8 text-primary" />
            </div>
            <h3 className="font-bold mb-2 text-sm md:text-base">100% Seguro</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Criptografia e proteção total
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <MessageCircle className="w-6 md:w-8 h-6 md:h-8 text-primary" />
            </div>
            <h3 className="font-bold mb-2 text-sm md:text-base">Suporte VIP</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              30 dias de suporte completo
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Mail className="w-6 md:w-8 h-6 md:h-8 text-primary" />
            </div>
            <h3 className="font-bold mb-2 text-sm md:text-base">Contato Direto</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Fale conosco a qualquer momento
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">{" "}
            ✅ Código Fonte Incluso
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
            ✅ Sem Taxa Mensal
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
            ✅ Mercado Pago Integrado
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
            ✅ Suporte Completo
          </Badge>
        </div>

        <div className="text-center text-xs md:text-sm text-muted-foreground border-t border-border/50 pt-6 md:pt-8">
          <p>© 2024 Gateway Individual. Todos os direitos reservados.</p>
          <p className="mt-2 px-4">{" "}
            Desenvolvido com tecnologia PHP avançada para máxima performance e segurança.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;