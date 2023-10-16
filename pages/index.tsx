import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeScreen from '@/components/ui/HomeScreen/HomeScreen';
import { GalaxyButton } from '@/components/ui/StarButton/GalaxyButton';
import { LanguageSwitch } from '@/components/ui/LanguageSwitch/LanguageSwitch';
import IntroTextBlock from '@/components/ui/IntroTextBlock/IntroTextBlock';
import Loader from '@/components/ui/Loader/Loader';
import IntroPageContentWrapper from '@/components/ui/IntroPageContentWrapper/IntroPageContentWrapper';

export default function HomePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <HomeScreen isStarted={isStarted}>
      {loading ? (
        <Loader />
      ) : (
        <IntroPageContentWrapper>
          <>
            <GalaxyButton
              isStarted={isStarted}
              isDisabled={isDisabled}
              setIsStarted={setIsStarted}
            />
            <IntroTextBlock isDisabled={isDisabled} />
          </>
        </IntroPageContentWrapper>
      )}
      <LanguageSwitch />
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
