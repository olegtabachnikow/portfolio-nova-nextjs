import { FC, useEffect, useState } from 'react';
import classes from './Header.module.css';
import { motion } from 'framer-motion';
import { pageLinkList, langButtonList } from '@/constants/constants';
import type { ButtonItemLangType, ButtonItemLinkType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setIsStarted } from '@/redux/interface-slice';
import HeaderPageButton from '../HeaderPageButton/HeaderPageButton';
import Slider from '../Slider/Slider';

const Header: FC = () => {
  const [isSliderShown, setIsSliderShown] = useState(false);
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentQuery = router.route;
  const dispatch = useDispatch();
  const hebrewFlexDirection = i18n.language === 'iw' ? 'row-reverse' : 'row';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isSliderShown) {
      timeout = setTimeout(() => {
        setIsSliderShown(false);
      }, 10000);
    }
    return () => clearTimeout(timeout);
  }, [isSliderShown]);

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

  const handleNavigateToMain = () => {
    dispatch(setIsStarted(false));
    const timeout = setTimeout(() => {
      router.push(`/${i18n.language}/`);
    }, 700);
    return () => clearTimeout(timeout);
  };

  return (
    <header
      className={classes.header}
      style={{ flexDirection: hebrewFlexDirection }}
    >
      <div
        className={classes.pages_list}
        style={{
          flexDirection: hebrewFlexDirection,
        }}
      >
        {pageLinkList.map((page: ButtonItemLinkType) => {
          if (page.link === '/') {
            return (
              <button
                className={classes.logo}
                onClick={handleNavigateToMain}
                key='logo'
              >
                <Image
                  src='/images/mylogo.png'
                  width={30}
                  height={30}
                  alt='logo'
                />
              </button>
            );
          }
          return <HeaderPageButton page={page} key={page.page} />;
        })}
      </div>
      <div
        className={classes.lang_list}
        style={{
          flexDirection: hebrewFlexDirection,
        }}
      >
        <div
          className={classes.slider}
          style={{ flexDirection: hebrewFlexDirection }}
        >
          <motion.div
            initial={{ translateY: 20, opacity: 0 }}
            animate={
              isSliderShown
                ? { translateY: 0, opacity: 1 }
                : { translateY: 20, opacity: 0 }
            }
            className={classes.slider_box}
          >
            <Slider />
          </motion.div>
          <button
            className={isSliderShown ? classes.bulb_shown : classes.bulb}
            onClick={() => setIsSliderShown((state) => !state)}
            style={{
              margin: i18n.language === 'iw' ? '0 15px 0 0' : '0  0 0 15px',
            }}
          >
            <Image src='/images/bulb.svg' width={25} height={25} alt='bulb' />
          </button>
        </div>
        {langButtonList.map((lang: ButtonItemLangType) => {
          return (
            <Link
              href={`/${getCurrentPage()}`}
              locale={lang.lang}
              className={`${classes.lang_button} ${
                lang.lang === i18n.language ? classes.active : ''
              }`}
              key={lang.lang}
            >
              <div className={classes.image_container}>
                <Image
                  src={`/images/${lang.image}`}
                  width={30}
                  height={30}
                  alt='flag'
                />
              </div>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
