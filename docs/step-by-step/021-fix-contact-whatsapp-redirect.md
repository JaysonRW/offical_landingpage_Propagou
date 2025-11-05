# Step-by-Step – Sessão 021 (2025-11-05)

Objetivo: Garantir que o formulário redirecione para o WhatsApp com os conteúdos preenchidos sem bloqueio de pop-up.

## Ações Realizadas
- `src/components/landing/ContactForm.tsx`:
  - Alterado `window.open(state.whatsappUrl, '_blank')` para `window.location.href = state.whatsappUrl`.
  - Motivação: alguns navegadores bloqueiam pop-ups disparados fora do evento direto do usuário; o redirecionamento na mesma aba evita bloqueios e garante a abertura do WhatsApp.

## Resultado Esperado
- Após envio bem-sucedido, o usuário é redirecionado à conversa do WhatsApp com a mensagem formatada (nome, email, tipo de projeto, mensagem).

## Próximos Passos
- Opcional: adicionar fallback criando um `<a>` dinâmico e acionando `.click()` se necessário.
- Confirmar número destino (`5541995343245`) e manter a mensagem formatada.