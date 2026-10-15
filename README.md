# Boni Representações — Landing Page

Next.js 15 (App Router) + TypeScript + Tailwind CSS 3.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático em out/
```

## Publicação

O site é publicado no **GitHub Pages** automaticamente a cada push na `main`
(workflow em `.github/workflows/deploy.yml`):
https://bonirepresentacoes.com.br

O projeto gera um site estático (`output: "export"` em `next.config.ts`) servido na raiz
do domínio. O arquivo `public/CNAME` diz ao GitHub Pages qual é o domínio.

DNS (Registro.br, zona do domínio): registros A para 185.199.108.153, 185.199.109.153,
185.199.110.153 e 185.199.111.153, e CNAME `www` para `nathanfantini.github.io`.

## Onde editar

Todo o conteúdo fica em `src/content.ts`. Antes de divulgar, confirme os itens marcados com **CONFIRMAR**:

- `metrics` — números reais (anos, confecções atendidas, artigos, satisfação)
- `brands` — marcas representadas (hoje DOPTEX, RVB, Têxtil Lira e Damenny)

Textos de seções (Sobre, Missão/Visão/Valores, CTA) ficam em `src/app/page.tsx`.

## Estrutura

```
src/
  app/
    layout.tsx     fontes (EB Garamond + Manrope), SEO
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
