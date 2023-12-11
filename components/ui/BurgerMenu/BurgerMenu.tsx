import { FC, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import classes from './BurgerMenu.module.css';
import Navigation from '../Navigation/Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(25px at 260px 38px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props: any) => (
  <motion.path strokeWidth='3' stroke='#fff' strokeLinecap='round' {...props} />
);

interface Props {
  isNovaPage?: boolean;
}

const BurgerMenu: FC<Props> = ({ isNovaPage }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <motion.div className={classes.background} variants={sidebar} />
      <Navigation isNovaPage={isNovaPage} />
      <button className={classes.button} onClick={() => toggleOpen()}>
        <svg width='23' height='23' viewBox='0 0 23 23'>
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <Path
            d='M 2 9.423 L 20 9.423'
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
};

export default BurgerMenu;
