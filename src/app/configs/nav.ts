import type { NavItem } from '@daks.dev/astro.sdk';

export const navbar: NavItem[] = [
  {
    href: '/activity',
    label: 'Деятельность'
  },
  {
    href: '/projects',
    label: 'Проекты'
  },
  {
    href: '/permissions',
    label: 'Допуски'
  },
  {
    href: '/news',
    label: 'Новости'
  },
  {
    href: '/contacts',
    label: 'Контакты'
  }
];

export const sidebar: NavItem[] = [];

export const footer: NavItem[] = [
  {
    href: '/about',
    label: 'О предприятии'
  },
  {
    href: '/partners',
    label: 'Партнёры'
  },
  {
    href: '/feedbacks',
    label: 'Отзывы'
  },
  {
    href: '/privacy',
    label: 'Конфиденциальность'
  }
];

export default {
  navbar,
  sidebar,
  footer
};
