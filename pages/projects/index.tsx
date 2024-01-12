import { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import NovaProjectsContent from '@/components/ui/NovaProjectsContent/NovaProjectsContent';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectPage: FC = () => {
  return <NovaProjectsContent />;
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
