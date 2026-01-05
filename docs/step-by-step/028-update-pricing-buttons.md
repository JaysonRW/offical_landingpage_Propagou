# Atualização dos Botões de Preços

## Objetivo
Configurar os botões "Escolher Plano" na seção de Preços para redirecionar para o WhatsApp com uma mensagem personalizada baseada no plano selecionado.

## Mudanças Realizadas

### 1. Componente `Pricing.tsx`
- **Arquivo:** `src/components/landing/Pricing.tsx`
- **Mudança:** Atualizado o comportamento dos botões de ação (tanto para planos populares quanto padrão).
- **Detalhes:**
    - Usado `Button asChild` para renderizar um link `<a>` semântico.
    - URL base: `https://wa.me/5541995343245`
    - Mensagem dinâmica: `Olá! Tenho interesse no plano ${plan.name} da Propagou.`
    - Adicionado `target="_blank"` e `rel="noopener noreferrer"` para segurança e UX (abrir em nova aba).

## Resultado
Agora, ao selecionar um plano (ex: "Starter One-Page"), o usuário é levado diretamente para uma conversa no WhatsApp com a equipe de vendas, já com o contexto do plano desejado.
