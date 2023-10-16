import { FC } from 'react';
import classes from './Avatar.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

interface Props {
  isMoved: boolean;
}

const initialStyles = {
  transform: 'translate(0px,0px) scale(1)',
};

export const Avatar: FC<Props> = ({ isMoved }) => {
  const { i18n } = useTranslation();
  return (
    <motion.div
      initial={initialStyles}
      animate={
        isMoved
          ? i18n.language === 'iw'
            ? { transform: 'translate(120px,-20px) scale(0.7)' }
            : {
                transform: 'translate(-120px,-20px) scale(0.7)',
              }
          : initialStyles
      }
      className={classes.avatar}
    />
  );
};
