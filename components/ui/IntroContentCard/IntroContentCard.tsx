import { FC } from 'react';
import classes from './IntroContentCard.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
  isLaunched: boolean;
}

const IntroContentCard: FC<Props> = ({ children, isLaunched }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translate(-50%, -30%) scale(0.2)' }}
      animate={{
        opacity: 1,
        transform: isLaunched
          ? 'translate(-50%, -50%) scale(0.01)'
          : ' translate(-50%, -30%)scale(1)',
      }}
      transition={{ duration: 0.3 }}
      className={classes.container}
    >
      <div className={classes.overlay} />
      <div className={classes.container_inner}>
        <Image
          className={classes.background}
          src='/images/background.jpeg'
          width={340}
          height={90}
          alt='bg'
        />
        {children}
      </div>
    </motion.div>
  );
};

export default IntroContentCard;
