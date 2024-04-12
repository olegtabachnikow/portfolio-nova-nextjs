import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AboutContent from '@/components/AboutContent/AboutContent';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { i18n } = useTranslation();
  return (
    <>
      <Head>
        <meta
          property='og:title'
          content="Oleg's frontent web developer portfolio"
        />
        <meta
          property='og:description'
          content="Oleg's frontent web developer portfolio"
        />
        <meta property='og:image' content='/image/preview.png' />
        <meta
          property='og:url'
          content={`https://oleg-web-dev.vercel.app/${i18n.language}`}
        />
        <meta property='og:type' content='website' />
      </Head>
      <AboutContent />
    </>
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
