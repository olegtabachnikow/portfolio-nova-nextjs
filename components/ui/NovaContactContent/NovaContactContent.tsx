import { FC, useState, useEffect } from 'react';
import classes from './NovaContactContent.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { useTranslation } from 'next-i18next';
import { setIsCameraMoving, setCameraPosition } from '@/redux/nova-slice';
import { motion } from 'framer-motion';
import { CardHeader } from '../CardHeader/CardHeader';
import { Nova } from '@/components/Nova/Nova';
import { Contact } from '../Contact/Contact';
import Form from '../Form/Form';

type CardPage = 'contacts' | 'form';

const NovaContactContent: FC = () => {
  const isStarted = useSelector(
    (state: RootState) => state.interface.isStarted
  );
  const [currentWindow, setCurrentWindow] = useState<CardPage>('contacts');
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  function handleCameraOne() {
    dispatch(setIsCameraMoving(true));
    dispatch(setCameraPosition({ x: 13, y: 10, z: 30 }));
  }

  function handleCameraTwo() {
    dispatch(setIsCameraMoving(true));
    dispatch(setCameraPosition({ x: 13, y: -10, z: 30 }));
  }

  useEffect(() => {
    currentWindow === 'contacts' ? handleCameraOne() : handleCameraTwo();
  }, [currentWindow]);

  const handleWindowChange = (page: CardPage) => {
    if (page === 'contacts') {
      setCurrentWindow('contacts');
    } else {
      setCurrentWindow('form');
    }
  };
  return (
    <div className={classes.container}>
      <Nova />
      <motion.div
        className={classes.box}
        initial={{
          height: 500,
          transform: isStarted
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0)',
        }}
        animate={{
          height: currentWindow === 'contacts' ? 380 : 500,
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
              onClick={() => handleWindowChange('contacts')}
              className={`${classes.navigation_button} ${
                currentWindow === 'contacts' ? classes.active : ''
              }`}
            >
              {t('menu.contact')}
            </button>
            <button
              onClick={() => handleWindowChange('form')}
              className={`${classes.navigation_button} ${
                currentWindow === 'form' ? classes.active : ''
              }`}
            >
              {t('form.title')}
            </button>
          </div>
          <div className={classes.inner_container}>
            {currentWindow === 'contacts' ? <Contact /> : <Form />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NovaContactContent;
