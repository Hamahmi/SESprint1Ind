import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { title: 'Dashboard', icon: 'nb-home', link: '/dashboard', home: true },
  {
    title: 'Store',
    icon: 'fa fa-shopping-bag',
    link: '/dashboard/items'
  },
  {
    title: 'My Items',
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/store'
  },
  {
    title: 'C1 Items',
    icon: 'fa fa-wheelchair',
    link: '/dashboard/cone'
  },
  {
    title: 'Login',
    icon: 'fa fa-user',
    link: '/dashboard/login'
  },
  {
  	title: 'Sign Up',
    icon: 'fa fa-user-plus',
    link: '/dashboard/signup'
  },
  {
    title: 'About',
    icon: 'fa fa-question-circle',
    link: '/dashboard/about'
  }
  ];
