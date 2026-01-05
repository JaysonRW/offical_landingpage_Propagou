# Step-by-Step – Sessão 024 (2025-01-05)

Objetivo: Substituir o widget de chat por um botão de WhatsApp e atualizar textos da seção de Pricing.

## Ações Realizadas
- `src/components/landing/Pricing.tsx`:
  - Alterado nome do plano "Start" para "Starter One-Page".
  - Alterado "Landing Page profissional" para "Copy + SEO básico".
  - Alterado "Domínio e hospedagem por 1 ano" para "Landing Page otimizadinha".
  - Atualizado título da seção para "Comece com apenas R$400 + resultados rápidos".
- `src/components/landing/WhatsAppButton.tsx`:
  - Criado novo componente para o botão flutuante do WhatsApp.
  - Configurado link direto para o número 41995343245 com mensagem personalizada.
  - Mantido estilo visual similar ao antigo chat (posição, tooltip, cores).
- `src/app/layout.tsx`:
  - Substituído `ChatWidget` por `WhatsAppButton`.

## Resultado
- Site agora direciona contatos diretamente para o WhatsApp.
- Textos da seção de preços mais atrativos e alinhados com a estratégia de vendas.

## Próximos Passos
- Validar conversão do botão de WhatsApp.
