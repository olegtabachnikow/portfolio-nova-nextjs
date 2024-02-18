import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '../node_modules/normalize.css';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import Notification from '@/components/ui/Notification/Notification';
import { Suspense } from 'react';
import Loader from '@/components/ui/Loader/Loader';
import AnimatedCursor from 'react-animated-cursor';
import BurgerMenu from '@/components/ui/BurgerMenu/BurgerMenu';
import Header from '@/components/ui/Header/Header';
import { isMobile, isDesktop } from 'react-device-detect';

function App({ Component, pageProps }: AppProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  return (
    <Provider store={store}>
      <Head>
        <title>{"Oleg's Portfolio"}</title>
        <meta
          name='description'
          content="Oleg's frontent web developer portfolio"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Suspense fallback={<Loader />}>
        {isDesktop && (
          <AnimatedCursor
            innerSize={8}
            outerSize={30}
            innerScale={1}
            outerScale={1.5}
            outerAlpha={0.1}
            innerStyle={{
              backgroundColor: '#fff',
            }}
            outerStyle={{
              border: '3px solid #fff',
              backgroundColor: 'rgba(0,0,0, 0.7)',
            }}
          />
        )}
        <Component {...pageProps} />
      </Suspense>
      {isMobile || isTabletOrMobile ? <BurgerMenu /> : <Header />}
      {isMobile && isLandscape ? <Notification /> : null}
    </Provider>
  );
}
export default appWithTranslation(App);
