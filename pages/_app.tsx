import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '../node_modules/normalize.css';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </Provider>
  );
}
export default appWithTranslation(App);
