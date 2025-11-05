# Step-by-Step – Sessão 010 (2025-11-05)

Objetivo: Aplicar Opção 1 para evitar falhas de build na Vercel ao tentar coletar página da rota Genkit.

## Ações Realizadas
- Removido `@genkit-ai/next` do `package.json` (evita injeção da rota dinâmica `/api/genkit/[[...genkit]]`).
- Adicionado `.vercelignore` para ignorar artefatos de dev do Genkit:
  - `.genkit/`, `src/ai/dev.ts`, `src/app/api/genkit/`.
- Removida rota `src/app/api/genkit/[[...genkit]]/route.ts` para que o Next não a inclua no build.
- Executados `npm install` e build de produção (`npx next build`) para validação.

## Resultado
- Build bem-sucedido. Rotas ativas listadas:
  - Dinâmicas: `/api/chat`, `/api/briefing`.
  - Páginas estáticas: home e páginas informativas.
- Warnings não bloqueantes relacionados ao OpenTelemetry do Genkit persistem em dev/build, mas não impedem o deploy.

## Observações
- Mantidos os fluxos `src/ai/flows/*` para uso em `actions.ts` (lead-quality-estimation).
- O chatbot principal (Abacus via `/api/chat`) não foi afetado.

## Próximos Passos
- Opcional: migrar `lead-quality-estimation` para Abacus ou heurística local e remover Genkit completamente.
- Avaliar desativação de telemetria do Genkit em `src/ai/genkit.ts` para reduzir ruído de logs.