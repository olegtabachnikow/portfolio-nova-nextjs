import { FC } from 'react';
import classes from './Notification.module.css';
import space from '../HomeScreen/HomeScreen.module.css';
import { useTranslation } from 'next-i18next';

const Notification: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.notification}>
      <div className={space.space} />
      <h1>{t('rotate')}</h1>
    </div>
  );
};

export default Notification;
