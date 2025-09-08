import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phone: string;
  message: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ phone, message, className = "", children }: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="whatsapp"
      size="lg"
      className={className}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children || "Falar no WhatsApp"}
    </Button>
  );
};

export default WhatsAppButton;