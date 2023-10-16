import { FC, useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import NovaContent from '@/components/ui/NovaContent/NovaContent';
import Loader from '@/components/ui/Loader/Loader';

const NovaPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  });

  return <>{loading ? <Loader /> : <NovaContent />}</>;
};

export default NovaPage;

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
