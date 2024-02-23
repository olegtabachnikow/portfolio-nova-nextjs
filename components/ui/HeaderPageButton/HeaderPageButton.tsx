import { FC } from 'react';
import classes from './HeaderPageButton.module.css';
import { useRouter } from 'next/router';
import type { ButtonItemLinkType } from '@/types/types';
import { useDispatch } from 'react-redux';
import { setIsStarted } from '@/redux/interface-slice';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { setCameraPosition } from '@/redux/nova-slice';
import { setIsBurgerMenuOpen } from '@/redux/interface-slice';
import Link from 'next/link';

interface Props {
  page: ButtonItemLinkType;
}

const HeaderPageButton: FC<Props> = ({ page }) => {
  const router = useRouter();
  const currentQuery = router.route;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handleClick = (link: string) => {
    if (currentQuery === link) {
      return;
    }
    dispatch(setIsBurgerMenuOpen(false));
    dispatch(setIsStarted(false));
    dispatch(setCameraPosition({ x: 0, y: 0, z: 0 }));
    const timeout = setTimeout(() => {
      router.push(`/${i18n.language}${page.link}`);
    }, 700);
    return () => clearTimeout(timeout);
  };

  if (page.link === '/cv') {
    return (
      <Link
        className={classes.link}
        href={process.env.NEXT_PUBLIC_CV as string}
        target='_blank'
        style={{
          flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
          padding: '1px 6px',
        }}
      >
        <Image src='/images/cv.svg' width={25} height={25} alt='cv' />
        <span
          style={{
            margin: i18n.language === 'iw' ? '0 10px 0 0' : '0 0 0 10px',
          }}
        >
          {t(page.page)}
        </span>
      </Link>
    );
  }

  return (
    <button
      className={`${classes.link} ${
        currentQuery === page.link ? classes.active : ''
      }`}
      onClick={() => handleClick(page.link)}
      style={{
        flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
      }}
    >
      <Image src={`/images/${page.image}`} width={25} height={25} alt='logo' />
      <span
        style={{
          margin: i18n.language === 'iw' ? '0 10px 0 0' : '0 0 0 10px',
        }}
      >
        {t(page.page)}
      </span>
    </button>
  );
};

export default HeaderPageButton;
