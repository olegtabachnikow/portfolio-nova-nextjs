import { FC, ReactNode } from 'react';
import classes from './HomeScreen.module.css';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  isStarted: boolean;
}

const HomeScreen: FC<Props> = ({ children, isStarted }) => {
  return (
    <main className={classes.main}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isStarted ? { opacity: 0 } : { opacity: 1 }}
        className={classes.space}
      />
      {children}
    </main>
  );
};

export default HomeScreen;
