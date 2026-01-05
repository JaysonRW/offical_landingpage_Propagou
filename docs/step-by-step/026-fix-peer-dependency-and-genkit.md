# Correção de Dependências e Atualização do Genkit

## Objetivo
Resolver conflitos de dependência (peer dependency) entre `react-day-picker` e `react@19`, e corrigir erros de TypeScript no código do Genkit.

## Mudanças Realizadas

### 1. Atualização do `react-day-picker`
- Atualizado `react-day-picker` para a versão `^9.13.0` para compatibilidade com React 19.
- O comando de instalação anterior falhou devido a conflitos de peer dependency com a versão 8.x.

### 2. Refatoração do Componente `Calendar`
- **Arquivo:** `src/components/ui/calendar.tsx`
- **Mudança:** Adaptado para as breaking changes da versão 9 do `react-day-picker`.
- **Detalhes:**
    - Substituídas as props `IconLeft` e `IconRight` (removidas na v9) pelo componente `Chevron` dentro da prop `components`.
    - O componente `Chevron` renderiza `ChevronLeft` ou `ChevronRight` baseado na prop `orientation`.

### 3. Correção de Erros de TypeScript
- **Arquivo:** `src/components/landing/ContactForm.tsx`
    - Corrigido `defaultValues` para `projectType`: alterado de string vazia `''` para `undefined` para corresponder ao tipo esperado.
- **Arquivo:** `src/app/actions.ts`
    - Adicionado fallback para `fieldErrors` para garantir que sempre retornem strings, evitando erros de tipo quando `fieldErrors` é undefined.

### 4. Atualização do Genkit
- **Arquivo:** `src/ai/genkit.ts`
- **Mudança:** Atualizado para usar a API moderna do Genkit (v1.0+).
- **Detalhes:**
    - Removido `configureGenkit` (obsoleto).
    - Usado `genkit({ plugins: [googleAI()] })` para inicialização.
    - Atualizado `chatFlow` para usar `ai.defineFlow`.
    - Atualizada a chamada `ai.generate` para usar o modelo `'googleai/gemini-1.5-flash'` e estrutura de prompt correta.

## Próximos Passos
- Verificar se a funcionalidade de chat e formulário de contato continua operando corretamente em ambiente de produção.
