import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, CalendarDays, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import VantaBackground from './VantaBackground';

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Personalização Total',
    description: 'Soluções criadas do zero para atender às necessidades únicas do seu negócio.',
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    title: 'Entrega em até 15 dias',
    description: 'Seu projeto de landing page ou portal pronto em tempo recorde, sem atrasos.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Suporte Humano 24h',
    description: 'Acesso direto a um especialista para tirar dúvidas e fazer ajustes, sempre que precisar.',
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <VantaBackground />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-bottom-12 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300">
              SaaS personalizado para o seu negócio crescer de verdade
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-300">
              Landing pages, portais e sistemas sob medida para PMEs. Tecnologia premium, sem complicação.
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="glowing-wrapper-borders-masker">
                <div className="glowing-wrapper-borders"></div>
                <Button size="lg" asChild className="relative z-20 w-full transform transition-transform hover:scale-105 animate-pulse text-white">
                  <Link href="#contact">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Quero meu projeto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200 aspect-video">
             <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl shadow-primary/10"
                src="https://www.youtube.com/embed/tliw8N01pgg?autoplay=1&mute=1&loop=1&playlist=tliw8N01pgg&controls=0&showinfo=0&autohide=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="animate-in fade-in slide-in-from-bottom-12 duration-700" style={{animationDelay: `${400 + index * 100}ms`}}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {benefit.icon}
                  <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
