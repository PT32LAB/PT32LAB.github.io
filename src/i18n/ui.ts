export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.vision': 'Vision',
    'nav.why': 'Why',
    'nav.pillars': 'Pillars',
    'nav.location': 'Location',
    'nav.governance': 'Governance',
    'nav.community': 'Community',
    'nav.participate': 'Participate',
    'nav.explore': 'Explore',
    'nav.docs': 'Docs',
    'nav.blog': 'Blog',
    'hero.tagline': 'Build resilience. Preserve what matters.',
    'hero.subtitle': 'An off-grid community in the Bolivian Yungas — techno park, startup incubator, trading house, and technoshamanic retreat center. Semi-autonomous. Open-source. Human-first.',
    'hero.cta': 'Get Involved',
    'hero.learn': 'Read the Vision',
    'paths.builders.title': 'Builders',
    'paths.builders.desc': 'Engineers, makers, developers — build the infrastructure and technology stack for a resilient community.',
    'paths.investors.title': 'Investors',
    'paths.investors.desc': 'Fund the future — monetary investment, IP contributions, or strategic partnerships.',
    'paths.community.title': 'Community',
    'paths.community.desc': 'Share the vision — join as a member, contributor, or advocate for humanistic values.',
    'paths.locals.title': 'Locals',
    'paths.locals.desc': 'Integrate with Coroico — local partnerships, employment, cultural exchange.',
    'footer.tagline': 'Preserving humanistic values through resilient technology and community.',
    'footer.license': 'Open source. Open community. Open future.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.vision': 'Visión',
    'nav.why': 'Por Qué',
    'nav.pillars': 'Pilares',
    'nav.location': 'Ubicación',
    'nav.governance': 'Gobernanza',
    'nav.community': 'Comunidad',
    'nav.participate': 'Participar',
    'nav.explore': 'Explorar',
    'nav.docs': 'Docs',
    'nav.blog': 'Blog',
    'hero.tagline': 'Construir resiliencia. Preservar lo que importa.',
    'hero.subtitle': 'Una comunidad autónoma en los Yungas bolivianos — parque tecnológico, incubadora de startups, casa de comercio y centro de retiro tecnochamánico. Semi-autónomo. Código abierto. Humano primero.',
    'hero.cta': 'Participar',
    'hero.learn': 'Leer la Visión',
    'paths.builders.title': 'Constructores',
    'paths.builders.desc': 'Ingenieros, makers, desarrolladores — construyan la infraestructura y tecnología para una comunidad resiliente.',
    'paths.investors.title': 'Inversores',
    'paths.investors.desc': 'Financiar el futuro — inversión monetaria, propiedad intelectual o alianzas estratégicas.',
    'paths.community.title': 'Comunidad',
    'paths.community.desc': 'Comparte la visión — únete como miembro, colaborador o defensor de valores humanísticos.',
    'paths.locals.title': 'Locales',
    'paths.locals.desc': 'Integración con Coroico — alianzas locales, empleo, intercambio cultural.',
    'footer.tagline': 'Preservando valores humanísticos a través de tecnología resiliente y comunidad.',
    'footer.license': 'Código abierto. Comunidad abierta. Futuro abierto.',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang, key: keyof typeof ui[typeof defaultLang]): string {
  return ui[lang][key] || ui[defaultLang][key];
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}
