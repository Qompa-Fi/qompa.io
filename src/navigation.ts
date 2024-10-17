import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '¿Qué ofrece Qompa?',
      href: getPermalink('/#about'),
    },
    {
      text: 'Nuestros planes',
      href: getPermalink('/#pricing'),
    },
    {
      text: 'Nosotros',
      href: getPermalink('/#team'),
    },
  ],
  actions: [
    {
      text: 'Regístrate',
      href: 'http://47571431.hs-sites.com/es-pe/qompa-reg%C3%ADstrate-y-transforma-las-finanzas-de-tu-empresa-1-0-0',
      target: '_self',
      variant: 'primary',
    },
  ],
  showRssFeed: false,
};

export const footerData = {
  links: [
    {
      title: '',
      links: [{ text: '¿Qué ofrece Qompa?', href: getPermalink('/#about') }],
    },
    {
      title: '',
      links: [{ text: 'Nuestros planes', href: getPermalink('/#pricing') }],
    },
    {
      title: '',
      links: [{ text: 'Nosotros', href: getPermalink('/#team2') }],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/qompa' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/qompaio' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Qompa-Fi' },
  ],
  footNote: ``,
};
