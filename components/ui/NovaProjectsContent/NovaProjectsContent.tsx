import { FC, useEffect, useState } from 'react';
import classes from './NovaProjectsContent.module.css';
import { Nova } from '@/components/Nova/Nova';
import { useDispatch } from 'react-redux';
import { setIsCameraMoving, setCameraPosition } from '@/redux/nova-slice';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { CardHeader } from '../CardHeader/CardHeader';
import Pagination from '../Pagination/Pagination';
import Header from '../Header/Header';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import Project from '@/components/ui/Project/Project';
import type { CertificateType, ProjectType } from '@/types/types';
import { projectData } from '@/constants/constants';
import Certificate from '@/components/ui/Certificate/Certificate';
import { certificateData } from '@/constants/constants';
import { PhotoProvider } from 'react-photo-view';
import { useTranslation } from 'react-i18next';
import ProjectsContentWrapper from '../ProjectsContentWrapper/ProjectsContentWrapper';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import RotationBox from '../RotationBox/RotationBox';

const NovaProjectsContent: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const isStarted = useSelector(
    (state: RootState) => state.interface.isStarted
  );
  const [currentWindow, setCurrentWindow] = useState<
    'projects' | 'certificates'
  >('projects');
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const { t, i18n } = useTranslation();

  function handleCameraOne() {
    dispatch(setIsCameraMoving(true));
    dispatch(setCameraPosition({ x: 13, y: 0, z: 0 }));
  }

  function handleCameraTwo() {
    dispatch(setIsCameraMoving(true));
    dispatch(setCameraPosition({ x: 0, y: 12, z: 0 }));
  }

  useEffect(() => {
    currentWindow === 'projects' ? handleCameraOne() : handleCameraTwo();
  }, [currentWindow]);

  const handleWindowChange = (page: 'projects' | 'certificates') => {
    if (page === 'projects') {
      setCurrentWindow('projects');
      setCurrentPage(1);
    } else {
      setCurrentWindow('certificates');
      setCurrentPage(1);
    }
  };

  return (
    <div className={classes.container}>
      <Nova />
      <RotationBox>
        <motion.div
          className={classes.box}
          initial={{
            height: 500,
            transform: isStarted
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0)',
          }}
          animate={{
            height: currentWindow === 'certificates' ? 405 : 500,
            transform: isStarted
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0)',
          }}
          transition={{ duration: 0.7, ease: 'anticipate' }}
        >
          <div className={classes.overlay}>
            <CardHeader isMoved={false} />
          </div>
          <div className={classes.container_inner}>
            <div
              className={classes.navigation}
              style={{
                flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
              }}
            >
              <button
                onClick={() => handleWindowChange('projects')}
                className={`${classes.navigation_button} ${
                  currentWindow === 'projects' ? classes.active : ''
                }`}
              >
                {t('projects.nav.projects')}
              </button>
              <button
                onClick={() => handleWindowChange('certificates')}
                className={`${classes.navigation_button} ${
                  currentWindow === 'certificates' ? classes.active : ''
                }`}
              >
                {t('projects.nav.certificates')}
              </button>
            </div>
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
                  {certificateData.map(
                    (certificate: CertificateType, i: number) => (
                      <Certificate key={i} certificate={certificate} />
                    )
                  )}
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
          </div>
        </motion.div>
      </RotationBox>
    </div>
  );
};

export default NovaProjectsContent;
