import { FC } from 'react';
import classes from './IntroPageAvatar.module.css';
import { motion } from 'framer-motion';

interface Props {
  isMoved: boolean;
  isLaunched: boolean;
}

const IntroPageAvatar: FC<Props> = ({ isMoved, isLaunched }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(-130px) scale(0.2)' }}
      animate={{
        opacity: 1,
        transform: isLaunched
          ? 'translateY(-130px) scale(0.01)'
          : 'translateY(-130px) scale(1)',
      }}
      transition={{ duration: 0.3 }}
      className={classes.avatar}
    >
      <motion.div
        initial={{ transform: 'scale(0.48)' }}
        animate={{ transform: isMoved ? 'scale(0.54)' : 'scale(0.48)' }}
        transition={{ duration: 0.3 }}
        className={classes.container}
      >
        <div className={classes.container_inner}>
          <div className={classes.overlay} />
          <img className={classes.circle} src={'/images/space.jpeg'} />
          <motion.img
            initial={{ transform: 'translateY(150px) scale(1.35)' }}
            animate={{
              transform: isMoved
                ? 'translateY(90px) scale(1.6)'
                : 'translateY(150px) scale(1.35)',
            }}
            className={classes.img}
            src={'/images/me.png'}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroPageAvatar;
