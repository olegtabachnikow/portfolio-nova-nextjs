import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import classes from './IntroAvatar.module.css';

interface Props {
  isDisabled: boolean;
}

const IntroAvatar: FC<Props> = ({ isDisabled }) => {
  return (
    <motion.div
      initial={{
        opacity: isDisabled ? 1 : 0,
      }}
      animate={{
        opacity: isDisabled ? 1 : 0,
      }}
      transition={{ duration: 0.35 }}
      className={classes.image}
    >
      <Image
        src='/images/myphoto.webp'
        alt='picture of author'
        width={300}
        height={300}
        quality={100}
      />
    </motion.div>
  );
};

export default IntroAvatar;
