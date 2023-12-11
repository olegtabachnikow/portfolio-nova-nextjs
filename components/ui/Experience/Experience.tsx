import { FC } from 'react';
import classes from './Experience.module.css';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { useTranslation } from 'next-i18next';

export const Experience: FC = () => {
  const { t } = useTranslation();
  return (
    <CardContentWrapper>
      <span className={classes.title}>{t('experience.title')}</span>
      <div className={classes.container}>
        <ExperienceItem
          year={'2023'}
          title={t('experience.item1.company')}
          text={t('experience.item1.text')}
        />
        <ExperienceItem
          year={'2023'}
          title={t('experience.item2.company')}
          text={t('experience.item2.text')}
        />
        <ExperienceItem
          year={'2022'}
          title={t('experience.item3.company')}
          text={t('experience.item3.text')}
        />
        <ExperienceItem
          year={'2022'}
          title={t('experience.item4.company')}
          text={t('experience.item4.text')}
        />
      </div>
    </CardContentWrapper>
  );
};
