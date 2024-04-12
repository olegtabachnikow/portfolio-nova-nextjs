import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '../node_modules/normalize.css';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import Notification from '@/components/Notification/Notification';
import { Suspense } from 'react';
import Loader from '@/components/Loader/Loader';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';
import Header from '@/components/Header/Header';
import { isMobile } from 'react-device-detect';
import MainScreen from '@/components/MainScreen/MainScreen';
import CardContainer from '@/components/CardContainer/CardContainer';
import { useRouter } from 'next/router';
import IntroContent from '@/components/IntroContent/IntroContent';

function App({ Component, pageProps }: AppProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1010px)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  const router = useRouter();

  return (
    <Provider store={store}>
      <Head>
        <title>{"Oleg's Portfolio"}</title>
        <meta
          name='description'
          content="Oleg's frontent web developer portfolio"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          property='og:title'
          content="Oleg's frontent web developer portfolio"
        />
        <meta
          property='og:description'
          content="Oleg's frontent web developer portfolio"
        />
        <meta
          property='og:image'
          content='https://i.ibb.co/Wf62GKD/Screenshot-2024-04-12-at-22-11-22.png'
        />
        <meta property='og:url' content='https://oleg-web-dev.vercel.app/' />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {isMobile || isTabletOrMobile ? <BurgerMenu /> : <Header />}
      {isMobile && isLandscape ? <Notification /> : null}
      <Suspense fallback={<Loader />}>
        <MainScreen>
          {router.route === '/' && <IntroContent />}
          <CardContainer>
            <Component {...pageProps} />
          </CardContainer>
        </MainScreen>
      </Suspense>
    </Provider>
  );
}
export default appWithTranslation(App);
