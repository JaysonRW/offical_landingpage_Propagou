'use client';
import Image from 'next/image';
import AnimatedCounter from './AnimatedCounter';
import { placeholderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const stats = [
  { value: 50, label: 'Projetos entregues', suffix: '+' },
  { value: 30, label: 'Clientes ativos', suffix: '+' },
  { value: 4.9, label: 'Satisfação', suffix: '/5', precision: 1 },
];

const clientLogos = placeholderImages.filter(img => img.id.startsWith('client-'));

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
          {stats.map((stat, index) => (
            <div key={index} className="py-6 md:py-0">
              <h3 className="text-5xl font-bold font-headline text-primary">
                <AnimatedCounter target={stat.value} duration={2000} precision={stat.precision || 0} />
                {stat.suffix}
              </h3>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <p className="text-center text-lg text-muted-foreground mb-8">Confiado por empresas inovadoras</p>
          <div className="scroller" data-animated="true">
            <div className="scroller__inner flex w-max gap-12 animate-scroll">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={`${logo.id}-${index}`} className="relative h-16 w-40 flex-shrink-0" title={logo.description}>
                   <Image
                    src={logo.imageUrl}
                    alt={logo.description}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    data-ai-hint={logo.imageHint}
                    sizes="160px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
