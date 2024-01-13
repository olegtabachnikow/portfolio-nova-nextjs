import { FC } from 'react';
import classes from './Header.module.css';
import { motion } from 'framer-motion';
import { pageLinkList, langButtonList } from '@/constants/constants';
import type { ButtonItemLangType, ButtonItemLinkType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setIsStarted } from '@/redux/is-user-started-slice';
import HeaderPageButton from '../HeaderPageButton/HeaderPageButton';

interface Props {
  isMoved: boolean;
}
const Header: FC<Props> = ({ isMoved }) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentQuery = router.route;
  const dispatch = useDispatch();

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
    <motion.header
      initial={{ top: -50 }}
      animate={{ top: isMoved ? 0 : -50 }}
      className={classes.header}
      style={{ flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row' }}
    >
      <div
        className={classes.pages_list}
        style={{
          flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
        }}
      >
        {pageLinkList.map((page: ButtonItemLinkType) => {
          if (page.link === '/') {
            return (
              <Link
                className={classes.logo}
                onClick={() => dispatch(setIsStarted({ isStarted: false }))}
                key='logo'
                href={`/${i18n.language}${page.link}`}
              >
                <Image
                  src='/images/mylogo.png'
                  width={30}
                  height={30}
                  alt='logo'
                />
              </Link>
            );
          } else {
            return <HeaderPageButton page={page} />;
          }
        })}
      </div>
      <div
        className={classes.lang_list}
        style={{
          flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
        }}
      >
        {langButtonList.map((lang: ButtonItemLangType) => {
          return (
            <Link
              href={`/${lang.lang}/${getCurrentPage()}`}
              className={`${classes.lang_button} ${
                lang.lang === i18n.language ? classes.active : ''
              }`}
              key={lang.lang}
            >
              <div className={classes.image_container}>
                <Image
                  src={`/images/${lang.image}`}
                  width={40}
                  height={30}
                  alt='flag'
                />
              </div>
            </Link>
          );
        })}
      </div>
    </motion.header>
  );
};

export default Header;
