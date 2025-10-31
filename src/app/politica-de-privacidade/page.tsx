
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | DevApi',
  description: 'Entenda como a DevApi coleta, usa e protege suas informações pessoais. Sua privacidade é nossa prioridade.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-center mb-8">
            Política de Privacidade
          </h1>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground text-center mb-12">
              Última atualização: 24 de Julho de 2024
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introdução</h2>
            <p>
              A DevApi (&quot;nós&quot;, &quot;nosso&quot;) está comprometida em proteger a privacidade de seus
              clientes e usuários (&quot;você&quot;). Esta Política de Privacidade descreve como coletamos,
              usamos, armazenamos e protegemos suas informações pessoais.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Informações que Coletamos</h2>
            <p>
              Podemos coletar as seguintes informações:
            </p>
            <ul>
              <li>
                <strong>Informações de Contato:</strong> Nome, e-mail, número de telefone e
                detalhes da empresa quando você preenche nosso formulário de contato ou solicita um
                orçamento.
              </li>
              <li>
                <strong>Informações do Projeto:</strong> Detalhes e requisitos sobre os projetos de
                software que você deseja desenvolver.
              </li>
              <li>
                <strong>Dados de Uso:</strong> Informações sobre como você interage com nosso site,
                coletadas através de cookies e tecnologias semelhantes (por exemplo, Google Analytics).
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Como Usamos Suas Informações</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul>
              <li>Fornecer e gerenciar nossos serviços.</li>
              <li>Comunicar com você sobre seu projeto e responder às suas perguntas.</li>
              <li>Melhorar nosso site e serviços.</li>
              <li>Enviar comunicações de marketing, caso você opte por recebê-las.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
              exceto nas seguintes circunstâncias:
            </p>
            <ul>
              <li>Com seu consentimento explícito.</li>
              <li>Com prestadores de serviços que nos auxiliam na operação do nosso negócio
                (ex: provedores de hospedagem), que estão obrigados a proteger suas informações.
              </li>
              <li>Se exigido por lei ou para proteger nossos direitos legais.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Segurança de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas
              informações pessoais contra acesso não autorizado, alteração, divulgação ou
              destruição.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para
              exercer esses direitos, entre em contato conosco através dos canais fornecidos em
              nosso site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies</h2>
            <p>
              Nosso site utiliza cookies para melhorar a experiência do usuário. Você pode
              gerenciar as preferências de cookies através das configurações do seu navegador.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre
              quaisquer alterações publicando a nova política em nosso site.
            </p>

             <h2 className="text-2xl font-bold mt-8 mb-4">9. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco
              através do nosso site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
