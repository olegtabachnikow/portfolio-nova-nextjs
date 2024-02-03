import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import classes from './BurgerMenu.module.css';
import Navigation from '../Navigation/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setIsBurgerMenuOpen } from '@/redux/interface-slice';

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
    clipPath: 'circle(25px at 260px 40px)',
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

const BurgerMenu: FC = () => {
  const isOpen = useSelector(
    (state: RootState) => state.interface.isBurgerMenuOpen
  );
  const dispatch = useDispatch();
  const burgerMenuRef = useRef<HTMLElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    if (
      burgerMenuRef.current &&
      !burgerMenuRef.current.contains(targetElement)
    ) {
      dispatch(setIsBurgerMenuOpen(false));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      ref={burgerMenuRef}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div className={classes.background} variants={sidebar} />
      <Navigation />
      <button
        className={classes.button}
        onClick={() => dispatch(setIsBurgerMenuOpen(!isOpen))}
      >
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
