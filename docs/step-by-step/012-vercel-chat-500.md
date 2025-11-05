# Step-by-Step – Sessão 012 (2025-11-05)

Objetivo: Diagnosticar e corrigir erro 500 no `/api/chat` apenas em produção (Vercel).

## Sintomas
- Localhost: chat funcional.
- Vercel: 500 em `/api/chat` e mensagem genérica no widget.

## Hipóteses
- Variáveis de ambiente não configuradas no projeto (produção) na Vercel (`ABACUS_API_KEY`, etc.).
- Runtime da rota em Edge sem acesso adequado ao provider (necessário Node.js).
- Falhas transitórias do provider ou formato de payload.

## Ações Realizadas
- `src/app/api/chat/route.ts`:
  - `export const runtime = 'nodejs'` para garantir Node Runtime.
  - `export const dynamic = 'force-dynamic'` para evitar qualquer caching indesejado.
  - Loga `process.env.VERCEL_ENV` para confirmar ambiente.
- Orientações para o ambiente Vercel:
  - Configurar em Project Settings → Environment Variables (Production):
    - `ABACUS_API_KEY`
    - `ABACUS_MODEL` (opcional)
    - `ABACUS_BASE_URL` (opcional)
    - `RESEND_API_KEY` (opcional, apenas para envio de briefing)
  - Redeploy do projeto após configurar.

## Próximos Passos
- Se persistir 500: inspecionar logs do Vercel (Functions) e buscar linhas `[CHAT]` com status/text do provider.
- Validar que a rota `/api/chat` está publicada e não está bloqueada por `vercel.json`/`rewrites` (não usamos).
- Considerar retry/backoff em falhas do provider.