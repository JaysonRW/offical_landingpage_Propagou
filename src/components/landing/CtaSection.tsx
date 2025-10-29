import { ContactForm } from './ContactForm';

export default function CtaSection() {
  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--background)) 30%, hsl(var(--background)) 70%, hsl(327, 82%, 60% / 0.1))'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-headline mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
            Seu negócio merece uma solução que funcione de verdade
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Vamos conversar? Preencha o formulário abaixo e receba uma análise inicial do seu projeto.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-2xl border border-border/50">
            <ContactForm />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Resposta em até 2 horas úteis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
