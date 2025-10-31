
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Serviço | DevApi',
  description: 'Leia nossos Termos de Serviço para entender as regras e diretrizes para usar nossos serviços.',
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
              Última atualização: 24 de Julho de 2024
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços da DevApi (&quot;nós&quot;, &quot;nosso&quot;), você concorda em cumprir e
              estar vinculado a estes Termos de Serviço. Se você não concordar com estes termos,
              não utilize nossos serviços.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Descrição dos Serviços</h2>
            <p>
              A DevApi fornece desenvolvimento de software personalizado, incluindo, mas não se limitando a,
              sistemas de ERP, landing pages, portais de agendamento e plataformas de análise de dados.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Orçamentos e Pagamentos</h2>
            <p>
              Todos os projetos começarão com uma consulta para definir o escopo e o orçamento. O
              pagamento será estruturado em marcos, com um pagamento inicial necessário para
              iniciar o trabalho. Os detalhes serão definidos no contrato específico de cada projeto.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Propriedade Intelectual</h2>
            <p>
              Após a conclusão e o pagamento integral do projeto, a propriedade intelectual do
              código-fonte e do design final é transferida para o cliente. Reservamo-nos o direito
              de usar o projeto em nosso portfólio, a menos que seja acordado o contrário.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Confidencialidade</h2>
            <p>
              Ambas as partes concordam em manter a confidencialidade de todas as informações
              proprietárias compartilhadas durante o projeto.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              A DevApi não será responsável por quaisquer danos indiretos, incidentais ou
              consequenciais resultantes do uso ou da incapacidade de usar nossos serviços.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Rescisão</h2>
            <p>
              Qualquer uma das partes pode rescindir um contrato de projeto se a outra parte violar
              estes termos. O pagamento será devido pelo trabalho concluído até a data da rescisão.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento.
              Notificaremos os clientes sobre quaisquer alterações significativas. O uso continuado
              dos nossos serviços após tais alterações constitui a sua aceitação dos novos termos.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco
              através do nosso site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
