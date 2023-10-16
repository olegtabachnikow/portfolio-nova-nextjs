import { FC, useEffect, useState } from 'react';
import classes from './NovaContent.module.css';
import { Nova } from '@/components/Nova/Nova';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCameraMoving } from '@/redux/nova-is-moving-slice';
import { setCameraPosition } from '@/redux/nova-position-slice';
import { Card } from '@/components/ui/Card/Card';
import { RootState } from '@/redux/store';
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch';

export type CardPageType = 'About' | 'Contact' | 'Experience';

const NovaContent: FC = () => {
  const cardPage = useSelector((state: RootState) => state.cardPage.cardPage);
  const dispatch = useDispatch();

  function handleFirstMove() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 15, y: 25, z: 20 }));
  }
  function handleSecondMove() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 1.15, y: 30, z: 0.35 }));
  }
  function handleThirdMove() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 2.1, y: 8.8, z: 7 }));
  }

  useEffect(() => {
    cardPage === 'About' && handleFirstMove();
    cardPage === 'Experience' && handleSecondMove();
    cardPage === 'Contact' && handleThirdMove();
  }, [cardPage]);

  return (
    <div className={classes.container}>
      <Nova />;
      <Card />
      <LanguageSwitch isNovaPage />
    </div>
  );
};

export default NovaContent;
