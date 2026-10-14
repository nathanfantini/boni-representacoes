# Boni Representações — Landing Page

Next.js 15 (App Router) + TypeScript + Tailwind CSS 3.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Deploy recomendado: Vercel (importar o repositório, sem configuração extra).

## Onde editar

Todo o conteúdo fica em `src/content.ts`. Antes de publicar, troque os itens marcados com **TROCAR**:

- `contact.whatsapp` — número com DDI e DDD, só dígitos (ex.: `5547999999999`)
- `contact.email` e `contact.region`
- `metrics` — números reais (anos, clientes, marcas, satisfação)
- `clients` — nomes das marcas/clientes. Para usar logos, coloque os arquivos em
  `public/clientes/` e troque o `<span>` da seção Clientes em `src/app/page.tsx` por `<Image>`.

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
