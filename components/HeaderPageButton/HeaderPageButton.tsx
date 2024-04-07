import { FC } from 'react';
import classes from './HeaderPageButton.module.css';
import { useRouter } from 'next/router';
import type { ButtonItemLinkType } from '@/types/types';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { setIsBurgerMenuOpen, setIsStarted } from '@/redux/interface-slice';

interface Props {
  page: ButtonItemLinkType;
}

const HeaderPageButton: FC<Props> = ({ page }) => {
  const router = useRouter();
  const currentQuery = router.route;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handleRetunrToMain = () => {
    dispatch(setIsBurgerMenuOpen(false));
    dispatch(setIsStarted(false));
    router.push(`/${i18n.language}/`);
  };

  const handleClick = (link: string) => {
    if (currentQuery === link) {
      return;
    }
    if (link === '/cv') {
      window.open(process.env.NEXT_PUBLIC_CV as string, '_blank');
      return;
    }
    dispatch(setIsBurgerMenuOpen(false));
    router.push(`/${i18n.language}${page.link}`);
  };

  return (
    <button
      className={`${classes.link} ${
        page.page !== 'menu.intro' && currentQuery === page.link
          ? classes.active
          : ''
      }`}
      onClick={() =>
        page.page !== 'menu.intro'
          ? handleClick(page.link)
          : handleRetunrToMain()
      }
      style={{
        flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
      }}
    >
      {page.image && (
        <Image
          src={`/images/${page.image}`}
          width={25}
          height={25}
          alt='logo'
          style={{
            margin: i18n.language === 'iw' ? '0 0 0 10px' : '0 10px 0 0',
          }}
        />
      )}
      <span>{t(page.page)}</span>
    </button>
  );
};

export default HeaderPageButton;
