import { FC } from 'react';
import classes from './IntroTextBlock.module.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Props {
  isMoved: boolean;
}

const IntroTextBlock: FC<Props> = ({ isMoved }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{
        translateY: 0,
        opacity: 0,
      }}
      animate={{
        translateY: isMoved ? 0 : 130,
        opacity: isMoved ? 1 : 0,
      }}
      transition={{ duration: 0.35 }}
      className={classes.container}
    >
      <p>{t('welcome1')}</p>
      <p> {t('welcome2')}</p>
    </motion.div>
  );
};

export default IntroTextBlock;
