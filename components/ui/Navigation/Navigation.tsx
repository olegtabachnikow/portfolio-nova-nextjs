import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import classes from './Navigation.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type ButtonItemLangType = { lang: string; image: string; alt: string };
type ButtonItemLinkType = {
  page: string;
  image: string;
  alt: string;
  link: string;
};

const pageLinkList: ButtonItemLinkType[] = [
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

const buttonList: ButtonItemLangType[] = [
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

interface Props {
  isOpen: boolean;
}

const Navigation: FC<Props> = ({ isOpen }) => {
  const { t, i18n } = useTranslation('translation');
  const router = useRouter();
  const getCurrentPage = () => {
    const currentQuery = router.route;
    if (currentQuery.includes('nova')) {
      return 'nova';
    }
    if (currentQuery.includes('projects')) {
      return 'projects';
    }
    return '';
  };
  return (
    <motion.ul
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
      className={classes.list}
      variants={listVariants}
    >
      {pageLinkList.map((item: ButtonItemLinkType) => (
        <motion.li
          className={classes.item}
          key={item.page}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className={classes.link} href={`/${i18n.language}${item.link}`}>
            <Image
              className={classes.icon}
              src={`/images/${item.image}`}
              alt={item.alt}
              width={40}
              height={40}
            />
            <span className={classes.text}>{t(item.page)}</span>
          </Link>
        </motion.li>
      ))}
      <li className={classes.filler} />
      {buttonList.map((item: ButtonItemLangType) => (
        <motion.li
          className={classes.item}
          key={item.lang}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            style={{ opacity: i18n.language === item.lang ? 0.7 : 1 }}
            className={classes.link}
            href={`/${item.lang}/${getCurrentPage()}`}
          >
            <Image
              src={`/images/${item.image}`}
              className={classes.icon}
              width={30}
              height={30}
              alt={item.alt}
            />
            <span className={classes.text}>{t(`languages.${item.lang}`)}</span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Navigation;
