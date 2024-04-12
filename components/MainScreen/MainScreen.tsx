import { FC } from 'react';
import classes from './MainScreen.module.css';
import { Nova } from '@/components/Nova/Nova';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const MainScreen: FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <main className={classes.main}>
      {children}
      <Nova isPlaygroundPage={router.route === '/playground'} />
    </main>
  );
};

export default MainScreen;
