import { FC } from 'react';
import classes from './SkillsButton.module.css';
import { motion } from 'framer-motion';
import { isDesktop } from 'react-device-detect';

interface Props {
  text: string;
  onClick: () => void;
}

const SkillsButton: FC<Props> = ({ text, onClick }) => {
  return (
    <motion.button
      initial={{ opacity: isDesktop ? 0.7 : 1 }}
      whileHover={{ opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      className={classes.button}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default SkillsButton;
