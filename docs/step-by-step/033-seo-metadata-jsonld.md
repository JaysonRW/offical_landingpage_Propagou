# Implementação de Metadados e Dados Estruturados (SEO)

## Data: 30/01/2026

## Descrição
Este documento registra a implementação completa de metadados para SEO, Open Graph (redes sociais) e JSON-LD (Rich Snippets), visando melhorar a apresentação do site ao ser compartilhado e indexado por buscadores.

## Alterações Realizadas

### 1. Atualização do Layout Principal (`src/app/layout.tsx`)
- **Metadados Globais:**
  - Configurado `metadataBase` para resolver URLs absolutas automaticamente (essencial para imagens em links compartilhados).
  - Títulos e descrições otimizados para a marca "PropagouDev".
  - Palavras-chave relevantes adicionadas.
- **Open Graph (Facebook, WhatsApp, LinkedIn):**
  - Adicionado título, descrição, URL, nome do site e localidade.
  - Configurada imagem de compartilhamento (`/images/propagou_logo.png`).
  - URL Base configurada para `https://www.propagounaweb.com.br`.
- **Twitter Cards:**
  - Configurado card `summary_large_image` para exibição otimizada no Twitter/X.
- **JSON-LD (Dados Estruturados):**
  - Inserido script `application/ld+json` com dados da organização (`ProfessionalService`).
  - Inclui nome, logo, descrição, telefone, endereço (estado), horário de funcionamento e perfis sociais.

### 2. Criação de Arquivos de Suporte a SEO (`public/`)
- **`robots.txt`:** Instruções para robôs de busca (Googlebot, Bingbot). Permite indexação de todo o site e aponta para o sitemap.
- **`sitemap.xml`:** Mapa do site básico listando a página inicial, data de modificação e prioridade.

## Como Testar
1. **Open Graph/Compartilhamento:**
   - Use ferramentas como [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) ou [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) inserindo a URL do seu site (após deploy).
   - O preview deve mostrar o logo da PropagouDev e a descrição correta.
2. **Dados Estruturados:**
   - Use o [Google Rich Results Test](https://search.google.com/test/rich-results) para validar o JSON-LD gerado.

## Notas Importantes
- **URL Base:** O `metadataBase` foi configurado como `https://propagou.dev`. Se o domínio final for diferente, altere essa linha no `src/app/layout.tsx`.
- **Imagens:** Certifique-se de que a imagem `public/images/propagou_logo.png` é a que deseja usar para compartilhamentos. O ideal para redes sociais é uma imagem de proporção 1.91:1 (ex: 1200x630 pixels). O logo atual pode aparecer pequeno ou cortado dependendo da plataforma; considere criar um banner específico (`og-image.png`).
