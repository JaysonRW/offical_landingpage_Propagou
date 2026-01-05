# Atualização do Botão "Quero algo assim"

## Objetivo
Configurar o botão "Quero algo assim" na seção de Projetos para redirecionar para o WhatsApp com uma mensagem personalizada baseada no projeto visualizado.

## Mudanças Realizadas

### 1. Componente `ProjectGallery.tsx`
- **Arquivo:** `src/components/landing/ProjectGallery.tsx`
- **Mudança:** Substituído o componente `Link` (que redirecionava para a seção de contato) por uma tag `a` com link para o WhatsApp API.
- **Detalhes:**
    - URL base: `https://wa.me/5541995343245`
    - Parâmetro `text`: Mensagem codificada via `encodeURIComponent`.
    - Template da mensagem: `Olá! Vi o projeto "${selectedProject.title}" no portfólio da Propagou e tenho interesse em desenvolver um projeto similar.`
- **Limpeza:** Removida a importação não utilizada de `Link` do `next/link`.

## Resultado
Ao clicar no botão "Quero algo assim" dentro do modal de detalhes de um projeto, o usuário será redirecionado para o WhatsApp com uma mensagem pré-preenchida indicando qual projeto despertou seu interesse.
