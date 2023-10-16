import { FC } from 'react';
import classes from './IntroTextBlock.module.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface Props {
  isDisabled: boolean;
}

const IntroTextBlock: FC<Props> = ({ isDisabled }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{
        translateY: -20,
        opacity: 1,
      }}
      animate={{
        translateY: isDisabled ? -20 : 130,
        opacity: isDisabled ? 1 : 0,
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
