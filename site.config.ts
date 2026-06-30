/**
 * Arquivo de configuração por domínio.
 * Para replicar em novo site: copie este arquivo, ajuste todos os campos, e atualize astro.config.mjs > site.
 */
export const siteConfig = {
  name: "Retatrutida.net",
  domain: "https://retratutida.net",
  tagline: "Guia completo sobre Retatrutida — entenda, compare e compre com segurança",

  brand: {
    primary: "#1b3a5c",
    accent: "#e05a2b",
    accentHover: "#c44d22",
    bg: "#f7f8fa",
    surface: "#ffffff",
    text: "#1a1a2e",
    textMuted: "#4a5568",
    borderRadius: "0.5rem",
    fontHeading: "'Figtree', system-ui, sans-serif",
    fontBody: "'Noto Sans', system-ui, sans-serif",
  },

  affiliate: {
    url: "https://pharmazil.com",
    ctaLabel: "Ver no Pharmazil →",
    ctaLabelShort: "Comprar",
    utmSource: "retratutida-net",
    utmMedium: "affiliate",
    utmCampaign: "organic",
  },

  seo: {
    defaultTitle: "Retatrutida: Guia Completo, Comparações e Onde Comprar com Segurança",
    defaultDescription:
      "Tudo sobre Retatrutida (triplo agonista GLP-1): o que é, como funciona, diferenças entre marcas Synedica e Pepking, e onde comprar com garantia de procedência.",
    keywords: [
      "retatrutida",
      "retratutida",
      "retatrutide",
      "retatrutida o que é",
      "retatrutida como funciona",
      "retatrutida original",
      "synedica retatrutida",
      "pepking retatrutida",
    ],
    locale: "pt_BR",
    twitterHandle: "",
    ogImage: "/og-default.png",
  },

  nav: [
    { label: "Início", href: "/" },
    { label: "Comparações", href: "/comparar/" },
    { label: "Glossário", href: "/glossario/" },
    { label: "Blog", href: "/blog/" },
    { label: "Reviews", href: "/review/" },
  ],

  organization: {
    name: "Retatrutida.net",
    url: "https://retratutida.net",
    logo: "/logo.svg",
    contactEmail: "",
    sameAs: [],
  },

  footer: {
    disclaimer:
      "Este site tem fins informativos e é afiliado ao Pharmazil. As informações aqui não substituem orientação médica. Consulte um profissional de saúde antes de iniciar qualquer tratamento.",
    links: [
      { label: "Política de Privacidade", href: "/privacidade/" },
      { label: "Sobre", href: "/sobre/" },
      { label: "Contato", href: "/contato/" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
