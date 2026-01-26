# Progresso do Desenvolvimento - Propagou Negócios

Este arquivo documenta o progresso passo a passo do desenvolvimento, incluindo alterações realizadas, arquivos criados e suas funcionalidades.

## 2026-01-26 - Atualização de Contato e Imagens

### Atualização dos Botões de Contato (WhatsApp)
- **Funcionalidade**: Padronização de todos os botões de contato ("Fale com Especialista") para redirecionar diretamente para o WhatsApp com mensagem personalizada.
- **Detalhes**:
  - Número configurado: `5541995343245`
  - Mensagem: "vim atrávez de seu site, quero saber mais sobre os serviços"
- **Arquivos Alterados**:
  - `src/components/landing/Header.tsx`: Botão do menu principal.
  - `src/components/landing/WhatsAppButton.tsx`: Botão flutuante.
  - `src/components/landing/Hero.tsx`: Botão principal da seção hero.

### Migração de Imagens para Local
- **Funcionalidade**: Substituição de imagens externas (placehold.co) por arquivos locais para garantir carregamento correto na Vercel e melhor performance.
- **Arquivos Alterados**:
  - `src/lib/placeholder-images.json`: Atualizado para apontar para `/images/projects/`.
- **Ação Necessária**: Usuário deve adicionar as imagens (moduart.png, etc.) na pasta `public/images/projects`.

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
