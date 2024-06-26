import { FC } from 'react';
import NotFoundContent from '@/components/NotFoundContent/NotFoundContent';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Custom404: FC = () => {
  return <NotFoundContent />;
};

export default Custom404;

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
