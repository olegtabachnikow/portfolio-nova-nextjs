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
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <motion.div
      initial={{
        top: isTabletOrMobile ? 350 : 500,
        opacity: 1,
      }}
      animate={{
        top: isDisabled
          ? isTabletOrMobile
            ? 350
            : 500
          : isTabletOrMobile
          ? 450
          : 600,
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
