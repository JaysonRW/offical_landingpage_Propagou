# Remoção de API Routes e Geração de Build Estático

## Data: 30/01/2026

## Descrição
Este documento registra as alterações realizadas para remover as rotas de API do projeto e configurar o Next.js para exportação estática, permitindo a hospedagem em qualquer servidor web estático.

## Alterações Realizadas

### 1. Remoção de Dependências de Servidor (Server Actions e API Routes)
- **Arquivo Removido:** `src/app/actions.ts`
  - Este arquivo continha Server Actions (`'use server'`) incompatíveis com `output: 'export'`.
- **Pasta Removida:** `src/app/api`
  - As rotas de API `/api/chat` e `/api/briefing` foram removidas pois dependem de execução no servidor (Node.js runtime), o que não é suportado em exportação estática pura.

### 2. Refatoração do Formulário de Contato
- **Arquivo Alterado:** `src/components/landing/ContactForm.tsx`
  - **Mudança:** A lógica de envio do formulário foi migrada de `Server Actions` para `Client-Side`.
  - **Nova Implementação:**
    - O formulário agora gera a mensagem formatada no navegador do cliente.
    - Utiliza `window.location.href` para redirecionar o usuário diretamente para o WhatsApp Web/App com a mensagem preenchida.
    - Removeu-se a dependência de `useActionState` e `react-dom`.
    - Adicionado estado de carregamento (`isSubmitting`) local.

### 3. Configuração de Exportação Estática
- **Arquivo Alterado:** `next.config.ts`
  - **Adicionado:** `output: 'export'` para instruir o Next.js a gerar arquivos HTML/CSS/JS estáticos na pasta `out`.
  - **Adicionado:** `images: { unoptimized: true }` pois o componente `next/image` padrão requer otimização de imagem sob demanda (servidor), o que não funciona em exportação estática sem um loader externo (como Cloudinary, Imgix, etc.).

### 4. Geração do Build (Pasta DIST)
- Foi executado o comando `npm run build`.
- **Resultado:** Uma pasta chamada `out` foi gerada na raiz do projeto.
- **Conteúdo da pasta `out`:** Contém todos os arquivos necessários (HTML, CSS, JS, Imagens) para hospedar o site. Esta é a pasta "DIST" solicitada.

### 5. Git Push
- As alterações foram commitadas e enviadas para o repositório remoto com a mensagem: `refactor: remove API routes and generate static build`.

## Próximos Passos
- Para implantar o site, basta fazer o upload do conteúdo da pasta `out` para o serviço de hospedagem desejado.
