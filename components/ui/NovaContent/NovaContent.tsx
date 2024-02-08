import { FC, useEffect } from 'react';
import classes from './NovaContent.module.css';
import { Nova } from '@/components/Nova/Nova';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCameraMoving, setCameraPosition } from '@/redux/nova-slice';
import { Card } from '@/components/ui/Card/Card';
import { RootState } from '@/redux/store';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useMediaQuery } from 'react-responsive';
import Header from '../Header/Header';
import RotationBox from '../RotationBox/RotationBox';

const NovaContent: FC = () => {
  const cardPage = useSelector((state: RootState) => state.interface.cardPage);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const dispatch = useDispatch();

  function handleFirstMove() {
    dispatch(setIsCameraMoving(true));
    dispatch(setCameraPosition({ x: 15, y: 25, z: 20 }));
  }
  function handleSecondMove() {
    dispatch(setIsCameraMoving(true));
    dispatch(setCameraPosition({ x: 1.15, y: 30, z: 0.35 }));
  }
  function handleThirdMove() {
    dispatch(setIsCameraMoving(true));
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
      <Nova isAboutPage={true} />
      <RotationBox>
        <Card />
      </RotationBox>
      {isTabletOrMobile ? <BurgerMenu /> : <Header isMoved={true} />}
    </div>
  );
};

export default NovaContent;
