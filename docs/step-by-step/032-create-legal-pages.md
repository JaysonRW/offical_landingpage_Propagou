# Criação de Páginas Legais

## Objetivos
Criar e configurar as páginas de "Termos de Serviço" e "Política de Privacidade" para estarem em conformidade com as boas práticas e refletirem a identidade da "Propagou Negócios".

## Ações Realizadas

### 1. Atualização da Política de Privacidade (`src/app/politica-de-privacidade/page.tsx`)
- Substituído o texto genérico "DevApi" por "Propagou Negócios".
- Atualizada a data para Janeiro de 2026.
- Inserido e-mail de contato (`propagoumkd@gmail.com`) e WhatsApp (`(41) 99534-3245`).
- Detalhamento sobre coleta de dados (nome, email, whatsapp) e finalidade (projetos, contato).

### 2. Atualização dos Termos de Serviço (`src/app/termos-de-servico/page.tsx`)
- Substituído o texto genérico por termos específicos para agência de software/landing pages.
- Incluídas cláusulas sobre Propriedade Intelectual (cliente dono do produto final), Confidencialidade e Limitação de Responsabilidade.
- Adicionadas informações sobre Orçamentos e Contratação.

### 3. Linkagem no Rodapé (`src/components/landing/Footer.tsx`)
- Substituídos os links mortos (`#`) por componentes `Link` do Next.js apontando para as rotas corretas:
    - `/termos-de-servico`
    - `/politica-de-privacidade`

## Resultado
O site agora possui uma estrutura legal básica funcional e acessível através do rodapé, transmitindo maior profissionalismo e segurança aos visitantes.
