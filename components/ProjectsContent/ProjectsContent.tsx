import { FC, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { setIsCameraMoving, setCameraPosition } from '@/redux/nova-slice';
import Project from '@/components/Project/Project';
import type { CertificateType, ProjectType } from '@/types/types';
import { projectData } from '@/constants/constants';
import Certificate from '@/components/Certificate/Certificate';
import { certificateData } from '@/constants/constants';
import { PhotoProvider } from 'react-photo-view';
import { useTranslation } from 'next-i18next';
import ProjectsContentWrapper from '../ProjectsContentWrapper/ProjectsContentWrapper';
import { setCardHeight } from '@/redux/interface-slice';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';

const Pagination = dynamic(() => import('../Pagination/Pagination'), {
  ssr: false,
});

const ProjectsContent: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentWindow, setCurrentWindow] = useState<
    'projects' | 'certificates'
  >('projects');
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  function handleCameraOne() {
    dispatch(setCardHeight(500));
    dispatch(setIsCameraMoving(true));
    dispatch(setCameraPosition({ x: 13, y: 0, z: 0 }));
  }

  function handleCameraTwo() {
    dispatch(setCardHeight(405));
    dispatch(setIsCameraMoving(true));
    dispatch(setCameraPosition({ x: 0, y: 12, z: 0 }));
  }

  useEffect(() => {
    currentWindow === 'projects' ? handleCameraOne() : handleCameraTwo();
  }, [currentWindow]);

  const handleWindowChange = (page: string) => {
    if (page === 'projects') {
      setCurrentWindow('projects');
      setCurrentPage(1);
    } else {
      setCurrentWindow('certificates');
      setCurrentPage(1);
    }
  };

  return (
    <ContentWrapper
      page='projects'
      firstButtonPage='projects'
      secondButtonPage='certificates'
      currentWindow={currentWindow}
      handleWindowChange={handleWindowChange}
    >
      {currentWindow === 'projects' ? (
        <ProjectsContentWrapper
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        >
          {projectData.map((project: ProjectType, i: number) => (
            <Project key={i} project={project} />
          ))}
        </ProjectsContentWrapper>
      ) : (
        <PhotoProvider bannerVisible={false}>
          <ProjectsContentWrapper
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          >
            {certificateData.map((certificate: CertificateType, i: number) => (
              <Certificate key={i} certificate={certificate} />
            ))}
          </ProjectsContentWrapper>
        </PhotoProvider>
      )}
      <Pagination
        length={
          currentWindow === 'projects'
            ? projectData.length
            : certificateData.length
        }
        page={currentPage}
        setPage={setCurrentPage}
      />
    </ContentWrapper>
  );
};

export default ProjectsContent;
