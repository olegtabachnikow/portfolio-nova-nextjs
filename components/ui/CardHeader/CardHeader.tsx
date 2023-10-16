import { FC } from 'react';
import classes from './CardHeader.module.css';
import { Avatar } from '../Avatar/Avatar';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

interface CardHeaderProps {
  isMoved: boolean;
}

const initialScale = { transform: 'translate(0px, 0px) scale(1)' };

export const CardHeader: FC<CardHeaderProps> = ({ isMoved }) => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{ height: 200 }}
      animate={{ height: isMoved ? 100 : 200 }}
      transition={{ duration: 0.2 }}
      className={classes.header}
    >
      <motion.div
        initial={{ height: 200 }}
        animate={{ height: isMoved ? 100 : 200 }}
        transition={{ duration: 0.2 }}
        className={classes.overlay}
      />
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
    </motion.div>
  );
};
