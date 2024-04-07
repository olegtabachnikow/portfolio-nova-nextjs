import { FC } from 'react';
import classes from './NotFoundContent.module.css';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const NotFoundContent: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.container}>
      <div className='space' />
      <div className={classes.wrapper}>
        <div className={classes.glitch} data-text='404 '>
          404
        </div>
      </div>
      <div className={classes.wrapper}>
        <div
          style={{ fontSize: 25 }}
          className={classes.glitch}
          data-text={t('notfound')}
        >
          {t('notfound')}
        </div>
      </div>
      <div className={classes.linkwrapper}>
        <Link className={classes.link} href={`/${i18n.language}`}>
          {t('return')}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundContent;
