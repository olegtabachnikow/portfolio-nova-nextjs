import { FC } from 'react';
import classes from './PlaygroundContent.module.css';
import CustomButton from '../CustomButton/CustomButton';
import { setIsCardHidden } from '@/redux/interface-slice';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const PlaygroundContent: FC = () => {
  const { t, i18n } = useTranslation('translation');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsCardHidden(true));
  };
  return (
    <div className={classes.box}>
      <p className={classes.text} dir={i18n.language === 'iw' ? 'rtl' : 'ltr'}>
        {t('playground.text')}
      </p>
      <CustomButton onClick={handleClick} text={t('playground.button')} />
    </div>
  );
};

export default PlaygroundContent;
