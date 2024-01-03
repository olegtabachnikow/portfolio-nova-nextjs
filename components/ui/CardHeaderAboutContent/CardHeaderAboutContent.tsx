import { FC } from 'react';
import classes from './CardHeaderAboutContent.module.css';
import { Avatar } from '../Avatar/Avatar';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

interface Props {
  isMoved: boolean;
}

const initialScale = { transform: 'translate(0px, 0px) scale(1)' };

const CardHeaderAboutContent: FC<Props> = ({ isMoved }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Avatar isMoved={isMoved} />
      <motion.h1
        initial={initialScale}
        animate={
          isMoved
            ? i18n.language === 'iw'
              ? { transform: 'translate(0, -105px) scale(0.7)' }
              : { transform: 'translate(15px, -105px) scale(0.7)' }
            : initialScale
        }
        className={classes.title}
      >
        {t('myinfo.name')}
      </motion.h1>
      <motion.h2
        initial={initialScale}
        animate={
          isMoved
            ? i18n.language === 'iw'
              ? { transform: 'translate(30px, -115px) scale(1)' }
              : { transform: 'translate(3px, -115px) scale(0.8)' }
            : initialScale
        }
        className={classes.subtitle}
      >
        {t('myinfo.job')}
      </motion.h2>
    </>
  );
};

export default CardHeaderAboutContent;
