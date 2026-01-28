# Progresso do Desenvolvimento - Propagou Negócios

Este arquivo documenta o progresso passo a passo do desenvolvimento, incluindo alterações realizadas, arquivos criados e suas funcionalidades.

## 2026-01-26 - Atualização de Contato e Imagens

### Atualização dos Botões de Contato (WhatsApp)
- **Funcionalidade**: Padronização de todos os botões de contato ("Fale com Especialista") para redirecionar diretamente para o WhatsApp com mensagem personalizada.
- **Detalhes**:
  - Número configurado: `5541995343245`
  - Mensagem: "vim através de seu site, quero saber mais sobre os serviços"
- **Arquivos Alterados**:
  - `src/lib/constants.ts`: Arquivo criado para centralizar constantes (URL do WhatsApp).
  - `src/components/landing/Header.tsx`: Botão do menu principal.
  - `src/components/landing/WhatsAppButton.tsx`: Botão flutuante.
  - `src/components/landing/Hero.tsx`: Botão principal da seção hero.

### Migração de Imagens para Local
- **Funcionalidade**: Substituição de imagens externas (placehold.co) por arquivos locais para garantir carregamento correto na Vercel e melhor performance.
- **Arquivos Alterados**:
  - `src/lib/placeholder-images.json`: Atualizado para apontar para `/images/projects/`.
- **Ação Necessária**: Usuário deve adicionar as imagens (moduart.png, etc.) na pasta `public/images/projects`.

### Atualização de Logos de Clientes
- **Funcionalidade**: Atualização dos caminhos das logos dos clientes para refletir os arquivos adicionados na pasta `public/images/`.
- **Arquivos Alterados**:
  - `src/lib/placeholder-images.json`: Atualizado com os novos nomes de arquivos (Cdpisos_logo.png, etc.) e adicionado o cliente "Nobres Bairros".
  - **Repositório Git**: Adicionado `public/images/propagou_logo.png` e confirmada a presença das demais logos no versionamento.

### Correção Logo Propagou Negócios
- **Funcionalidade**: Alteração da logo da Propagou Negócios na seção de prova social para usar a imagem local correta.
- **Arquivos Alterados**:
  - `src/lib/placeholder-images.json`: Atualizado `client-2` para usar `/images/propagou_logo.png`.

### Atualização da Galeria de Projetos
- **Funcionalidade**: Implementação de carrossel de imagens para visualização detalhada dos projetos.
- **Detalhes**:
  - Adicionado suporte a múltiplas imagens por projeto via propriedade `gallery`.
  - Integrado componente `Carousel` no diálogo de detalhes do projeto.
  - Atualizadas as imagens de todos os projetos com os arquivos fornecidos na pasta `public/images/projects`.
- **Arquivos Alterados**:
  - `src/lib/placeholder-images.json`: Adicionados arrays de galeria para todos os projetos.
  - `src/components/landing/ProjectGallery.tsx`: Lógica de renderização do carrossel.


## 2026-01-06 - Configuração de Imagens e Páginas Legais

### Correção de Erro de Imagens na Vercel (Erro 400)
- **Problema**: Imagens hospedadas em `placehold.co` não carregavam no ambiente de produção (Vercel), retornando erro 400, apesar de funcionarem localmente.
- **Causa**: O serviço `placehold.co` retorna imagens no formato SVG por padrão. O Otimizador de Imagens do Next.js bloqueia SVGs externos por motivos de segurança, a menos que configurado explicitamente.
- **Solução**: Atualização do arquivo `next.config.ts` para incluir `dangerouslyAllowSVG: true` e `contentSecurityPolicy`, permitindo o processamento seguro dessas imagens.
- **Arquivo Alterado**: `next.config.ts`

### Criação de Páginas Legais
- **Funcionalidade**: Adição de páginas de Termos de Serviço e Política de Privacidade editáveis.
- **Arquivos Criados/Modificados**:
  - `src/app/termos-de-servico/page.tsx`: Página contendo os termos de uso da plataforma.
  - `src/app/politica-de-privacidade/page.tsx`: Página detalhando a política de proteção de dados.
  - `src/components/landing/Footer.tsx`: Atualizado com links para as novas páginas legais.

### Próximos Passos
- Verificar se o deploy na Vercel resolveu o problema das imagens.
