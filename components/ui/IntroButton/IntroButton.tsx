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
    <motion.div
      initial={{
        translateY: 0,
        opacity: 0,
      }}
      animate={{
        translateY: isMoved ? 0 : 130,
        opacity: isMoved ? 1 : 0,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.35 }}
      className={classes.button_border}
    >
      <button onClick={onClick} className={classes.button}>
        {text}
      </button>
      ;
    </motion.div>
  );
};

export default IntroButton;
