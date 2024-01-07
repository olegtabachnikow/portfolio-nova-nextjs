import { FC, useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import NovaProjectsContent from '@/components/ui/NovaProjectsContent/NovaProjectsContent';
import Loader from '@/components/ui/Loader/Loader';
import Project from '@/components/ui/Project/Project';
import type { ProjectType } from '@/types/types';
import { projectData } from '@/constants/constants';

const ProjectPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <NovaProjectsContent
          length={projectData.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        >
          {projectData.map((project: ProjectType) => (
            <Project key={project.title} project={project} />
          ))}
        </NovaProjectsContent>
      )}
    </>
  );
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
