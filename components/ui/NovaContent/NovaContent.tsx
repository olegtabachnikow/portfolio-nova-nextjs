import { FC, useEffect } from 'react';
import classes from './NovaContent.module.css';
import { Nova } from '@/components/Nova/Nova';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCameraMoving } from '@/redux/nova-is-moving-slice';
import { setCameraPosition } from '@/redux/nova-position-slice';
import { Card } from '@/components/ui/Card/Card';
import { RootState } from '@/redux/store';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

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
    switch (cardPage) {
      case 'About':
        handleFirstMove();
        break;
      case 'Experience':
        handleSecondMove();
        break;
      case 'Contact':
        handleThirdMove();
        break;
      default:
        break;
    }
  }, [cardPage]);

  return (
    <div className={classes.container}>
      <Nova />
      <Card />
      <BurgerMenu isNovaPage={true} />
    </div>
  );
};

export default NovaContent;
