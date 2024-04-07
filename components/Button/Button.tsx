import { FC } from 'react';
import classes from './Button.module.css';
import { useTranslation } from 'next-i18next';
import { CardPageType } from '@/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setCardPage } from '@/redux/interface-slice';

interface Props {
  text: CardPageType;
}

export const Button: FC<Props> = ({ text }) => {
  const dispatch = useDispatch();
  const cardPage = useSelector((state: RootState) => state.interface.cardPage);
  const { t } = useTranslation('translation');
  function getText(str: CardPageType) {
    if (str === 'About') {
      return t('footer.about');
    }
    if (str === 'Experience') {
      return t('footer.experience');
    }
    if (str === 'Skills') {
      return t('footer.skills');
    }
  }
  const isActive = cardPage === text;

  function handleClick() {
    dispatch(setCardPage(text));
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
