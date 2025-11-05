# Especificações Técnicas – Propagou Landing Page (2025)

Última atualização: 2025-11-05

## Visão Geral
- Projeto `Next.js 15` com `App Router`, orientado a componentes, focado em landing page de alta conversão.
- UI baseada em `Tailwind CSS` e `shadcn/ui` (Radix UI), com ícones `lucide-react`.
- Integração de chatbot via `Genkit` com `Google Gemini` e telemetria do Firebase.
- Scripts de desenvolvimento e build prontos para `Turbopack` e produção.

## Tecnologias Principais
- Framework: `next@15.3.3`, `react@18.3.1`, `react-dom@18.3.1`.
- Estilos: `tailwindcss@3.4.1`, `tailwindcss-animate`, `globals.css`, tokens CSS via variáveis.
- UI/UX: `@radix-ui/*` (dialog, sheet, toast, accordion, etc.), `shadcn/ui` com aliases configurados em `components.json`.
- Ícones: `lucide-react`.
- Charts e interações: `recharts`, componentes customizados em `src/components/ui/chart.tsx`.
- Carrossel: `embla-carousel-react`.
- Efeitos visuais: `three`, `vanta` (ex.: `VantaBackground`).
- AI/Chatbot: `@genkit-ai/*`, `@google/generative-ai`, `@ai-sdk/google`.
- Validação: `zod`, `react-hook-form`.
- Infra/Hosting: `Firebase App Hosting` (arquivo `apphosting.yaml`).

## Arquitetura e Estrutura
- Entradas:
  - `src/app/layout.tsx`: layout raiz, fontes, `ChatWidget` e `Toaster` globais.
  - `src/app/page.tsx`: composição da landing (`Header`, `Hero`, `SocialProof`, `ProjectGallery`, `Services`, `Pricing`, `Faq`, `CtaSection`, `Footer`).
- Componentes de Landing: `src/components/landing/*`.
- Componentes UI: `src/components/ui/*` (baseados em Radix/shadcn, estilizados com Tailwind).
- Hooks: `src/hooks/*` (ex.: `use-toast`, `use-mobile`).
- Lib: `src/lib/*` (utils, imagens placeholder, definições).
- AI: `src/ai/genkit.ts` (config do Genkit, flow `chatFlow`), `src/ai/flows/*` (ex.: `lead-quality-estimation`).
- API: endpoint esperado para o Chat em `/api/genkit/flows/chatFlow` (consumido pelo `ChatWidget`).

## Chatbot (Genkit + Gemini)
- `src/ai/genkit.ts`:
  - Configura `googleAI` (`apiVersion: v1beta`), habilita telemetria Firebase.
  - Define `HistorySchema` e o `defineFlow` `chatFlow` com prompt de sistema orientado à marca.
- `src/components/landing/ChatWidget.tsx`:
  - UI do chat, estado, envio de mensagens.
  - Faz `POST` para `/api/genkit/flows/chatFlow` com `{ input: { history } }` e espera `result.output` string.
- Observação: verificar/implementar handler de rota em `src/app/api/genkit/flows/chatFlow` se não existir.

## Configurações
- `next.config.ts`:
  - Ignora erros TS/ESLint no build; configura `images.remotePatterns` (Unsplash, Picsum, etc.).
- `tailwind.config.ts`:
  - `darkMode: 'class'`, extensões de tema (cores via CSS vars, animações), `content` apontando para `src/*`.
- `components.json`:
  - Aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`.
- `tsconfig.json`:
  - `paths` com `@/* -> ./src/*`, `moduleResolution: bundler`, `strict: true`.

## Ambientes & Variáveis
- Ambientes: `dev`, `test`, `prod`.
- Variáveis esperadas (não criar nem sobrescrever `.env` sem aprovação):
  - `GOOGLE_API_KEY` (Gemini/Google GenAI),
  - Possíveis credenciais Firebase para telemetria (se utilizadas).
- Gitignore já exclui `.env*` e pastas `.genkit/*`.

## Scripts (package.json)
- `dev`: `next dev --turbopack -p 9002`.
- `genkit:dev`: `genkit start -- tsx src/ai/dev.ts` (ambiente local Genkit).
- `genkit:watch`: `genkit start -- tsx --watch src/ai/dev.ts`.
- `build`: `NODE_ENV=production next build`.
- `start`: `next start`.
- `lint`: `next lint`.
- `typecheck`: `tsc --noEmit`.

## Padrões de Conversão (LP)
- Hero com proposta de valor clara e CTA acima da dobra.
- Social proof, projetos e serviços com evidências visuais.
- Pricing com diferenciação de planos e CTA consistente.
- FAQ reduz objeções; CTA final reforça ação.
- Chatbot visível e não intrusivo (botão flutuante) para capturar leads.

## Próximos Passos Recomendados
- Verificar/implementar rota `/api/genkit/flows/chatFlow` (se ainda não presente).
- Adicionar monitoramento de eventos (ex.: cliques em CTAs) com analytics consentido.
- Criar página de contato integrada com `lead-quality-estimation` para qualificação automática.
- Ajustar metatags/OG com imagens e textos da marca Propagou.

## Histórico de Atualizações
- 2025-11-05: Documento inicial criado. Mapeamento de stack, arquitetura e chatbot. Sem alterações de UI.