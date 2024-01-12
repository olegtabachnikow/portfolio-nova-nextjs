import { FC } from 'react';
import classes from './Header.module.css';
import { motion } from 'framer-motion';
import { pageLinkList, langButtonList } from '@/constants/constants';
import type { ButtonItemLangType, ButtonItemLinkType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

interface Props {
  isMoved: boolean;
}
const Header: FC<Props> = ({ isMoved }) => {
  const { t, i18n } = useTranslation();
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
            return (
              <Link
                className={`${classes.link} ${
                  currentQuery.includes(page.link) ? classes.active : ''
                }`}
                href={`/${i18n.language}${page.link}`}
                key={page.page}
                style={{
                  flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
                }}
              >
                <Image
                  src={`/images/${page.image}`}
                  width={30}
                  height={30}
                  alt='logo'
                />
                <span
                  style={{
                    margin: i18n.language === 'iw' ? '0 5px 0 0' : '0 0 0 5px',
                  }}
                >
                  {t(page.page)}
                </span>
              </Link>
            );
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
