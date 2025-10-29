
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import { ArrowRight } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  tech: string[];
  demoUrl: string;
};

const projectsData: Project[] = placeholderImages
  .filter((img) => img.id.startsWith('project-'))
  .map((img, i) => {
    let title = 'GestãoPro - ERP';
    let description = 'Um sistema de ERP completo para clínicas, otimizando agendamentos e prontuários com uma interface intuitiva e automações inteligentes.';
    let demoUrl = '#';
    let tags = ['SaaS', 'Dashboard', 'Automação'];
    let tech = ['Next.js', 'Tailwind CSS', 'Firebase', 'Stripe'];

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
    }
  });

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
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
                className="overflow-hidden group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-card border-border"
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
                      <Badge key={tag} variant="secondary">
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
            <DialogContent className="sm:max-w-2xl bg-card">
              <DialogHeader>
                <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={selectedProject.imageHint}
                  />
                </div>
                <DialogTitle className="text-2xl">
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
                  <Link href="#contact">Quero algo assim</Link>
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
