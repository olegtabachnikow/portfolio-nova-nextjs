import { FC } from 'react';
import classes from './CardFooter.module.css';
import { Button } from '../Button/Button';
import { useTranslation } from 'next-i18next';

export const CardFooter: FC = () => {
  const { i18n } = useTranslation('translation');
  return (
    <div
      className={classes.footer}
      style={{ flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row' }}
    >
      <Button text='About' />
      <Button text='Experience' />
      <Button text='Contact' />
    </div>
  );
};
