# Step-by-Step – Sessão 005 (2025-11-05)

Objetivo: Depurar erro 500 no `/api/chat` e restaurar comunicação do bot.

## Evidências (Navegador)
- 500 em `:9003/api/chat`, mensagem padrão do ChatWidget.
- 400 em `image:1` (não relacionado ao chat).
- Warnings `THREE.Material: parameter 'vertexColors' undefined` (não relacionado ao chat).

## Hipóteses (5–7)
- `ABACUS_API_KEY` ausente ou inválida.
- URL do Abacus incorreta (espaços/backticks) ou indisponível.
- Payload `messages` com papéis incorretos (não mapeados para `user/assistant`).
- Erro interno ao enviar briefing (se JSON) por falta de `RESEND_API_KEY`.
- Falha de rede ou bloqueio TLS na chamada do servidor.
- Interferência de telemetria GCP (Genkit) causando ruído nos logs.

## Ações
- Instrumentado logs em `src/app/api/chat/route.ts` para:
  - Ausência de `ABACUS_API_KEY`.
  - Payload enviado (`baseUrl`, `model`, `messagesCount`).
  - Erros do provedor (status/text).
  - Fluxo de envio de briefing.
- Conferidos logs do servidor dev: diversos erros de telemetria GCP (não bloqueantes).

## Causas Mais Prováveis
- `ABACUS_API_KEY` ausente/ inválida (coincide com 500 imediato e exemplo público "Invalid API Key").
- URL incorreta; deve ser exatamente `https://routellm.abacus.ai/v1/chat/completions`.

## Próximos Passos
- Configurar `ABACUS_API_KEY` e (opcional) `ABACUS_MODEL`, `ABACUS_BASE_URL`.
- Configurar `RESEND_API_KEY` para envio de briefing.
- Reiniciar servidor dev e testar.
- Após corrigido, remover logs adicionais do endpoint.