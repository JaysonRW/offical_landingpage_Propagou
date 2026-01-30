
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/landing/WhatsAppButton';

// Configuração de metadados globais para SEO e compartilhamento social
export const metadata: Metadata = {
  // Substitua pela URL final do seu site em produção
  metadataBase: new URL('https://www.propagounaweb.com.br'),
  title: {
    default: 'PropagouDev | Desenvolvimento de Software Personalizado',
    template: '%s | PropagouDev',
  },
  description:
    'Landing pages de alta conversão, portais corporativos e sistemas sob medida. Transforme suas ideias em soluções digitais de alta performance com a PropagouDev.',
  keywords: [
    'desenvolvimento web',
    'software personalizado',
    'landing pages',
    'sistemas web',
    'criação de sites',
    'desenvolvedor web',
    'tecnologia',
    'inovação',
  ],
  authors: [{ name: 'PropagouDev Team' }],
  creator: 'PropagouDev',
  publisher: 'PropagouDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'PropagouDev | Soluções Digitais Premium',
    description:
      'Especialistas em desenvolvimento de software. Criamos landing pages e sistemas que impulsionam o seu negócio.',
    url: 'https://www.propagounaweb.com.br',
    siteName: 'PropagouDev',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/propagou_logo.png', // Certifique-se de que esta imagem existe em public/images/
        width: 800,
        height: 600,
        alt: 'PropagouDev - Desenvolvimento de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PropagouDev | Desenvolvimento de Software',
    description:
      'Soluções digitais sob medida: Landing pages, sistemas web e aplicativos de alta performance.',
    images: ['/images/propagou_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Schema.org JSON-LD para Rich Snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'PropagouDev',
  image: 'https://propagou.dev/images/propagou_logo.png',
  description:
    'Agência de desenvolvimento de software especializada em landing pages, sistemas web e soluções digitais personalizadas.',
  url: 'https://propagou.dev',
  telephone: '+5541995343245',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressRegion: 'Paraná',
  },
  priceRange: '$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/propagou.dev',
    'https://www.linkedin.com/company/propagou-dev',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
        {/* Injeção do JSON-LD para Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('font-body bg-background text-foreground antialiased')}>
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
