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

function App({ Component, pageProps }: AppProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
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
        <Component {...pageProps} />
      </Suspense>
      {isTabletOrMobile && isLandscape ? <Notification /> : null}
    </Provider>
  );
}
export default appWithTranslation(App);
