import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Eye, Monitor, CreditCard, BarChart } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState<'admin' | 'checkout' | 'analytics'>('admin');

  const demoUrls = {
    admin: "https://demo.mercadopago.com.br/admin",
    checkout: "https://demo.mercadopago.com.br/checkout", 
    analytics: "https://demo.mercadopago.com.br/analytics"
  };

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
          {/* Demo Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={activeDemo === 'admin' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('admin')}
              className="flex items-center gap-2"
            >
              <Monitor className="w-4 h-4" />
              Painel Administrativo
            </Button>
            <Button
              variant={activeDemo === 'checkout' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('checkout')}
              className="flex items-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              Página de Checkout
            </Button>
            <Button
              variant={activeDemo === 'analytics' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('analytics')}
              className="flex items-center gap-2"
            >
              <BarChart className="w-4 h-4" />
              Relatórios Analytics
            </Button>
          </div>

          <Card className="bg-gradient-card border-primary/30 shadow-elevated overflow-hidden">
            <CardHeader className="bg-primary/5 border-b border-primary/20">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="ml-4 text-muted-foreground font-mono text-sm">
                    {activeDemo === 'admin' && 'seudominio.com/admin'}
                    {activeDemo === 'checkout' && 'seudominio.com/checkout'}
                    {activeDemo === 'analytics' && 'seudominio.com/analytics'}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(demoUrls[activeDemo], '_blank')}
                  className="border-primary/30 hover:bg-primary/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Abrir em Nova Aba
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-background to-card">
                <iframe
                  src={demoUrls[activeDemo]}
                  className="w-full h-96 border-0"
                  title={`Demo ${activeDemo}`}
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Info */}
          <div className="mt-8 p-6 bg-card/50 rounded-lg border border-border/50">
            <div className="text-center">
              <h4 className="font-bold text-lg mb-2 text-primary">
                {activeDemo === 'admin' && '⚙️ Painel Administrativo Completo'}
                {activeDemo === 'checkout' && '💳 Checkout Profissional'}
                {activeDemo === 'analytics' && '📊 Analytics Avançados'}
              </h4>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                {activeDemo === 'admin' && 'Gerencie suas vendas, produtos, clientes e configurações do sistema de forma simples e intuitiva.'}
                {activeDemo === 'checkout' && 'Páginas de pagamento otimizadas para máxima conversão, integradas diretamente com o Mercado Pago.'}
                {activeDemo === 'analytics' && 'Relatórios detalhados com métricas de vendas, conversão, faturamento e muito mais.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;