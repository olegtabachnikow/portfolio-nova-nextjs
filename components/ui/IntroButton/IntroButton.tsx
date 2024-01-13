import { FC } from 'react';
import classes from './IntroButton.module.css';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  onClick?: () => void;
  isMoved: boolean;
}

const IntroButton: FC<Props> = ({ text, onClick, isMoved }) => {
  return (
    <motion.button
      initial={{
        translateY: 0,
        opacity: 0,
      }}
      animate={{
        translateY: isMoved ? 0 : 130,
        opacity: isMoved ? 0.8 : 0,
      }}
      whileHover={{ opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.35 }}
      onClick={onClick}
      className={classes.button}
    >
      {text}
    </motion.button>
  );
};

export default IntroButton;
