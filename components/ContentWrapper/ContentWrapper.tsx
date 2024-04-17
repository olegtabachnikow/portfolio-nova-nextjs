import { FC } from 'react';
import classes from './ContentWrapper.module.css';
import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactNode;
  firstButtonPage: string;
  secondButtonPage: string;
  handleWindowChange: (page: string) => void;
  currentWindow: string;
  page: string;
}

const ContentWrapper: FC<Props> = ({
  children,
  firstButtonPage,
  secondButtonPage,
  currentWindow,
  handleWindowChange,
  page,
}) => {
  const { i18n, t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.container_inner}>
        <div
          className={classes.navigation}
          style={{
            flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
          }}
        >
          <button
            onClick={() => handleWindowChange(firstButtonPage)}
            className={`${classes.navigation_button} ${
              currentWindow === firstButtonPage ? classes.active : ''
            }`}
          >
            {t(`${page}.${firstButtonPage}`)}
          </button>
          <button
            onClick={() => handleWindowChange(secondButtonPage)}
            className={`${classes.navigation_button} ${
              currentWindow === secondButtonPage ? classes.active : ''
            }`}
          >
            {t(`${page}.${secondButtonPage}`)}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
