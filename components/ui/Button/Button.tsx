import { FC } from 'react';
import classes from './Button.module.css';
import { useTranslation } from 'next-i18next';
import { CardPageType } from '../NovaContent/NovaContent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setCardPage } from '@/redux/card-page-slice';

interface Props {
  text: CardPageType;
}

export const Button: FC<Props> = ({ text }) => {
  const dispatch = useDispatch();
  const cardPage = useSelector((state: RootState) => state.cardPage.cardPage);
  const { t } = useTranslation('translation');
  function getText(str: string) {
    if (str === 'About') {
      return t('footer.about');
    }
    if (str === 'Experience') {
      return t('footer.experience');
    }
    if (str === 'Contact') {
      return t('footer.contact');
    }
  }
  const isActive = cardPage === text;

  function handleClick() {
    dispatch(setCardPage({ cardPage: text }));
  }
  return (
    <button
      className={classes.button}
      id={isActive ? classes.active : undefined}
      onClick={handleClick}
    >
      {getText(text)}
    </button>
  );
};
