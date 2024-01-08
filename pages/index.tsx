import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeScreen from '@/components/ui/HomeScreen/HomeScreen';
import IntroTextBlock from '@/components/ui/IntroTextBlock/IntroTextBlock';
import IntroPageAvatar from '@/components/ui/IntroPageAvatar/IntroPageAvatar';
import IntroButton from '@/components/ui/IntroButton/IntroButton';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import BurgerMenu from '@/components/ui/BurgerMenu/BurgerMenu';
import IntroContentCard from '@/components/ui/IntroContentCard/IntroContentCard';
import { useMediaQuery } from 'react-responsive';
import Header from '@/components/ui/Header/Header';

export default function HomePage() {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [isLaunched, setIsLaunched] = useState<boolean>(false);
  const { t } = useTranslation();
  const { locale, push } = useRouter();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  useEffect(() => {
    const timeout = setTimeout(() => setIsMoved(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    setIsMoved(false);
    setIsLaunched(true);
    setIsStarted(true);
    setTimeout(() => {
      push(`/${locale}/nova`);
    }, 1000);
  };

  return (
    <HomeScreen isStarted={isStarted}>
      <IntroPageAvatar isMoved={isMoved} isLaunched={isLaunched} />
      <IntroContentCard isLaunched={isLaunched}>
        <IntroTextBlock isMoved={isMoved} />
        <IntroButton
          text={t('start')}
          onClick={handleClick}
          isMoved={isMoved}
        />
      </IntroContentCard>
      {isTabletOrMobile ? <BurgerMenu /> : <Header isMoved={isMoved} />}
    </HomeScreen>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translationsProps = await serverSideTranslations(locale ?? 'en', [
    'translation',
  ]);

  return {
    props: {
      ...translationsProps,
    },
  };
};
