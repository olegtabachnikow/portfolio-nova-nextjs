import { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { setCardHeight } from '@/redux/interface-slice';
import { setCameraPosition, setIsCameraMoving } from '@/redux/nova-slice';
import { useDispatch } from 'react-redux';
import PlaygroundContent from '@/components/PlaygroundContent/PlaygroundContent';

const PlaygroundPage: FC = () => {
  const dispatch = useDispatch();
  dispatch(setIsCameraMoving(true));
  dispatch(setCameraPosition({ x: 15, y: 25, z: 20 }));
  dispatch(setCardHeight(170));

  return <PlaygroundContent />;
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
