# Boni Representações — Landing Page

Next.js 15 (App Router) + TypeScript + Tailwind CSS 3.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Publicação

O site é publicado no **GitHub Pages** automaticamente a cada push na `main`
(workflow em `.github/workflows/deploy.yml`):
https://nathanfantini.github.io/boni-representacoes/

O projeto gera um site estático (`output: "export"` em `next.config.ts`) servido em
`/boni-representacoes`. Para um domínio próprio, defina `NEXT_PUBLIC_BASE_PATH=""` no build.

## Onde editar

Todo o conteúdo fica em `src/content.ts`. Antes de divulgar, confirme os itens marcados com **CONFIRMAR**:

- `metrics` — números reais (anos, confecções atendidas, artigos, satisfação)
- `brands` — marcas representadas (hoje DOPTEX e RVB)

Textos de seções (Sobre, Missão/Visão/Valores, CTA) ficam em `src/app/page.tsx`.

## Estrutura

```
src/
  app/
    layout.tsx     fontes (Cormorant Garamond + Manrope), SEO
    page.tsx       seções: Hero, Empresa, Serviços, Diferenciais, Métricas, Clientes, CTA, Rodapé
    globals.css    classes base (botões, eyebrow, animação de entrada)
  components/
    Header.tsx     menu fixo com versão mobile
    Reveal.tsx     animação suave ao rolar
    Counter.tsx    contador animado das métricas
    Icon.tsx       ícones em linha e monograma "B"
  content.ts       todo o conteúdo editável
tailwind.config.ts paleta: ivory, sand (bege), gold, ink (preto), graphite (cinza)
```
