# Step-by-Step – Sessão 016 (2025-11-05)

Objetivo: Adicionar animação e círculo ao redor do ícone do chat, sem fundo, e aumentar o tamanho para melhor contraste.

## Ações Realizadas
- `src/components/landing/ChatWidget.tsx`:
  - Envolvido o `Image` em um `div` com `rounded-full` e `ring-2 ring-white/30` (contorno sem preenchimento).
  - Aplicada animação sutil com `animate-pulse` ao contorno.
  - Aumentado o ícone para `56x56` dentro de um container `h-16 w-16`.
  - Mantido o `variant="ghost"` no botão para não ter fundo.

## Resultado
- Ícone maior, com contorno animado discreto e sem fundo, mantendo tooltip e abertura do chat.

## Próximos Passos
- Ajustar intensidade/velocidade da animação se necessário (`motion-safe:` para respeitar acessibilidade).
- Definir tamanhos responsivos (ex.: `md:h-18 md:w-18` com ícone proporcional).