import { FC, useEffect } from 'react';
import classes from './AboutContent.module.css';
import { About } from '../About/About';
import Skills from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { CardFooter } from '../CardFooter/CardFooter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setIsCameraMoving, setCameraPosition } from '@/redux/nova-slice';
import { setIsCardHeaderMoved, setCardHeight } from '@/redux/interface-slice';
import { useTranslation } from 'react-i18next';

const AboutContent: FC = () => {
  const cardPage = useSelector((state: RootState) => state.interface.cardPage);
  const { i18n } = useTranslation();
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
        dispatch(setCardHeight(450));
        dispatch(setIsCardHeaderMoved(false));
        break;
      case 'Experience':
        handleSecondMove();
        dispatch(setCardHeight(i18n.language === 'ru' ? 615 : 570));
        dispatch(setIsCardHeaderMoved(true));
        break;
      case 'Skills':
        handleThirdMove();
        dispatch(setCardHeight(450));
        dispatch(setIsCardHeaderMoved(true));
        break;
      default:
        break;
    }
  }, [cardPage, i18n.language]);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {cardPage === 'About' ? (
          <About />
        ) : cardPage === 'Skills' ? (
          <Skills />
        ) : (
          <Experience />
        )}
      </div>
      <CardFooter />
    </div>
  );
};

export default AboutContent;
