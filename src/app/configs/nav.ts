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
  /*
  {
    href: '/partners',
    label: 'Партнёры'
  },
  {
    href: '/feedbacks',
    label: 'Отзывы',
  },
  {
    href: '/articles',
    label: 'Инфрмация',
  },
  {
    href: '/news',
    label: 'Новости',
  },
  */
  {
    href: '/contacts',
    label: 'Контакты'
  }
];

export const sidebar: NavItem[] = [];

export const footer: NavItem[] = [
  /*
  {
    href: '/admin',
    label: 'панель администратора' // &#128736;
  },
  {
    href: '/regulation',
    label: 'Регламент'
  },
  */
  {
    href: '/permissions',
    label: 'Допуски'
  },
  {
    href: '/contacts',
    label: 'Контакты'
  }
];

export default {
  navbar,
  sidebar,
  footer
};
