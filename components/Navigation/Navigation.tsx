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
import Slider from '../Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setIsBurgerMenuOpen } from '@/redux/interface-slice';

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

const Navigation: FC = () => {
  const { t, i18n } = useTranslation('translation');
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.interface.isBurgerMenuOpen
  );
  const router = useRouter();
  const currentQuery = router.route;

  const handleClose = () => {
    dispatch(setIsBurgerMenuOpen(false));
  };

  const getCurrentPage = () => {
    if (currentQuery.includes('nova')) {
      return 'nova';
    }
    if (currentQuery.includes('projects')) {
      return 'projects';
    }
    if (currentQuery.includes('contact')) {
      return 'contact';
    }
    if (currentQuery.includes('playground')) {
      return 'playground';
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
      <motion.li key='slider' variants={itemVariants} className={classes.item}>
        <div
          className={classes.slider_box}
          style={{
            flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
          }}
        >
          <Image src='/images/bulb.svg' width={30} height={30} alt='bulb' />
          <Slider />
        </div>
      </motion.li>
      <motion.li
        className={classes.language_box}
        variants={itemVariants}
        key='language-box'
        style={{
          flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
        }}
      >
        {langButtonList.map((item: ButtonItemLangType) =>
          i18n.language === item.lang ? null : (
            <Link
              key={item.lang}
              onClick={handleClose}
              className={classes.link}
              href={`/${getCurrentPage()}`}
              locale={item.lang}
            >
              <span className={classes.text}>{item.name}</span>
            </Link>
          )
        )}
      </motion.li>
    </motion.ul>
  );
};

export default Navigation;
