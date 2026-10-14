import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { ArrowIcon, Icon, InstagramIcon, Monogram } from "@/components/Icon";
import {
  brands,
  contact,
  differentials,
  metrics,
  nav,
  productLines,
  services,
  whatsappLink,
} from "@/content";

export default function Home() {
  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Metrics />
        <Clients />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-32 sm:pt-36 lg:pt-40">
      {/* textura sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.16),transparent_55%)]"
      />
      <div className="container-site relative grid items-center gap-16 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">Representação Têxtil · Brusque, SC</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-serif text-[44px] font-light leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[80px]">
              Tecidos que
              <br />
              <em className="font-normal text-gold-500">elevam</em> a sua
              <br className="hidden sm:block" /> confecção.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-graphite-600 sm:text-lg">
              Malhas básicas e diferenciadas, linha ECO, fitness, tecidos planos nacionais e
              importados e acabamentos tecnológicos. A Boni Representações Têxteis leva as
              melhores indústrias até a sua confecção.
            </p>
          </Reveal>
          <Reveal delay={360} className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Solicitar mostruário
              <ArrowIcon />
            </a>
            <a href="#servicos" className="btn-outline">
              Ver portfólio
            </a>
          </Reveal>
          <Reveal delay={480} className="mt-14 flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite-500">
            <span>Confiança</span>
            <span className="h-1 w-1 rotate-45 bg-gold-400" />
            <span>Prestígio</span>
            <span className="h-1 w-1 rotate-45 bg-gold-400" />
            <span>Qualidade</span>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <HeroArt />
        </Reveal>
      </div>
      <div className="gold-rule" />
    </section>
  );
}

function HeroArt() {
  const highlight = metrics[0];
  return (
    <div className="relative aspect-[4/5] w-full">
      {/* moldura dourada deslocada */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] border border-gold-400/70 sm:translate-x-6 sm:translate-y-6" />
      {/* arco principal */}
      <div className="absolute inset-0 overflow-hidden rounded-t-[999px] bg-gradient-to-b from-sand-200 via-sand-100 to-sand-50 shadow-[0_40px_80px_-40px_rgba(17,17,17,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.75),transparent_60%)]" />
        <div className="absolute inset-x-0 top-[22%] flex justify-center">
          <Monogram className="h-40 w-40 text-gold-500 sm:h-48 sm:w-48" />
        </div>
        <div className="absolute inset-x-0 bottom-14 text-center">
          <p className="font-serif text-3xl font-light tracking-wide text-ink sm:text-4xl">Boni</p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-luxe text-graphite-500">
            Representações
          </p>
        </div>
        <div className="absolute inset-x-10 bottom-8 h-px bg-gold-400/60" />
      </div>

      {/* cartão flutuante */}
      <div className="absolute -left-4 bottom-16 bg-ink px-6 py-5 text-ivory shadow-2xl sm:-left-10">
        <p className="font-serif text-4xl font-light text-gold-300">
          {highlight.prefix}
          {highlight.value}
          {highlight.suffix}
        </p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-graphite-300">
          {highlight.label}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sobre                                                               */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="empresa" className="bg-ivory py-24 lg:py-36">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">A Empresa</span>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
            Do polo têxtil de Brusque para <em className="text-gold-500">confecções de todo o país</em>.
          </h2>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-graphite-600">
              A Boni Representações Têxteis atua a partir de Brusque, um dos maiores polos
              têxteis do Brasil, com um propósito claro: aproximar confeccionistas de indústrias
              que entregam qualidade de verdade, do fio ao acabamento.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-graphite-600">
              Representamos marcas como DOPTEX, RVB e Têxtil Lira e acompanhamos cada cliente de perto: da
              escolha do artigo e da cartela de cores até a chegada do tecido na produção.
            </p>
          </Reveal>

          <Reveal delay={280} className="mt-12 grid gap-px overflow-hidden border border-sand-200 bg-sand-200 sm:grid-cols-3">
            {[
              { k: "Missão", v: "Levar tecidos de alto padrão até as confecções, com atendimento que encanta." },
              { k: "Visão", v: "Ser referência em representação têxtil a partir do polo de Brusque." },
              { k: "Valores", v: "Qualidade, transparência, inovação e sustentabilidade." },
            ].map((item) => (
              <div key={item.k} className="bg-ivory p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-500">
                  {item.k}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-graphite-600">{item.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Serviços                                                            */
/* ------------------------------------------------------------------ */

function Services() {
  return (
    <section id="servicos" className="bg-sand-50 py-24 lg:py-36">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <span className="eyebrow">Portfólio</span>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
              Um portfólio completo para cada coleção da sua confecção.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-graphite-600">
              Da malha básica ao tecido técnico, apresentamos o artigo certo para o produto que
              você quer colocar no mercado.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-sand-200 bg-sand-200 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={i * 100}
              className="group relative flex flex-col bg-sand-50 p-8 transition-colors duration-500 hover:bg-ivory lg:p-10"
            >
              <span className="font-serif text-sm text-graphite-400">0{i + 1}</span>
              <Icon name={s.icon} className="mt-8 h-9 w-9 text-gold-500" />
              <h3 className="mt-8 font-serif text-2xl font-medium text-ink">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-graphite-600">{s.text}</p>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold-400 transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Diferenciais                                                        */
/* ------------------------------------------------------------------ */

function Differentials() {
  return (
    <section id="diferenciais" className="bg-ivory py-24 lg:py-36">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">Diferenciais</span>
            <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
              Por que escolher a <em className="text-gold-500">Boni</em>.
            </h2>
            <p className="mt-6 text-graphite-600">
              Qualidade no tecido e cuidado no atendimento. É assim que construímos parcerias
              duradouras com as confecções.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-10">
              Converse com a gente
            </a>
          </div>
        </Reveal>

        <ul className="lg:col-span-8">
          {differentials.map((d, i) => (
            <Reveal
              key={d.title}
              as="li"
              delay={i * 80}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-sand-200 py-10 last:border-b sm:gap-10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/60 text-gold-500">
                <Icon name={d.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl">{d.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-graphite-600">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Métricas                                                            */
/* ------------------------------------------------------------------ */

function Metrics() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.12),transparent_65%)]"
      />
      <div className="container-site relative">
        <Reveal className="text-center">
          <span className="eyebrow justify-center text-gold-300">Números que falam por nós</span>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-y-14 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 100}
              className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/10" : ""} ${
                i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""
              }`}
            >
              <p className="font-serif text-5xl font-light text-gold-300 sm:text-6xl lg:text-7xl">
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite-300">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Marcas representadas                                                */
/* ------------------------------------------------------------------ */

function Clients() {
  const loop = [...productLines, ...productLines];
  return (
    <section id="marcas" className="bg-sand-50 py-24 lg:py-32">
      <div className="container-site">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">Marcas Representadas</span>
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
            Indústrias que são referência no que fazem.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((b, i) => (
            <Reveal
              key={b.name}
              as="article"
              delay={i * 120}
              className="flex flex-col border border-sand-200 bg-ivory p-8 transition-colors duration-500 hover:border-gold-400 sm:p-12"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-500">{b.tagline}</p>
              <h3 className="mt-6 font-serif text-4xl font-medium tracking-wide text-ink sm:text-5xl">{b.name}</h3>
              <p className="mt-6 max-w-md leading-relaxed text-graphite-600">{b.text}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {b.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-sand-300 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-graphite-600"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-sand-200 bg-ivory">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ivory to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ivory to-transparent sm:w-40" />
        <div className="flex w-max animate-marquee">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              aria-hidden={i >= productLines.length}
              className="flex shrink-0 items-center gap-8 px-8 py-6"
            >
              <span className="whitespace-nowrap font-serif text-2xl italic text-graphite-500">{name}</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA final                                                           */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section id="contato" className="bg-ivory py-24 lg:py-32">
      <div className="container-site">
        <Reveal className="relative overflow-hidden bg-ink px-6 py-20 text-center text-ivory sm:px-12 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 border border-gold-400/30 sm:inset-6"
          />
          <Monogram className="mx-auto h-14 w-14 text-gold-400" />
          <h2 className="mx-auto mt-8 max-w-3xl font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Vamos escolher o tecido da sua <em className="text-gold-300">próxima coleção</em>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-graphite-300">
            Peça seu mostruário, conheça as novidades da estação e encontre o tecido ideal
            para a próxima coleção da sua confecção.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold-400 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-gold-300"
            >
              Falar no WhatsApp
              <ArrowIcon />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-ivory/40 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:border-gold-300 hover:text-gold-300"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Rodapé                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-ivory">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Monogram className="h-10 w-10 text-gold-500" />
            <span className="leading-none">
              <span className="block font-serif text-2xl font-medium">Boni</span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-luxe text-graphite-500">
                Representações
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-graphite-500">
            Malhas, tecidos planos e acabamentos tecnológicos para confecções.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-500">Navegação</p>
          <ul className="mt-6 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-graphite-600 transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-500">Contato</p>
          <ul className="mt-6 space-y-3 text-sm text-graphite-600">
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                WhatsApp {contact.whatsappDisplay}
              </a>
            </li>
            <li>Telefone {contact.phone}</li>
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink"
              >
                <InstagramIcon className="h-4 w-4" />
                {contact.instagramHandle}
              </a>
            </li>
            <li>{contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand-200">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-xs text-graphite-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Boni Representações Têxteis. Todos os direitos reservados.</p>
          <p className="tracking-[0.2em] uppercase">Confiança · Prestígio · Qualidade</p>
        </div>
      </div>
    </footer>
  );
}
