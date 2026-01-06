
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Serviço | Propagou Negócios',
  description: 'Leia nossos Termos de Serviço para entender as regras e diretrizes para usar os serviços da Propagou Negócios.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-center mb-8">
            Termos de Serviço
          </h1>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground text-center mb-12">
              Última atualização: 05 de Janeiro de 2026
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços da Propagou Negócios ("nós", "nosso"), você concorda em cumprir e
              estar vinculado a estes Termos de Serviço. Se você não concordar com estes termos,
              por favor, não utilize nossos serviços.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Descrição dos Serviços</h2>
            <p>
              A Propagou Negócios fornece soluções digitais, incluindo desenvolvimento de Landing Pages de alta conversão,
              sistemas web personalizados (SaaS, Portais), automação de processos e integrações de API.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Orçamentos e Contratação</h2>
            <p>
              A contratação de serviços é realizada mediante aprovação de orçamento e/ou contrato de prestação de serviços. 
              Os prazos, valores e escopo serão definidos especificamente para cada projeto, garantindo transparência e alinhamento de expectativas.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Propriedade Intelectual</h2>
            <p>
              Salvo disposição em contrário no contrato específico:
            </p>
            <ul>
                <li>A Propagou Negócios retém os direitos sobre metodologias, códigos-base e bibliotecas proprietárias utilizadas.</li>
                <li>O cliente adquire o direito de uso e, após quitação integral, a propriedade sobre o produto final personalizado desenvolvido especificamente para ele.</li>
                <li>Reservamo-nos o direito de exibir o trabalho realizado em nosso portfólio.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Confidencialidade</h2>
            <p>
              Comprometemo-nos a manter o sigilo de todas as informações confidenciais e estratégicas do cliente 
              compartilhadas durante a execução do projeto, utilizando-as apenas para fins de entrega do serviço contratado.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              A Propagou Negócios dedica seus melhores esforços para entregar serviços de alta qualidade e livres de erros. 
              No entanto, não nos responsabilizamos por danos indiretos, lucros cessantes ou falhas decorrentes de mau uso, 
              alterações por terceiros não autorizados ou instabilidades de serviços externos (APIs, hospedagens de terceiros).
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Suporte e Manutenção</h2>
            <p>
              O período de garantia e suporte técnico está definido na proposta comercial de cada projeto. 
              Manutenções evolutivas ou correções fora do escopo original ou do período de garantia poderão ser objeto de novo orçamento.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Alterações nos Termos</h2>
            <p>
              Podemos atualizar estes Termos de Serviço periodicamente. O uso continuado
              dos nossos serviços após tais alterações constitui a sua aceitação dos novos termos.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos de Serviço, entre em contato conosco através do e-mail <strong>propagoumkd@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
