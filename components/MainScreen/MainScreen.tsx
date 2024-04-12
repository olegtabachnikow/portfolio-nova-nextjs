import { FC, useEffect } from 'react';
import classes from './MainScreen.module.css';
import { Nova } from '@/components/Nova/Nova';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Props {
  children: React.ReactNode;
}

const MainScreen: FC<Props> = ({ children }) => {
  const router = useRouter();
  const isStarted = useSelector(
    (state: RootState) => state.interface.isStarted
  );

  useEffect(() => {
    !isStarted && router.route !== '/' && router.push('/');
  }, [isStarted]);

  return (
    <main className={classes.main}>
      {children}
      <Nova isPlaygroundPage={router.route === '/playground'} />
    </main>
  );
};

export default MainScreen;
