# Atualização do Botão "Tirar mais Dúvidas"

## Objetivo
Configurar o botão "Tirar mais Dúvidas" na seção de FAQ para redirecionar para o WhatsApp com uma mensagem personalizada.

## Mudanças Realizadas

### 1. Componente `Faq.tsx`
- **Arquivo:** `src/components/landing/Faq.tsx`
- **Mudança:** Substituído o componente `Link` (que redirecionava para a seção de contato) por uma tag `a` com link para o WhatsApp API.
- **Detalhes:**
    - URL base: `https://wa.me/5541995343245`
    - Parâmetro `text`: Mensagem codificada via `encodeURIComponent` ("Olá! Gostaria de tirar algumas dúvidas sobre os serviços da Propagou.").
    - Adicionado `target="_blank"` e `rel="noopener noreferrer"`.
- **Limpeza:** Removida a importação não utilizada de `Link` do `next/link`.

## Resultado
Ao clicar no botão "Tirar mais Dúvidas", o usuário será redirecionado para o WhatsApp com uma mensagem pré-definida para iniciar o atendimento.
