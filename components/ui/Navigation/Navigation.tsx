import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import classes from './Navigation.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { pageLinkList, langButtonList } from '@/constants/constants';
import type { ButtonItemLangType, ButtonItemLinkType } from '@/types/types';
import HeaderPageButton from '../HeaderPageButton/HeaderPageButton';

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

interface Props {
  isOpen: boolean;
}

const Navigation: FC<Props> = ({ isOpen }) => {
  const { t, i18n } = useTranslation('translation');
  const router = useRouter();
  const currentQuery = router.route;

  const getCurrentPage = () => {
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
      style={{
        pointerEvents: isOpen ? 'all' : 'none',
        alignItems: i18n.language === 'iw' ? 'flex-end' : 'flex-start',
      }}
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
          <HeaderPageButton page={item} />
        </motion.li>
      ))}
      <li className={classes.filler} />
      {langButtonList.map((item: ButtonItemLangType) => (
        <motion.li
          className={`${classes.item} ${
            item.lang === i18n.language ? classes.active : ''
          }`}
          key={item.lang}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            alignItems: i18n.language === 'iw' ? 'flex-end' : 'flex-start',
          }}
        >
          <Link
            className={classes.link}
            href={`/${item.lang}/${getCurrentPage()}`}
            style={{
              flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
            }}
          >
            <Image
              src={`/images/${item.image}`}
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
