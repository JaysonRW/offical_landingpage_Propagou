# Especificações Técnicas – Propagou Landing Page (2025)

Última atualização: 2025-11-05

## Visão Geral
- Projeto `Next.js 15` com `App Router`, focado em landing page de alta conversão.
- UI com `Tailwind CSS` e `shadcn/ui` (Radix UI), ícones `lucide-react`.
- Chatbot: integração via `RouteLLM (Abacus)` usando modelo `Gemini 2.5 Flash`.
- Fluxos auxiliares (ex.: qualificação de leads) continuam disponíveis via `Genkit`.
- Hospedagem/infra compatível com `Firebase App Hosting`.

## Tecnologias Principais
- Framework: `next@15.3.3`, `react@18.3.1`, `react-dom@18.3.1`.
- Estilos: `tailwindcss@3.4.1`, animações utilitárias e `globals.css`.
- UI/UX: `@radix-ui/*`, `shadcn/ui` com aliases em `components.json`.
- Ícones: `lucide-react`.
- Carrossel: `embla-carousel-react`.
- AI/Chatbot:
  - Chat principal: `RouteLLM (Abacus)` → endpoint próprio (`/api/chat`).
  - Fluxos auxiliares: `@genkit-ai/*` (e.g., `lead-quality-estimation`).
- Validação: `zod` (em fluxos e possíveis futuras validações de briefing).

## Arquitetura e Estrutura
- Entradas:
  - `src/app/layout.tsx`: layout global, fontes, `ChatWidget` e `Toaster`.
  - `src/app/page.tsx`: composição de seções (Header, Hero, SocialProof, ProjectGallery, Services, Pricing, Faq, CTA, Footer).
- Componentes de Landing: `src/components/landing/*`.
- Componentes UI: `src/components/ui/*` (Radix/shadcn estilizados com Tailwind).
- Lib: `src/lib/*` (utils, imagens, definições, briefing util).
- AI:
  - `src/app/api/chat/route.ts`: core do chat, integra `Abacus` e aplica persona consultiva.
  - `src/app/api/briefing/route.ts`: envio de briefing por e-mail (Resend).
  - `src/lib/briefing.ts`: tipo, validação básica e envio de briefing.
  - `src/ai/genkit.ts` e `src/ai/flows/*`: fluxos auxiliares via Genkit (não usados no chat principal).

## Chatbot (Abacus + Gemini 2.5 Flash)
- Endpoint `/api/chat`:
  - Recebe `{ input: { history } }` com histórico `user/model`.
  - Mapeia para `system/user/assistant`, aplica prompt consultivo (PropagouDev), foca em sites/LPs/SaaS/EMS e estratégia de vendas.
  - Retorna `{ output }` string. Se o modelo responder com JSON de briefing válido, envia e-mail automaticamente via Resend e devolve `{ output, meta: { briefingSent: true, emailId } }`.
- Widget (`src/components/landing/ChatWidget.tsx`):
  - UI de chat, estado e envio de mensagens.
  - Botão flutuante atualizado com animação sutil (hover scale) e tooltip “Vamos conversar!”.
  - Ícone/avatar do assistente usando `https://i.ibb.co/rGQTVMqv/icone-chatbot-landing-Site.png`.

## Configurações
- `next.config.ts`:
  - Ignora erros TS/ESLint no build; `images.remotePatterns` inclui `i.ibb.co`, `Unsplash`, `Picsum`, etc.
- `components.json`:
  - Aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`.
- `tsconfig.json`:
  - `paths` com `@/* -> ./src/*`, `moduleResolution: bundler`, `strict: true`.

## Ambientes & Variáveis
- Ambientes: `dev`, `test`, `prod`.
- Variáveis esperadas (não modificar `.env` sem aprovação):
  - `ABACUS_API_KEY` (RouteLLM Abacus – chat principal).
  - `ABACUS_MODEL` (opcional, padrão `gemini-2.5-flash`).
  - `ABACUS_BASE_URL` (opcional, padrão `https://routellm.abacus.ai/v1/chat/completions`).
  - `RESEND_API_KEY` (envio de e-mail de briefing).
  - `EMAIL_FROM` (opcional, ex.: `briefing@propagou.dev`).
  - `GOOGLE_API_KEY` (se fluxos Genkit/Gemini auxiliares estiverem ativos).

## Scripts (package.json)
- `dev`: `next dev --turbopack -p 9003`.
- `build`: `NODE_ENV=production next build`.
- `start`: `next start`.
- `lint`: `next lint`.
- `typecheck`: `tsc --noEmit`.
- (Genkit opcional) `genkit:dev`, `genkit:watch` para flows.

## Padrões de Conversão (LP)
- Hero com proposta de valor clara e CTA acima da dobra.
- Social proof, projetos e serviços com evidências visuais.
- Pricing com diferenciação de planos e CTA consistente.
- FAQ reduz objeções; CTA final reforça ação.
- Chatbot visível, com tooltip e ícone da marca, para captar leads.

## Próximos Passos Recomendados
- Implementar streaming (SSE) em `/api/chat` com fallback non-stream.
- Validar `Briefing` com `zod` e adicionar logs estruturados/ID de correlação.
- Rate limiting e métricas por ambiente; observabilidade centralizada.
- Opcional: migrar fluxos Genkit/Gemini para o mesmo provedor do chat ou desativar telemetria GCP.
- Adicionar fallback local para o ícone do chat (caso `i.ibb.co` esteja indisponível).

## Histórico de Atualizações
- 2025-11-05: Migração do chat para `Abacus (Gemini 2.5 Flash)`, criação do endpoint `/api/chat`, envio automático de briefing via Resend, atualização de ícone/nome/tooltip/animação no `ChatWidget`, documentação step-by-step.