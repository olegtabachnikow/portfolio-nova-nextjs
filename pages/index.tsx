import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AboutContent from '@/components/AboutContent/AboutContent';

export default function Page() {
  return <AboutContent />;
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
