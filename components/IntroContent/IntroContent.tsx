import { FC, useEffect } from 'react';
import classes from './IntroContent.module.css';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Avatar from '../Avatar/Avatar';
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setIsCardHeaderMoved } from '@/redux/interface-slice';

const initialScale = { transform: 'translate(0px, 0px) scale(1)' };

const IntroContent: FC = () => {
  const isMoved = useSelector(
    (state: RootState) => state.interface.cardHeaderMoved
  );
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isStarted = useSelector(
    (state: RootState) => state.interface.isStarted
  );
  const cardPage = useSelector((state: RootState) => state.interface.cardPage);
  const cardHeight = useSelector(
    (state: RootState) => state.interface.cardHeight
  );

  const titlePosition = isStarted
    ? isMoved
      ? i18n.language === 'iw'
        ? { transform: 'translate(-3px, -105px) scale(0.7)' }
        : { transform: 'translate(15px, -105px) scale(0.7)' }
      : initialScale
    : { transform: 'translate(0, 245px) scale(1.2)' };

  const subtitlePosition = isStarted
    ? isMoved
      ? i18n.language === 'iw'
        ? { transform: 'translate(30px, -115px) scale(0.9)' }
        : { transform: 'translate(3px, -115px) scale(0.8)' }
      : initialScale
    : { transform: 'translate(0, 250px) scale(1.2)' };

  useEffect(() => {
    cardPage === 'About'
      ? dispatch(setIsCardHeaderMoved(false))
      : dispatch(setIsCardHeaderMoved(true));
  }, [cardPage]);

  return (
    <>
      <motion.div
        initial={{ opacity: isStarted ? 0 : 1 }}
        animate={{ opacity: isStarted ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={classes.intro_overlay}
        style={{
          pointerEvents: isStarted ? 'none' : 'all',
        }}
      />
      <motion.div
        initial={{ height: cardHeight }}
        animate={{ height: cardHeight }}
        transition={{ duration: 0.2 }}
        className={classes.container}
        style={{
          pointerEvents: isStarted ? 'none' : 'all',
          zIndex: isStarted ? 2 : 5,
        }}
      >
        <Avatar isMoved={isMoved} />
        <motion.h1
          initial={titlePosition}
          animate={titlePosition}
          className={classes.title}
        >
          {t('myinfo.name')}
        </motion.h1>
        <motion.h2
          initial={subtitlePosition}
          animate={subtitlePosition}
          className={classes.subtitle}
        >
          {t('myinfo.job')}
        </motion.h2>
      </motion.div>
    </>
  );
};

export default IntroContent;
