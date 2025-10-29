import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Quanto tempo leva para entregar o projeto?',
    answer:
      'Uma landing page simples pode ser entregue em até 7 dias. Sistemas mais complexos, como um SaaS, geralmente levam de 30 a 60 dias, dependendo da complexidade. O plano "Start" garante a entrega da landing page em até 15 dias.',
  },
  {
    question: 'Posso parcelar o pagamento?',
    answer:
      'Sim, oferecemos opções de parcelamento no cartão de crédito em até 12x (com acréscimos da operadora) ou um plano de pagamento personalizado com entrada de 50% e o restante na entrega.',
  },
  {
    question: 'Vocês oferecem manutenção e suporte após a entrega?',
    answer:
      'Sim. Todos os planos de SaaS incluem um período de suporte gratuito. Após esse período, oferecemos planos de manutenção mensais para garantir que seu sistema esteja sempre atualizado, seguro e funcionando perfeitamente.',
  },
  {
    question: 'Quais tecnologias vocês utilizam?',
    answer:
      'Utilizamos as tecnologias mais modernas e robustas do mercado, como Next.js/React para o front-end, Node.js para o back-end, e bancos de dados como PostgreSQL ou Firebase/Supabase. A escolha depende da necessidade de cada projeto para garantir escalabilidade e performance.',
  },
  {
    question: 'Preciso ter conhecimento técnico ou de programação?',
    answer:
      'Absolutamente não. Cuidamos de toda a parte técnica para você. Entregamos um produto final intuitivo e, se necessário, fornecemos treinamento para que você e sua equipe possam gerenciar o sistema sem dificuldades.',
  },
  {
    question: 'E se eu precisar de alterações ou novas funcionalidades no futuro?',
    answer:
      'Nossos sistemas são construídos de forma modular, o que facilita a implementação de novas funcionalidades no futuro. Você pode nos contratar por hora ou fechar um novo pacote de desenvolvimento para expandir seu projeto.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background relative overflow-hidden">
       <div 
        className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_40%)] -z-10"
        aria-hidden="true"
       />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Tudo o que você precisa saber antes de começar seu projeto conosco.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-card/50 backdrop-blur-lg border border-border/50 rounded-lg p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className={index === faqItems.length - 1 ? 'border-b-0' : ''}>
                <AccordionTrigger className="text-lg text-left hover:no-underline px-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground px-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
