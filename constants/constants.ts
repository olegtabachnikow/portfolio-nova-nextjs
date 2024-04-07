import {
  ButtonItemLangType,
  ButtonItemLinkType,
  CertificateType,
} from '@/types/types';
import { ProjectType, SkillListType } from '@/types/types';

export const pageLinkList: ButtonItemLinkType[] = [
  {
    page: 'menu.intro',
    link: '/',
  },
  {
    page: 'menu.about',
    link: '/',
  },
  {
    page: 'menu.projects',
    link: '/projects',
  },
  {
    page: 'menu.contact',
    link: '/contact',
  },
  {
    page: 'menu.playground',
    link: '/playground',
  },
  {
    page: 'menu.cv',
    image: 'cv.svg',
    alt: 'cv icon',
    link: '/cv',
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
    image: '/images/projects/react-icons.png',
    title: 'React Social Icons',
    description: 'projects.item1',
    link: 'https://www.npmjs.com/package/react-custom-social-icons',
    gitLink: 'https://github.com/olegtabachnikow/react-custom-social-icons',
    isNpm: true,
    withPreview: true,
  },
  {
    image: '/images/projects/codebook.png',
    title: 'React Codebook',
    description: 'projects.item2',
    link: 'https://www.npmjs.com/package/react-codebook',
    gitLink: 'https://github.com/olegtabachnikow/react-codebook',
    isNpm: true,
    withPreview: true,
  },
  {
    image: '/images/projects/lol.png',
    title: 'League of Legends DB',
    description: 'projects.item3',
    link: 'https://lol-db-tau.vercel.app/',
    gitLink: 'https://github.com/olegtabachnikow/lol-db/tree/master',
    isNpm: false,
    withPreview: true,
  },
  {
    image: '/images/projects/guess.png',
    title: 'Guess Number Game',
    description: 'projects.item4',
    link: 'https://github.com/olegtabachnikow/guess-number-native-app',
    gitLink: 'https://github.com/olegtabachnikow/guess-number-native-app',
    isNpm: false,
    withPreview: false,
  },
  {
    image: '/images/projects/get_robo.png',
    title: 'Get Robo Vpn',
    description: 'projects.item5',
    link: 'https://t.me/getrobovpnBot',
    gitLink: 'https://t.me/getrobovpnBot',
    isNpm: false,
    isTg: true,
    withPreview: false,
  },
  {
    image: '/images/projects/places.png',
    title: 'Favorite Places App',
    description: 'projects.item6',
    link: 'https://github.com/olegtabachnikow/favorite-places-native-app',
    gitLink: 'https://github.com/olegtabachnikow/favorite-places-native-app',
    isNpm: false,
    withPreview: false,
  },
  {
    image: '/images/projects/blog.png',
    title: 'NextJS Blog',
    description: 'projects.item7',
    link: 'https://nextjs-blog-dun-nine-14.vercel.app/',
    gitLink: 'https://github.com/olegtabachnikow/nextjs-blog',
    isNpm: false,
    withPreview: true,
  },
];

export const certificateData: CertificateType[] = [
  {
    image: '/images/certificates/practicum.png',
    title: 'Web Development',
    company: 'Yandex',
    author: 'Practicum100',
    length: 740,
  },
  {
    image: '/images/certificates/aducar.jpeg',
    title: 'Web Development',
    company: 'Adukar',
    author: 'Adukar',
    length: 520,
  },
  {
    image: '/images/certificates/nextJS.jpeg',
    title: 'Next.js & React',
    company: 'Udemy',
    author: 'Maximilian Schwarzmüller',
    length: 33,
  },
  {
    image: '/images/certificates/react-native.jpeg',
    title: 'React Native',
    company: 'Udemy',
    author: 'Maximilian Schwarzmüller',
    length: 29,
  },
  {
    image: '/images/certificates/react-redux.jpeg',
    title: 'React + Redux',
    company: 'Udemy',
    author: 'Jury Bura',
    length: 22,
  },
  {
    image: '/images/certificates/react-typescript.jpeg',
    title: 'React and Typescript',
    company: 'Udemy',
    author: 'Stephen Grider',
    length: 30,
  },
  {
    image: '/images/certificates/typescript-tips.jpeg',
    title: 'Web Development',
    company: 'Udemy',
    author: 'Maurice de Beijer',
    length: 3.5,
  },
];

export const SkillList: SkillListType[] = [
  { image: '/images/skills/react.svg', title: 'React' },
  { image: '/images/skills/redux.svg', title: 'Redux' },
  { image: '/images/skills/typescript.svg', title: 'Typescript' },
  { image: '/images/skills/javascript.svg', title: 'Javascript' },
  { image: '/images/skills/nextjs.svg', title: 'NextJS' },
  { image: '/images/skills/framer.jpeg', title: 'Framer Motion' },
  { image: '/images/skills/i18n.png', title: 'i18n' },
  { image: '/images/skills/node.svg', title: 'NodeJS' },
  { image: '/images/skills/mongodb.svg', title: 'MongoDB' },
  { image: '/images/skills/express.svg', title: 'ExpressJS' },
  { image: '/images/skills/html.svg', title: 'HTML5' },
  { image: '/images/skills/css.svg', title: 'CSS3' },
];

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
