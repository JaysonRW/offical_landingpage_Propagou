
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Propagou Negócios',
  description: 'Entenda como a Propagou Negócios coleta, usa e protege suas informações pessoais. Sua privacidade é nossa prioridade.',
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
              Última atualização: 05 de Janeiro de 2026
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introdução</h2>
            <p>
              A Propagou Negócios ("nós", "nosso") está comprometida em proteger a privacidade de seus
              clientes e usuários ("você"). Esta Política de Privacidade descreve como coletamos,
              usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Informações que Coletamos</h2>
            <p>
              Podemos coletar as seguintes informações:
            </p>
            <ul>
              <li>
                <strong>Informações de Contato:</strong> Nome, e-mail, número de telefone (WhatsApp) e
                detalhes da empresa quando você preenche nosso formulário de contato ou interage conosco.
              </li>
              <li>
                <strong>Informações do Projeto:</strong> Detalhes, requisitos e escopo sobre os projetos de
                software, landing pages ou automações que você deseja desenvolver.
              </li>
              <li>
                <strong>Dados de Uso:</strong> Informações sobre como você interage com nosso site,
                coletadas através de cookies e tecnologias de análise para melhorar nossa experiência.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Como Usamos Suas Informações</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul>
              <li>Fornecer, operar e gerenciar nossos serviços de desenvolvimento e automação.</li>
              <li>Comunicar com você sobre seu projeto, atualizações e responder às suas dúvidas.</li>
              <li>Melhorar nosso site, portfólio e ofertas de serviços.</li>
              <li>Enviar informações relevantes sobre tecnologia e negócios, caso você opte por recebê-las.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais,
              exceto nas seguintes circunstâncias:
            </p>
            <ul>
              <li>Com seu consentimento explícito.</li>
              <li>Com parceiros e ferramentas necessárias para a execução do serviço (ex: provedores de hospedagem, APIs de integração), sempre garantindo a segurança dos dados.
              </li>
              <li>Se exigido por lei ou para proteger nossos direitos legais e a segurança de nossos usuários.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Segurança de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas
              informações pessoais contra acesso não autorizado, alteração, divulgação ou
              destruição.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Seus Direitos</h2>
            <p>
              Você tem o direito de solicitar acesso, correção ou exclusão de suas informações pessoais que mantemos. Para
              exercer esses direitos, entre em contato conosco através dos nossos canais oficiais.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies</h2>
            <p>
              Nosso site pode utilizar cookies para melhorar a funcionalidade e a experiência do usuário. Você pode
              gerenciar as preferências de cookies através das configurações do seu navegador a qualquer momento.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou leis aplicáveis. 
              Recomendamos que você revise esta página regularmente.
            </p>

             <h2 className="text-2xl font-bold mt-8 mb-4">9. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail <strong>propagoumkd@gmail.com</strong> ou pelo WhatsApp <strong>(41) 99534-3245</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
