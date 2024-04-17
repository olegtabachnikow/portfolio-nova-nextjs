import { FC, useState, useEffect } from 'react';
import classes from './ContactContent.module.css';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { setIsCameraMoving, setCameraPosition } from '@/redux/nova-slice';
import { Contact } from '../Contact/Contact';
import Form from '../Form/Form';
import { setCardHeight } from '@/redux/interface-slice';

type CardPage = 'contacts' | 'form';

const ContactContent: FC = () => {
  const [currentWindow, setCurrentWindow] = useState<CardPage>('contacts');
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  function handleCameraOne() {
    dispatch(setCardHeight(380));
    dispatch(setIsCameraMoving(true));
    dispatch(setCameraPosition({ x: 13, y: 10, z: 30 }));
  }

  function handleCameraTwo() {
    dispatch(setCardHeight(500));
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
    </div>
  );
};

export default ContactContent;
