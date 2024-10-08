import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Nosotros',
      href: getPermalink('/#about'),
    },
    {
      text: 'Planes',
      href: getPermalink('/#pricing'),
    },
    {
      text: 'Blog',
      href: getPermalink('/#blog'),
    },
  ],
  actions: [{ text: 'Regístrate', href: 'https://47571431.hs-sites.com/es-pe/qompa-reg%C3%ADstrate-y-transforma-las-finanzas-de-tu-empresa', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [{ text: 'Inicio', href: getPermalink('/') }],
    },
    {
      title: '',
      links: [{ text: 'Nosotros', href: getPermalink('/about') }],
    },
    {
      title: '',
      links: [{ text: 'Planes', href: getPermalink('/pricing') }],
    },
    {
      title: '',
      links: [{ text: 'Blog', href: getPermalink('/blog') }],
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
