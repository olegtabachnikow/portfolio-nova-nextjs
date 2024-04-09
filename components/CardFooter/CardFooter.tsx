import { FC } from 'react';
import classes from './CardFooter.module.css';
import { ButtonSetButton } from '../ButtonSetButton/ButtonSetButton';
import { useTranslation } from 'next-i18next';

export const CardFooter: FC = () => {
  const { i18n } = useTranslation('translation');
  return (
    <div
      className={classes.footer}
      style={{ flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row' }}
    >
      <ButtonSetButton text='About' />
      <ButtonSetButton text='Experience' />
      <ButtonSetButton text='Skills' />
    </div>
  );
};
