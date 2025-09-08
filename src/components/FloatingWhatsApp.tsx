import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappMessage = `🚀 Olá! Quero o Gateway Individual Mercado Pago!

Interesse no sistema por R$ 200 com:
✅ Sem comissões mensais
✅ Código fonte completo
✅ Entrega em 24h
✅ Suporte técnico

Pode me ajudar?`;

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5511937587627?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
      <Button
        onClick={handleClick}
        variant="whatsapp"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl"
        size="lg"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-background border border-border rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;