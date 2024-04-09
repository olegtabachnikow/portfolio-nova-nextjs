import { FC } from 'react';
import classes from './CustomButton.module.css';
import { isDesktop } from 'react-device-detect';
import { motion } from 'framer-motion';

interface Props {
  isSubmitButton?: boolean;
  text: string;
  onClick?: () => void;
}

const CustomButton: FC<Props> = ({ isSubmitButton, onClick, text }) => {
  return (
    <motion.button
      type={isSubmitButton ? 'submit' : 'button'}
      className={classes.button}
      onClick={onClick}
      initial={{ opacity: isDesktop ? 0.7 : 1 }}
      whileHover={{ opacity: 1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
};

export default CustomButton;
