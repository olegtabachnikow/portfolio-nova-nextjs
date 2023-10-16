import { FC } from 'react';
import classes from './ExperienceItem.module.css';
import { useTranslation } from 'next-i18next';

interface Props {
  year: string;
  title: string;
  text: string;
}

export const ExperienceItem: FC<Props> = ({ year, title, text }) => {
  const { i18n } = useTranslation();
  const isHebrew = i18n.language === 'iw';
  return (
    <div
      className={classes.item}
      style={{
        flexDirection: isHebrew ? 'row-reverse' : 'row',
      }}
    >
      <div
        className={classes.orb}
        style={
          isHebrew
            ? {
                left: 'auto',
                right: 36,
              }
            : {}
        }
      />
      <div
        className={classes.line}
        style={isHebrew ? { left: 'auto', right: 40 } : {}}
      />
      <div className={classes.date}>{year}</div>
      <div
        className={classes.section}
        style={{
          padding: isHebrew ? '5px 13px 1px 0' : '5px 0 1px 13px',
        }}
      >
        <span className={classes.title}>{title}</span>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};
