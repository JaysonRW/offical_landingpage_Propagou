import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { PanelsTopLeft, AppWindow, Bot, PlugZap } from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: <PanelsTopLeft className="h-10 w-10 text-primary" />,
    title: 'Landing Pages de Alta Conversão',
    description: 'Páginas otimizadas para transformar visitantes em clientes, com design impecável e carregamento rápido.',
  },
  {
    icon: <AppWindow className="h-10 w-10 text-primary" />,
    title: 'SaaS & Portais Personalizados',
    description: 'Sistemas web complexos, dashboards e portais de clientes, construídos para escalar com seu negócio.',
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Automação de Processos',
    description: 'Economize tempo e reduza erros com robôs que automatizam tarefas repetitivas e integram sistemas.',
  },
  {
    icon: <PlugZap className="h-10 w-10 text-primary" />,
    title: 'Integrações e APIs',
    description: 'Conectamos seu sistema a qualquer serviço: WhatsApp, meios de pagamento, CRMs e muito mais.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.ibb.co/3yCZ4NTx/banner-back-pre-os.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1729]/90 to-[#0f1729]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Soluções que impulsionam</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Do conceito à realidade, oferecemos o que há de mais moderno em desenvolvimento web.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6 flex items-start gap-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="shrink-0">{service.icon}</div>
              <div>
                <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
