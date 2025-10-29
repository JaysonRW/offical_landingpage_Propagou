
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, CalendarDays, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import VantaBackground from './VantaBackground';

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Personalização Total',
    description:
      'Soluções criadas do zero para atender às necessidades únicas do seu negócio.',
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    title: 'Entrega em até 15 dias',
    description:
      'Seu projeto de landing page ou portal pronto em tempo recorde, sem atrasos.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Suporte Humano 24h',
    description:
      'Acesso direto a um especialista para tirar dúvidas e fazer ajustes, sempre que precisar.',
  },
];

export default function Hero() {
  const founderImage = placeholderImages.find((img) => img.id === 'founder');

  return (
    <section
      id="hero"
      className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      <VantaBackground />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 items-center">
          <div className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-12 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300">
              SaaS personalizado para o seu negócio crescer de verdade
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
              Landing pages, portais e sistemas sob medida para PMEs. Tecnologia
              premium, sem complicação.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
              <div className="glowing-wrapper-borders-masker">
                <div className="glowing-wrapper-borders"></div>
                <Button asChild size="lg" className="relative z-20 transform transition-transform hover:scale-105">
                  <Link href="#contact">
                    Fale com Especialista
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 group">
                <svg width="60" height="25" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block text-primary/70 group-hover:text-primary transition-colors -mr-2 rotate-y-180">
                  <path d="M1 23.5C14.1667 23.1667 39.1 -6.19999 58.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M54 1L58.5 4L55 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                {founderImage && (
                  <Image
                    src={founderImage.imageUrl}
                    alt={founderImage.description}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-primary/50 group-hover:border-primary transition-all transform group-hover:scale-110"
                    data-ai-hint={founderImage.imageHint}
                  />
                )}
                <div className="text-left">
                  <p className="font-semibold text-base text-white">Com nosso fundador, Jayson Walter.</p>
                  <p className="text-sm text-gray-400">Sem compromisso.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="animate-in fade-in slide-in-from-bottom-12 duration-700"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {benefit.icon}
                  <CardTitle className="text-xl font-semibold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
