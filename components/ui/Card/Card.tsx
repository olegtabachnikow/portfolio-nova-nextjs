import { FC, useEffect, useState } from 'react';
import classes from './Card.module.css';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardFooter } from '../CardFooter/CardFooter';
import { About } from '../About/About';
import { Experience } from '../Experience/Experience';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CardHeaderAboutContent from '../CardHeaderAboutContent/CardHeaderAboutContent';
import Skills from '../Skills/Skills';

export const Card: FC = () => {
  const cardPage = useSelector((state: RootState) => state.interface.cardPage);
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [isContactSection, setIsContactSection] = useState<boolean>(false);
  const isStarted = useSelector(
    (state: RootState) => state.interface.isStarted
  );
  const { i18n } = useTranslation();
  useEffect(() => {
    cardPage === 'About' ? setIsMoved(false) : setIsMoved(true);
    cardPage === 'Skills'
      ? setIsContactSection(true)
      : setIsContactSection(false);
  }, [cardPage]);

  return (
    <motion.div
      initial={{ scale: isStarted ? 1 : 0 }}
      animate={{ scale: isStarted ? 1 : 0 }}
      transition={{ duration: 0.7, ease: 'anticipate' }}
    >
      <motion.div
        initial={{ height: 450, scale: 1 }}
        animate={{
          height: isMoved
            ? isContactSection
              ? 450
              : i18n.language === 'en'
              ? 570
              : i18n.language === 'ru'
              ? 615
              : 580
            : i18n.language === 'en'
            ? 450
            : 470,
        }}
        transition={{ duration: 0.2 }}
        className={classes.card}
      >
        <div className={classes.overlay} />
        <div className={classes.container}>
          <CardHeader isMoved={isMoved}>
            <CardHeaderAboutContent isMoved={isMoved} />
          </CardHeader>
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
      </motion.div>
    </motion.div>
  );
};
