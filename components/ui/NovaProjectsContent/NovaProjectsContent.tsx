import { FC, useEffect, useRef, useState } from 'react';
import classes from './NovaProjectsContent.module.css';
import { Nova } from '@/components/Nova/Nova';
import { useDispatch } from 'react-redux';
import { setIsCameraMoving } from '@/redux/nova-is-moving-slice';
import { setCameraPosition } from '@/redux/nova-position-slice';
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

const NovaProjectsContent: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentWindow, setCurrentWindow] = useState<
    'projects' | 'certificates'
  >('projects');
  const dispatch = useDispatch();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const { t, i18n } = useTranslation();

  function handleCameraOne() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 13, y: 0, z: 0 }));
  }

  function handleCameraTwo() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 0, y: 12, z: 0 }));
  }

  useEffect(() => {
    currentWindow === 'projects' ? handleCameraOne() : handleCameraTwo();
  }, [currentWindow]);

  const handleScroll = () => {
    switch (scrollRef.current?.scrollLeft) {
      case 0:
        return setCurrentPage(1);
      case 340:
        return setCurrentPage(2);
      case 680:
        return setCurrentPage(3);
      case 1020:
        return setCurrentPage(4);
      case 1360:
        return setCurrentPage(5);
      case 1700:
        return setCurrentPage(6);
      case 2040:
        return setCurrentPage(7);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      left: (currentPage - 1) * 340,
      behavior: 'smooth',
    });
  }, [currentPage]);

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
    <>
      <Nova />
      <motion.div
        className={classes.container}
        initial={{ height: 500 }}
        animate={{ height: currentWindow === 'certificates' ? 405 : 500 }}
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
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(50px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.2, delay: 0.4 }}
            ref={scrollRef}
            onScroll={handleScroll}
            className={classes.content}
          >
            {currentWindow === 'projects' ? (
              projectData.map((project: ProjectType, i: number) => (
                <Project key={i} project={project} />
              ))
            ) : (
              <PhotoProvider>
                {certificateData.map(
                  (certificate: CertificateType, i: number) => (
                    <Certificate key={i} certificate={certificate} />
                  )
                )}
              </PhotoProvider>
            )}
          </motion.div>
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
      {isTabletOrMobile ? <BurgerMenu /> : <Header isMoved={true} />}
    </>
  );
};

export default NovaProjectsContent;
