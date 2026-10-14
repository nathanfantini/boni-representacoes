/**
 * Conteúdo da landing page — edite tudo aqui.
 * Dados tirados do Instagram @bonirepresentacoess.
 * Itens marcados com "CONFIRMAR" precisam ser validados com a Boni antes de publicar.
 */

export const contact = {
  whatsapp: "5547991230083",
  whatsappDisplay: "(47) 99123-0083",
  phone: "(47) 3252-1573",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de conhecer os tecidos e malhas que a Boni representa.",
  instagram: "https://www.instagram.com/bonirepresentacoess/",
  instagramHandle: "@bonirepresentacoess",
  address: "Rua Ewaldo Bruns, 140 · Brusque, SC · 88352-720",
  city: "Brusque · Santa Catarina",
};

export const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const nav = [
  { label: "A Empresa", href: "#empresa" },
  { label: "Portfólio", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Marcas", href: "#marcas" },
  { label: "Contato", href: "#contato" },
];

export type IconName =
  | "handshake"
  | "portfolio"
  | "chart"
  | "compass"
  | "shield"
  | "clock"
  | "star"
  | "users"
  | "leaf"
  | "thread";

/** Linhas de produto (bio do Instagram + posts). */
export const services: {
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    icon: "thread",
    title: "Malhas básicas e diferenciadas",
    text: "Malhas para o dia a dia da confecção e artigos com toque, caimento e acabamento especiais, incluindo a linha de moletons RVB.",
  },
  {
    icon: "portfolio",
    title: "Tecidos planos",
    text: "Tecidos planos nacionais e importados para camisaria, moda e alfaiataria, com opções em algodão e misturas com poliéster.",
  },
  {
    icon: "users",
    title: "Workwear e uniformes",
    text: "Tecidos profissionais DOPTEX para quem produz uniformes premium, com resistência, conforto e boa apresentação no uso diário.",
  },
  {
    icon: "leaf",
    title: "Fitness e linha ECO",
    text: "Artigos para moda fitness e opções sustentáveis para marcas que querem unir desempenho e responsabilidade ambiental.",
  },
];

export const differentials: {
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    icon: "shield",
    title: "Acabamentos tecnológicos",
    text: "Tecidos com tratamentos funcionais, como fio de poliamida antiviral e antibacteriano, para produtos que entregam mais ao consumidor final.",
  },
  {
    icon: "star",
    title: "Marcas com tradição",
    text: "Representamos indústrias consolidadas, como a RVB, com quase três décadas de história, e a DOPTEX, referência em inovação do tear ao vestir.",
  },
  {
    icon: "compass",
    title: "Tendência na mão do confeccionista",
    text: "Acompanhamos cartelas de cor e lançamentos de cada estação para ajudar sua coleção a sair na frente.",
  },
  {
    icon: "handshake",
    title: "Atendimento e encantamento",
    text: "Atendimento próximo, mostruário completo e acompanhamento do pedido à entrega, direto do polo têxtil de Brusque.",
  },
];

// CONFIRMAR: números reais com a Boni antes de publicar
export const metrics: { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 25, prefix: "+", label: "anos de mercado" },
  { value: 300, prefix: "+", label: "confecções atendidas" },
  { value: 500, prefix: "+", label: "artigos no portfólio" },
  { value: 98, suffix: "%", label: "de clientes satisfeitos" },
];

/** Marcas representadas (vistas nos posts do Instagram). */
export const brands: { name: string; tagline: string; text: string; tags: string[] }[] = [
  {
    name: "DOPTEX",
    tagline: "Inovação do tear ao vestir",
    text: "Tecidos planos para camisaria, linha Workwear e tecidos profissionais para uniformes premium.",
    tags: ["Camisaria", "Workwear", "Uniformes"],
  },
  {
    name: "RVB",
    tagline: "Quase 30 anos de história",
    text: "Malhas e moletons com variedade de cores, artigos diferenciados e compromisso com uma produção vegana.",
    tags: ["Malhas", "Moletons", "Vegana"],
  },
  // CONFIRMAR: descrição e linhas da Têxtil Lira
  {
    name: "Têxtil Lira",
    tagline: "Indústria têxtil parceira",
    text: "Tecidos para confecções, apresentados com o atendimento próximo e o mostruário da Boni.",
    tags: ["Tecidos", "Confecção"],
  },
  // CONFIRMAR: descrição e linhas da Dameny
  {
    name: "Dameny",
    tagline: "Indústria têxtil parceira",
    text: "Mais uma indústria do portfólio Boni, com artigos selecionados para confecções que buscam qualidade.",
    tags: ["Tecidos", "Confecção"],
  },
];

/** Faixa em movimento com as linhas de produto. */
export const productLines: string[] = [
  "Malhas básicas",
  "Malhas diferenciadas",
  "Texturas",
  "Fitness e wellness",
  "Moletons",
  "Tecidos planos",
  "Linha profissional",
  "Tactel UV e impermeável",
  "Elásticos",
  "Linha ECO",
  "Antiviral e antibacteriano",
];
