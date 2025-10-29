import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, CalendarDays, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import VantaBackground from './VantaBackground';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

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

            <div className="flex justify-center items-center gap-4">
              <Link
                href="#contact"
                className="flex items-center gap-4 group"
              >
                {founderImage && (
                  <Image
                    src={founderImage.imageUrl}
                    alt="Jayson Walter, Fundador"
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-primary/50 group-hover:border-primary transition-all transform group-hover:scale-110"
                    data-ai-hint={founderImage.imageHint}
                  />
                )}
                <div className="relative text-left">
                    <p className="font-semibold text-lg text-white">Fale com o especialista, Jayson Walter</p>
                    <p className="text-sm text-gray-400">Sem compromisso</p>
                    <svg
                        className="absolute -left-12 top-1/2 -translate-y-1/2 h-8 w-8 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
              </Link>
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
