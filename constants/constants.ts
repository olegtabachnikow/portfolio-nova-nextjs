import { ButtonItemLangType, ButtonItemLinkType } from '@/types/types';
import { ProjectType } from '@/types/types';

export const pageLinkList: ButtonItemLinkType[] = [
  {
    page: 'menu.intro',
    image: 'start.svg',
    alt: 'intro icon',
    link: '/',
  },
  {
    page: 'menu.about',
    image: 'user.svg',
    alt: 'about icon',
    link: '/nova',
  },
  {
    page: 'menu.projects',
    image: 'projects.svg',
    alt: 'project icon',
    link: '/projects',
  },
];

export const langButtonList: ButtonItemLangType[] = [
  {
    lang: 'iw',
    image: 'israel.svg',
    alt: 'israel flag',
  },
  {
    lang: 'en',
    image: 'england.svg',
    alt: 'england flag',
  },
  {
    lang: 'ru',
    image: 'ru.svg',
    alt: 'russian flag',
  },
];

export const projectData: ProjectType[] = [
  {
    image: '/images/react-icons.png',
    title: 'React Social Icons',
    description: 'projects.item1',
    link: 'https://www.npmjs.com/package/react-custom-social-icons',
    gitLink: 'https://github.com/olegtabachnikow/react-custom-social-icons',
    isNpm: true,
    withPreview: true,
  },
  {
    image: '/images/codebook.png',
    title: 'React Codebook',
    description: 'projects.item2',
    link: 'https://www.npmjs.com/package/react-codebook',
    gitLink: 'https://github.com/olegtabachnikow/react-codebook',
    isNpm: true,
    withPreview: true,
  },
  {
    image: '/images/lol.png',
    title: 'League of Legends DB',
    description: 'projects.item3',
    link: 'https://lol-db-tau.vercel.app/',
    gitLink: 'https://github.com/olegtabachnikow/lol-db/tree/master',
    isNpm: false,
    withPreview: true,
  },
  {
    image: '/images/guess.png',
    title: 'Guess Number Game',
    description: 'projects.item4',
    link: 'https://github.com/olegtabachnikow/guess-number-native-app',
    gitLink: 'https://github.com/olegtabachnikow/guess-number-native-app',
    isNpm: false,
    withPreview: false,
  },
  {
    image: '/images/get_robo.png',
    title: 'Get Robo Vpn',
    description: 'projects.item5',
    link: 'https://t.me/getrobovpnBot',
    gitLink: 'https://t.me/getrobovpnBot',
    isNpm: false,
    isTg: true,
    withPreview: false,
  },
  {
    image: '/images/places.png',
    title: 'Favorite Places App',
    description: 'projects.item6',
    link: 'https://github.com/olegtabachnikow/favorite-places-native-app',
    gitLink: 'https://github.com/olegtabachnikow/favorite-places-native-app',
    isNpm: false,
    withPreview: false,
  },
  {
    image: '/images/blog.png',
    title: 'NextJS Blog',
    description: 'projects.item7',
    link: 'https://nextjs-blog-dun-nine-14.vercel.app/',
    gitLink: 'https://github.com/olegtabachnikow/nextjs-blog',
    isNpm: false,
    withPreview: true,
  },
];
