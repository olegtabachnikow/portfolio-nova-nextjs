import { FC } from 'react';
import classes from './Contact.module.css';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import LinkBox from '../LinkBox/LinkBox';
import CustomButton from '../CustomButton/CustomButton';

export const Contact: FC = () => {
  const { t, i18n } = useTranslation();
  const handleClick = () => {
    window.open(process.env.NEXT_PUBLIC_CV as string, '_blank');
    return;
  };

  return (
    <CardContentWrapper>
      <div className={classes.linkbox}>
        <LinkBox />
      </div>
      <motion.a
        whileTap={{ scale: 0.8 }}
        whileHover={{ opacity: 1 }}
        className={classes.link}
        style={{
          flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
        }}
        href='https://maps.app.goo.gl/6eiMM5aqH1RDXTnX7'
        target='blank'
      >
        <div
          className={classes.iconbox}
          id={i18n.language === 'iw' ? classes.reversed1 : undefined}
        >
          <Image
            className={classes.icon}
            src={'/images/location.svg'}
            alt='location marker icon'
            width={25}
            height={25}
          />
        </div>
        <span>{t('contact.address')}</span>
      </motion.a>
      <motion.a
        whileTap={{ scale: 0.8 }}
        whileHover={{ opacity: 1 }}
        className={classes.link}
        style={{
          flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
        }}
        href='tel:+972539240665'
      >
        <div
          className={classes.iconbox}
          id={i18n.language === 'iw' ? classes.reversed2 : undefined}
        >
          <Image
            className={classes.icon}
            src={'/images/phone.svg'}
            alt='phone icon'
            width={25}
            height={25}
          />
        </div>
        <span>+972539240665</span>
      </motion.a>
      <motion.a
        whileTap={{ scale: 0.8 }}
        whileHover={{ opacity: 1 }}
        className={classes.link}
        style={{
          flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
        }}
        href='mailto:olegtabachnikow@gmail.com'
      >
        <div
          className={classes.iconbox}
          id={i18n.language === 'iw' ? classes.reversed3 : undefined}
        >
          <Image
            className={classes.icon}
            src={'/images/mail.svg'}
            alt='email icon'
            width={25}
            height={25}
          />
        </div>
        <span>olegtabachnikow@gmail.com</span>
      </motion.a>
      <CustomButton text={t('contact.button')} onClick={handleClick} />
    </CardContentWrapper>
  );
};
