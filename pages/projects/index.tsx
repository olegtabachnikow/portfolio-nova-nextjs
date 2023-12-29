import { FC, useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import NovaProjectsContent from '@/components/ui/NovaProjectsContent/NovaProjectsContent';
import Loader from '@/components/ui/Loader/Loader';
import Project from '@/components/ui/Project/Project';
import { ProjectType } from '@/components/ui/Project/Project';

const projectData: ProjectType[] = [
  {
    image: '/images/react-icons.png',
    theme: 'dark',
    title: 'React Icons',
    description: 'projects.item1',
    link: 'https://www.npmjs.com/package/react-custom-social-icons',
    gitLink: 'https://github.com/olegtabachnikow/react-custom-social-icons',
  },
  {
    image: '/images/codebook.png',
    theme: 'light',
    title: 'Codebook',
    description: 'projects.item2',
    link: 'https://www.npmjs.com/package/react-codebook',
    gitLink: 'https://github.com/olegtabachnikow/react-codebook',
  },
  {
    image: '/images/guess.png',
    theme: 'dark',
    title: 'Guess Game',
    description: 'projects.item3',
    link: 'https://github.com/olegtabachnikow/guess-number-native-app',
    gitLink: 'https://github.com/olegtabachnikow/guess-number-native-app',
  },
  {
    image: '/images/lol.png',
    theme: 'light',
    title: 'LoL DB',
    description: 'projects.item4',
    link: 'https://lol-db-tau.vercel.app/',
    gitLink: 'https://github.com/olegtabachnikow/lol-db/tree/master',
  },
  {
    image: '/images/blog.png',
    theme: 'light',
    title: 'Blog',
    description: 'projects.item5',
    link: 'https://nextjs-blog-dun-nine-14.vercel.app/',
    gitLink: 'https://github.com/olegtabachnikow/nextjs-blog',
  },
];

const ProjectPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <NovaProjectsContent>
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
