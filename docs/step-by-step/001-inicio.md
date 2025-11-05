# Step-by-Step – Sessão 001 (2025-11-05)

Este arquivo documenta ações, decisões e a função dos principais arquivos do projeto. Mantido em pasta separada para rastrear o processo de desenvolvimento e facilitar manutenção.

## Ações Realizadas
- Leitura da estrutura do repositório e arquivos-chave (`package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/ai/genkit.ts`, `src/components/landing/*`).
- Criação do documento técnico `docs/specs.md` com:
  - Visão geral, tecnologias, arquitetura, configurações, chatbot, ambientes, scripts e próximos passos.
- Verificação do consumo do endpoint `/api/genkit/flows/chatFlow` pelo `ChatWidget` e observação da necessidade de confirmar/implementar a rota.

## Função dos Principais Arquivos
- `package.json`: scripts de desenvolvimento (`dev` com Turbopack), build, start e dependências (Next, Tailwind, Genkit, Radix/shadcn, etc.).
- `next.config.ts`: opções de build (ignora TS/ESLint em produção) e padrões remotos de imagens.
- `tailwind.config.ts`: configuração de tema, cores, animações e paths de conteúdo; `darkMode` via classe.
- `tsconfig.json`: `strict`, resolução de módulos, `paths` com `@/*` para `./src/*`.
- `apphosting.yaml`: configuração do Firebase App Hosting (escalabilidade de instâncias).
- `src/app/layout.tsx`: layout global; fontes, `ChatWidget` e `Toaster` inclusos, `lang=pt-BR`.
- `src/app/page.tsx`: composição da landing com seções de conversão (Hero, Social Proof, Projetos, Serviços, Pricing, FAQ, CTA, Footer).
- `src/components/landing/ChatWidget.tsx`: widget de chat; UI e chamada para `/api/genkit/flows/chatFlow` retornando `result.output`.
- `src/ai/genkit.ts`: configuração Genkit + Google Gemini; `defineFlow` `chatFlow` com prompt de sistema e histórico.
- `src/ai/flows/lead-quality-estimation.ts`: fluxo de qualificação de leads usando `zod` e prompts; útil para automação de contato.
- `src/components/landing/*`: componentes de landing (Header, Hero, Pricing, Faq, Footer, etc.).
- `src/components/ui/*`: primitives UI (dialog, sheet, toast, chart, carousel, etc.) com Tailwind.
- `src/lib/*`: utilitários (`utils.ts`, `placeholder-images`), definições.

## Observações e Próximos Passos
- Confirmar existência/implementar handler em `src/app/api/genkit/flows/chatFlow` para o chatbot.
- Não modificar `.env` sem aprovação. Documentar variáveis no `specs.md` (feito).
- Planejar instrumentação de analytics (eventos de CTA, scroll, chat open) com consentimento.

## Log de Decisões
- Manter documentação viva em `docs/specs.md` e logs em `docs/step-by-step/*` para garantir rastreabilidade.
- Evitar arquivos extensos (>300 linhas) e funções longas; dividir conforme necessário.