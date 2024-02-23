import { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Nova } from '@/components/Nova/Nova';
import { setCameraPosition } from '@/redux/nova-slice';
import { useDispatch } from 'react-redux';

const PlaygroundPage: FC = () => {
  const dispatch = useDispatch();
  dispatch(setCameraPosition({ x: 15, y: 25, z: 20 }));

  return <Nova isPlaygroundPage />;
};

export default PlaygroundPage;

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
