import { FC, ReactNode } from 'react';
import classes from './HomeScreen.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Props {
  children: ReactNode;
  isStarted: boolean;
}

const HomeScreen: FC<Props> = ({ children }) => {
  const opacity = useSelector((state: RootState) => state.interface.opacity);
  return (
    <main className={classes.main}>
      <div className='space' style={{ opacity: opacity }} />
      {children}
    </main>
  );
};

export default HomeScreen;
