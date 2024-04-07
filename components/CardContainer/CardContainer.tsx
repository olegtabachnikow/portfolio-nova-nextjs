import { FC } from 'react';
import classes from './CardContainer.module.css';
import { CardHeader } from '../CardHeader/CardHeader';
import { motion } from 'framer-motion';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

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

  return (
    <motion.div
      initial={{ height: cardHeight }}
      animate={{
        height: cardHeight,
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
