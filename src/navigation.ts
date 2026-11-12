import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Poems',
      href: getPermalink('/#poems'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Read',
      links: [{ text: 'Poems', href: getPermalink('/#poems') }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' }],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://arthelokyo.com"> Arthelokyo</a> · All rights reserved.
  `,
};
