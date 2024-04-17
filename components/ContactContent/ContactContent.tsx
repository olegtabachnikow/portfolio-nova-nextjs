import { FC, useState, useEffect } from 'react';
import classes from './ContactContent.module.css';
import { useDispatch } from 'react-redux';
import { setIsCameraMoving, setCameraPosition } from '@/redux/nova-slice';
import { Contact } from '../Contact/Contact';
import Form from '../Form/Form';
import { setCardHeight } from '@/redux/interface-slice';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

type CardPage = 'contacts' | 'form';

const ContactContent: FC = () => {
  const [currentWindow, setCurrentWindow] = useState<CardPage>('contacts');
  const dispatch = useDispatch();

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

  const handleWindowChange = (page: string) => {
    if (page === 'contacts') {
      setCurrentWindow('contacts');
    } else {
      setCurrentWindow('form');
    }
  };
  return (
    <ContentWrapper
      page='contact'
      firstButtonPage='contacts'
      secondButtonPage='form'
      currentWindow={currentWindow}
      handleWindowChange={handleWindowChange}
    >
      <div className={classes.inner_container}>
        {currentWindow === 'contacts' ? <Contact /> : <Form />}
      </div>
    </ContentWrapper>
  );
};

export default ContactContent;
