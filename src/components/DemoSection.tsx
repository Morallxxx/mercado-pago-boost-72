import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Play, Eye, Monitor, CreditCard, BarChart } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState<'admin' | 'checkout' | 'analytics'>('admin');

  // Placeholder para as 5 imagens que serão fornecidas
  const demoImages = [
    {
      src: "/placeholder.svg", // Substitua pela imagem real
      alt: "Painel Administrativo - Visão Geral",
      title: "Painel Administrativo",
      description: "Interface principal do sistema"
    },
    {
      src: "/placeholder.svg", // Substitua pela imagem real  
      alt: "Página de Checkout - Processo de Pagamento",
      title: "Checkout Profissional",
      description: "Página de pagamento otimizada"
    },
    {
      src: "/placeholder.svg", // Substitua pela imagem real
      alt: "Relatórios Analytics - Dashboard",
      title: "Analytics Avançados", 
      description: "Relatórios detalhados de vendas"
    },
    {
      src: "/placeholder.svg", // Substitua pela imagem real
      alt: "Configurações do Sistema",
      title: "Configurações",
      description: "Personalização completa do sistema"
    },
    {
      src: "/placeholder.svg", // Substitua pela imagem real
      alt: "Gestão de Produtos e Vendas", 
      title: "Gestão de Produtos",
      description: "Controle total de produtos e vendas"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Eye className="w-4 h-4 mr-2" />
            Demonstração Ao Vivo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja o Sistema
            <span className="block text-primary">Funcionando</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teste todas as funcionalidades em tempo real. Veja como é simples e poderoso!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-card border-primary/30 shadow-elevated overflow-hidden">
            <CardHeader className="bg-primary/5 border-b border-primary/20">
              <CardTitle className="flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="ml-4 text-muted-foreground font-mono text-sm">
                    Gateway Mercado Pago - Screenshots
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <Carousel className="w-full mx-auto">
                <CarouselContent>
                  {demoImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[500px] object-cover bg-gradient-to-br from-background to-card rounded-lg border border-border/50"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default DemoSection;