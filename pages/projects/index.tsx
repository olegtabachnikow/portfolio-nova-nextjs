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
    title: 'React Social Icons',
    description: 'projects.item1',
    link: 'https://www.npmjs.com/package/react-custom-social-icons',
    gitLink: 'https://github.com/olegtabachnikow/react-custom-social-icons',
    isNpm: true,
    withPreview: true,
  },
  {
    image: '/images/codebook.png',
    title: 'React Codebook',
    description: 'projects.item2',
    link: 'https://www.npmjs.com/package/react-codebook',
    gitLink: 'https://github.com/olegtabachnikow/react-codebook',
    isNpm: true,
    withPreview: true,
  },
  {
    image: '/images/lol.png',
    title: 'League of Legends DB',
    description: 'projects.item3',
    link: 'https://lol-db-tau.vercel.app/',
    gitLink: 'https://github.com/olegtabachnikow/lol-db/tree/master',
    isNpm: false,
    withPreview: true,
  },
  {
    image: '/images/guess.png',
    title: 'Guess Number Game',
    description: 'projects.item4',
    link: 'https://github.com/olegtabachnikow/guess-number-native-app',
    gitLink: 'https://github.com/olegtabachnikow/guess-number-native-app',
    isNpm: false,
    withPreview: false,
  },
  {
    image: '/images/get_robo.png',
    title: 'Get Robo Vpn',
    description: 'projects.item5',
    link: 'https://t.me/getrobovpnBot',
    gitLink: 'https://t.me/getrobovpnBot',
    isNpm: false,
    isTg: true,
    withPreview: false,
  },
  {
    image: '/images/places.png',
    title: 'Favorite Places App',
    description: 'projects.item6',
    link: 'https://github.com/olegtabachnikow/favorite-places-native-app',
    gitLink: 'https://github.com/olegtabachnikow/favorite-places-native-app',
    isNpm: false,
    withPreview: false,
  },
  {
    image: '/images/blog.png',
    title: 'NextJS Blog',
    description: 'projects.item7',
    link: 'https://nextjs-blog-dun-nine-14.vercel.app/',
    gitLink: 'https://github.com/olegtabachnikow/nextjs-blog',
    isNpm: false,
    withPreview: true,
  },
];

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
