import { FC } from 'react';
import classes from './CardHeader.module.css';
import { motion } from 'framer-motion';

interface CardHeaderProps {
  isMoved: boolean;
  children?: React.ReactNode;
}

export const CardHeader: FC<CardHeaderProps> = ({ isMoved, children }) => {
  return (
    <motion.div
      initial={{ height: 200 }}
      animate={{ height: isMoved ? 100 : 200 }}
      transition={{ duration: 0.2 }}
      className={classes.header}
    >
      <motion.div
        initial={{ height: 200 }}
        animate={{ height: isMoved ? 100 : 200 }}
        transition={{ duration: 0.2 }}
        className={classes.overlay}
      />
      {children}
    </motion.div>
  );
};
