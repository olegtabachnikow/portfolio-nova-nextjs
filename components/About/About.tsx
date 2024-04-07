import { FC } from 'react';
import classes from './About.module.css';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { useTranslation } from 'next-i18next';
import LinkBox from '../LinkBox/LinkBox';

export const About: FC = () => {
  const { t } = useTranslation();
  return (
    <CardContentWrapper>
      <span className={classes.title}>{t('about.title')}</span>
      <p className={classes.text}>{t('about.text')}</p>
      <LinkBox />
    </CardContentWrapper>
  );
};
