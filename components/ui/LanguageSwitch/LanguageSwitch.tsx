import { FC, useState } from 'react';
import classes from './LanguageSwitch.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  isNovaPage?: boolean;
}

export const LanguageSwitch: FC<Props> = ({ isNovaPage }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { i18n } = useTranslation('translation');
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <div
      onClick={() => setIsActive((state) => !state)}
      className={classes.container}
      style={{
        top: isTabletOrMobile ? 15 : 30,
        right: isTabletOrMobile ? 15 : 30,
      }}
    >
      <button className={classes.button + ' ' + classes.main}>
        <Image
          src={
            i18n.language === 'en'
              ? '/images/england.svg'
              : i18n.language === 'iw'
              ? '/images/israel.svg'
              : '/images/ru.svg'
          }
          alt='flag'
          width={30}
          height={30}
        />
      </button>
      <motion.div
        animate={{
          transform: isActive ? 'translateX(-80px)' : 'translateX(0)',
        }}
        className={classes.item}
      >
        {i18n.language === 'iw' ? (
          <Link href={`/en${isNovaPage ? '/nova' : ''}`} locale='en'>
            <motion.div className={classes.button}>
              <Image
                src={'/images/england.svg'}
                alt='english flag'
                width={30}
                height={30}
              />
            </motion.div>
          </Link>
        ) : (
          <Link href={`/iw${isNovaPage ? '/nova' : ''}`} locale='iw'>
            <motion.div className={classes.button}>
              <Image
                src={'/images/israel.svg'}
                alt='israel flag'
                width={30}
                height={30}
              />
            </motion.div>
          </Link>
        )}
      </motion.div>
      <motion.div
        animate={{
          transform: isActive ? 'translateX(-160px)' : 'translateX(0)',
        }}
        className={classes.item}
      >
        {i18n.language === 'ru' ? (
          <Link href={`/en${isNovaPage ? '/nova' : ''}`} locale='en'>
            <motion.div className={classes.button}>
              <Image
                src={'/images/england.svg'}
                alt='english flag'
                width={30}
                height={30}
              />
            </motion.div>
          </Link>
        ) : (
          <Link href={`/ru${isNovaPage ? '/nova' : ''}`} locale='ru'>
            <motion.div className={classes.button}>
              <Image
                src={'/images/ru.svg'}
                alt='russian flag'
                width={30}
                height={30}
              />
            </motion.div>
          </Link>
        )}
      </motion.div>
    </div>
  );
};
