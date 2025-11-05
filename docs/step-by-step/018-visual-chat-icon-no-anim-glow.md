# Step-by-Step – Sessão 018 (2025-11-05)

Objetivo: Remover animação do ícone do chat e deixar apenas o glow (sombra difusa) no círculo, mantendo contraste e interação.

## Ações Realizadas
- `src/components/landing/ChatWidget.tsx`:
  - Removida `motion-safe:animate-pulse` e o gradiente.
  - Mantido o contorno `ring-2 ring-primary/40` e aplicado glow com `shadow-[0_0_24px_rgba(255,255,255,0.20)]`.
  - Ícone permanece maior (56x56) e com `drop-shadow-md`.

## Resultado
- Círculo com contorno e glow sutil, sem animação.
- Tooltip e abertura do chat preservadas.

## Próximos Passos
- Ajustar intensidade do glow conforme tema (dark/light) se necessário.
- Avaliar responsividade do tamanho do container e do ícone em diferentes breakpoints.