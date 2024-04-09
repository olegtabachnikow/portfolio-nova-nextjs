import { FC, useEffect } from 'react';
import classes from './CardContainer.module.css';
import { CardHeader } from '../CardHeader/CardHeader';
import { motion } from 'framer-motion';
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setIsCardHidden } from '@/redux/interface-slice';

interface Props {
  children: React.ReactNode;
}

const CardContainer: FC<Props> = ({ children }) => {
  const isMoved = useSelector(
    (state: RootState) => state.interface.cardHeaderMoved
  );
  const cardHeight = useSelector(
    (state: RootState) => state.interface.cardHeight
  );
  const isCardHidden = useSelector(
    (state: RootState) => state.interface.isCardHidden
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    router.route !== '/playground' && dispatch(setIsCardHidden(false));
  }, [router.route]);

  return (
    <motion.div
      initial={{ height: cardHeight }}
      animate={{
        height: cardHeight,
        opacity: isCardHidden ? 0 : 1,
        pointerEvents: isCardHidden ? 'none' : 'all',
      }}
      transition={{ duration: 0.2 }}
      className={classes.card}
    >
      <div className={classes.overlay} />
      <div className={classes.container}>
        <CardHeader isMoved={isMoved} />
        {children}
      </div>
    </motion.div>
  );
};

export default CardContainer;
