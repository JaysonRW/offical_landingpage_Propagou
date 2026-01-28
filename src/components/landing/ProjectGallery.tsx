
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';
import ParallaxStars from './ParallaxStars';
import { cn } from '@/lib/utils';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  tech: string[];
  demoUrl: string;
  gallery?: string[];
};

const projectsData: Project[] = placeholderImages
  .filter((img) => img.id.startsWith('project-'))
  .map((img, i) => {
    let title = 'GestãoPro - ERP';
    let description = 'Um sistema de ERP completo para clínicas, otimizando agendamentos e prontuários com uma interface intuitiva e automações inteligentes.';
    let demoUrl = '#';
    let tags = ['SaaS', 'Dashboard', 'Automação'];
    let tech = ['Next.js', 'Tailwind CSS', 'Firebase', 'Autenticação'];

    if (img.id === 'project-1') {
      title = 'Landing Page Jadi Manicure';
      description = 'Uma landing page elegante e de alta conversão para uma profissional de manicure, focada em agendamento online e apresentação de portfólio.';
      demoUrl = 'https://jadicristinamanicure.abacusai.app/';
      tags = ['Landing Page', 'Design', 'Agendamento'];
      tech = ['Next.js', 'Tailwind CSS', 'Vercel'];
    } else if (img.id === 'project-2') {
      title = 'Portal de Agendamentos para Barbearias';
      description = 'Um sistema de agendamento completo para barbearias, permitindo que clientes marquem horários online e o proprietário gerencie sua agenda.';
      tags = ['SaaS', 'Agendamento', 'Barbearia'];
      demoUrl = 'https://barbershopagendamentos.vercel.app/';
    } else if (img.id === 'project-3') {
      title = 'Portal do Condomínio';
      description = 'Um portal exclusivo para moradores do Condomínio Collina Belvedere, com acesso a comunicados, agendamento de áreas comuns e documentos importantes.';
      demoUrl = 'https://projeto-condominio-collina.vercel.app/#home';
    } else if (img.id === 'project-4') {
      title = 'Portal Poker Hands Pro';
      description = 'Uma plataforma para análise e estudo de mãos de poker, com estatísticas detalhadas e simulação de cenários para jogadores profissionais.';
      tags = ['SaaS', 'Poker', 'Analytics'];
      tech = ['React', 'Chart.js', 'Node.js'];
      demoUrl = 'https://pokerhandpro.vercel.app/';
    } else if (img.id === 'project-5') {
      title = 'Site C&D Pisos e Distribuição';
      description = 'Um site institucional para uma distribuidora de pisos, com catálogo de produtos, informações da empresa e formulário de contato para orçamentos.';
      tags = ['Site Institucional', 'Catálogo', 'Wordpress'];
      tech = ['Wordpress', 'Elementor', 'PHP'];
      demoUrl = 'https://cdpisos.com.br/';
    } else if (img.id === 'project-6') {
      title = 'GestãoPro - ERP Financeiro';
      description = 'Um módulo financeiro de um sistema de ERP completo, otimizando o controle de fluxo de caixa, faturamento e relatórios com uma interface intuitiva.';
      tags = ['SaaS', 'ERP', 'Financeiro'];
      tech = ['Vue.js', 'Node.js', 'PostgreSQL'];
      demoUrl = 'https://intelli-flow-hub-financeiro.vercel.app/';
    }
    
    return {
      id: img.id,
      title: title,
      description: description,
      tags: tags,
      imageUrl: img.imageUrl,
      imageHint: img.imageHint,
      tech: tech,
      demoUrl: demoUrl,
      gallery: (img as any).gallery,
    }
  });

  const getTagClass = (tag: string) => {
    const tagColorMap: { [key: string]: string } = {
      'SaaS': 'bg-blue-900 text-blue-300 border-blue-700',
      'Dashboard': 'bg-indigo-900 text-indigo-300 border-indigo-700',
      'Automação': 'bg-purple-900 text-purple-300 border-purple-700',
      'Landing Page': 'bg-green-900 text-green-300 border-green-700',
      'Design': 'bg-pink-900 text-pink-300 border-pink-700',
      'Agendamento': 'bg-cyan-900 text-cyan-300 border-cyan-700',
      'Barbearia': 'bg-yellow-900 text-yellow-300 border-yellow-700',
      'Poker': 'bg-red-900 text-red-300 border-red-700',
      'Analytics': 'bg-teal-900 text-teal-300 border-teal-700',
      'Site Institucional': 'bg-gray-700 text-gray-300 border-gray-500',
      'Catálogo': 'bg-orange-900 text-orange-300 border-orange-700',
      'Wordpress': 'bg-sky-800 text-sky-200 border-sky-600',
      'ERP': 'bg-rose-900 text-rose-300 border-rose-700',
      'Financeiro': 'bg-emerald-900 text-emerald-300 border-emerald-700',
    };
    return tagColorMap[tag] || 'bg-secondary text-secondary-foreground border-border';
  };

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <ParallaxStars />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
            Veja o que já construímos
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Projetos que transformaram ideias em realidade digital, com foco em
            performance e experiência do usuário.
          </p>
        </div>

        <Dialog onOpenChange={(open) => !open && setSelectedProject(null)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border"
              >
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={project.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                       <Badge key={tag} className={cn('border', getTagClass(tag))}>
                       {tag}
                     </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      Ver detalhes <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>
            ))}
          </div>

          {selectedProject && (
            <DialogContent className="sm:max-w-3xl bg-card max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="relative w-full mb-6 rounded-lg overflow-hidden bg-black/5 flex items-center justify-center min-h-[300px]">
                  {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedProject.gallery.map((img, index) => (
                          <CarouselItem key={index}>
                            <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-muted/20">
                              <Image
                                src={img}
                                alt={`${selectedProject.title} - imagem ${index + 1}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-lg"
                                sizes="(max-width: 768px) 100vw, 800px"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
                      <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
                    </Carousel>
                  ) : (
                    <div className="relative h-64 w-full">
                      <Image
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={selectedProject.imageHint}
                      />
                    </div>
                  )}
                </div>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
                <DialogDescription className="pt-4 text-base text-muted-foreground">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-4 mt-4">
                <Button asChild className="flex-1" variant="outline">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Demo
                  </a>
                </Button>
                <Button asChild className="flex-1">
                  <a
                    href={`https://wa.me/5541995343245?text=${encodeURIComponent(
                      `Olá! Vi o projeto "${selectedProject.title}" no portfólio da Propagou e tenho interesse em desenvolver um projeto similar.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero algo assim
                  </a>
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
