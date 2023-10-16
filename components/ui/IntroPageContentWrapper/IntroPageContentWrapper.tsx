import { FC, ReactNode } from 'react';
import classes from './IntroPageContentWrapper.module.css';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const IntroPageContentWrapper: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ translateY: 50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.35, delay: 0.3 }}
      className={classes.container}
    >
      {children}
    </motion.div>
  );
};

export default IntroPageContentWrapper;
