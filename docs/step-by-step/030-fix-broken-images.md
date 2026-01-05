# Correção de Imagens Quebradas

## Problema
As imagens dos logos dos clientes e capturas de tela dos projetos estavam quebradas, pois os links hospedados no `ibb.co` (ImgBB) expiraram ou não estavam mais acessíveis.

## Solução
Substituí todas as URLs de imagens temporárias por links permanentes do serviço `placehold.co`. Isso garante que o layout não quebre e que os placeholders tenham o tamanho correto e texto identificador.

## Arquivos Modificados

### 1. `src/lib/placeholder-images.json`
- Substituídas todas as URLs `https://i.ibb.co/...` por `https://placehold.co/...`.
- **Logos de Clientes:** Configurados para tamanho `200x80` com fundo branco e texto preto.
- **Projetos:** Configurados para tamanho `800x600` com fundo escuro e texto branco.
- **Fundador:** Configurado para `400x400` com fundo escuro.

## Resultado
As seções "Social Proof" (logos) e "O que construímos" (galeria) agora exibirão placeholders corretos em vez de ícones de imagem quebrada.
