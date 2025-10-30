'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Clock,
  CreditCard,
  Heart,
  Code,
  Accessibility,
  PlusCircle,
  MessageSquare,
} from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Faq() {
  const faqItems = [
    {
      question: 'Quanto tempo leva para entregar o projeto?',
      answer:
        'Uma landing page simples pode ser entregue em até 7 dias. Sistemas mais complexos, como um SaaS, geralmente levam de 30 a 60 dias, dependendo da complexidade. O plano "Start" garante a entrega da landing page em até 15 dias.',
      icon: <Clock className="w-6 h-6 mr-4 text-primary" />,
    },
    {
      question: 'Posso parcelar o pagamento?',
      answer:
        'Sim, oferecemos opções de parcelamento no cartão de crédito em até 12x (com acréscimos da operadora) ou um plano de pagamento personalizado com entrada de 50% e o restante na entrega.',
      icon: <CreditCard className="w-6 h-6 mr-4 text-primary" />,
    },
    {
      question: 'Vocês oferecem manutenção e suporte após a entrega?',
      answer:
        'Sim. Todos os planos de SaaS incluem um período de suporte gratuito. Após esse período, oferecemos planos de manutenção mensais para garantir que seu sistema esteja sempre atualizado, seguro e funcionando perfeitamente.',
      icon: <Heart className="w-6 h-6 mr-4 text-primary" />,
    },
    {
      question: 'Quais tecnologias vocês utilizam?',
      answer:
        'Utilizamos as tecnologias mais modernas e robustas do mercado, como Next.js/React para o front-end, Node.js para o back-end, e bancos de dados como PostgreSQL ou Firebase/Supabase. A escolha depende da necessidade de cada projeto para garantir escalabilidade e performance.',
      icon: <Code className="w-6 h-6 mr-4 text-primary" />,
    },
    {
      question: 'Preciso ter conhecimento técnico ou de programação?',
      answer:
        'Absolutamente não. Cuidamos de toda a parte técnica para você. Entregamos um produto final intuitivo e, se necessário, fornecemos treinamento para que você e sua equipe possam gerenciar o sistema sem dificuldades.',
      icon: <Accessibility className="w-6 h-6 mr-4 text-primary" />,
    },
    {
      question:
        'E se eu precisar de alterações ou novas funcionalidades no futuro?',
      answer:
        'Nossos sistemas são construídos de forma modular, o que facilita a implementação de novas funcionalidades no futuro. Você pode nos contratar por hora ou fechar um novo pacote de desenvolvimento para expandir seu projeto.',
      icon: <PlusCircle className="w-6 h-6 mr-4 text-primary" />,
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 md:py-28 relative overflow-hidden bg-background"
    >
      <div
        className="absolute inset-x-0 top-0 h-[500px] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary)/0.3), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Tudo o que você precisa saber antes de começar.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-lg bg-card/50 backdrop-blur-md border border-border/50 shadow-lg p-4"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-border/50"
              >
                <AccordionTrigger className="text-lg font-semibold text-left text-foreground hover:no-underline">
                  <div className="flex items-center">
                    {item.icon}
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ainda com dúvidas? Envie sua mensagem!
          </p>
          <div className="glowing-btn inline-block">
            <div className="btn-inner">
              <Button asChild size="lg">
                <Link href="#contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Tirar mais Dúvidas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}