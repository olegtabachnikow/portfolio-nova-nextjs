import { FC, useEffect } from 'react';
import classes from './NovaProjectsContent.module.css';
import { Nova } from '@/components/Nova/Nova';
import { useDispatch } from 'react-redux';
import { setIsCameraMoving } from '@/redux/nova-is-moving-slice';
import { setCameraPosition } from '@/redux/nova-position-slice';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useMediaQuery } from 'react-responsive';

interface Props {
  children: React.ReactNode;
}

const NovaProjectsContent: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  function handleCamera() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 13, y: 0, z: 0 }));
  }

  useEffect(() => {
    handleCamera();
  }, []);

  return (
    <>
      <Nova />
      <div className={isTabletOrMobile ? classes.list_mobile : classes.list}>
        <div className={classes.overlay} />
        <div
          className={
            isTabletOrMobile
              ? classes.container_inner_column
              : classes.container_inner
          }
        >
          {children}
        </div>
      </div>
      <BurgerMenu />
    </>
  );
};

export default NovaProjectsContent;
