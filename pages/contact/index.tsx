import { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import 'react-photo-view/dist/react-photo-view.css';
import ContactContent from '@/components/ContactContent/ContactContent';

const ProjectPage: FC = () => {
  return <ContactContent />;
};

export default ProjectPage;

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
