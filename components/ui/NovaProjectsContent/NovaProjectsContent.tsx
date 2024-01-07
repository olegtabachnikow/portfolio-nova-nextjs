import { FC, useEffect, useRef } from 'react';
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

interface Props {
  children: React.ReactNode;
  length: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const NovaProjectsContent: FC<Props> = ({
  children,
  length,
  currentPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  function handleCamera() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 13, y: 0, z: 0 }));
  }

  useEffect(() => {
    handleCamera();
  }, []);

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

  return (
    <>
      <Nova />
      <div className={classes.container}>
        <div className={classes.overlay}>
          <CardHeader isMoved={false} />
        </div>
        <div className={classes.container_inner}>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className={classes.content}
          >
            {children}
          </div>
          <Pagination
            length={length}
            page={currentPage}
            setPage={setCurrentPage}
          />
        </div>
      </div>
      {isTabletOrMobile ? <BurgerMenu /> : <Header isMoved={true} />}
    </>
  );
};

export default NovaProjectsContent;
