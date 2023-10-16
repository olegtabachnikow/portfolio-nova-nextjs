import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import classes from './GalaxyButton.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';

const stars: number[] = new Array(20).fill(1);
const starsStatic: number[] = new Array(5).fill(1);

interface Props {
  isStarted: boolean;
  isDisabled: boolean;
  setIsStarted: Dispatch<SetStateAction<boolean>>;
}

export const GalaxyButton: FC<Props> = ({
  isStarted,
  isDisabled,
  setIsStarted,
}) => {
  const { locale, push } = useRouter();
  const { t } = useTranslation();

  function handleClick() {
    setIsStarted(true);
    setTimeout(() => {
      push(`/${locale}/nova`);
    }, 350);
  }

  useEffect(() => {
    setIsStarted(false);
  }, []);

  useEffect(() => {
    const getRndValue = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    const particles = document.querySelectorAll(`.${classes.star}`);
    particles.forEach((particle) => {
      particle.setAttribute(
        'style',
        `
        --angle: ${getRndValue(0, 360)};
        --duration: ${getRndValue(6, 20)};
        --delay: ${getRndValue(1, 10)};
        --alpha: ${getRndValue(30, 90) / 100};
        --size: ${getRndValue(4, 6)};
        --distance: ${getRndValue(130, 200)};
      `
      );
    });
  }, []);

  return (
    <motion.button
      disabled={isDisabled}
      whileHover={{ scale: isStarted ? 0 : isDisabled ? 1.45 : 0.95 }}
      whileTap={{ scale: isDisabled ? 1.45 : 0.9 }}
      initial={{
        scale: isStarted ? 0 : isDisabled ? 1.5 : 1,
        translateY: isDisabled ? -150 : 0,
      }}
      animate={{
        scale: isStarted ? 0 : isDisabled ? 1.5 : 1,
        translateY: isDisabled ? -150 : 0,
      }}
      transition={{ duration: 0.35 }}
      className={classes.button}
      onClick={handleClick}
    >
      <div className={classes.shadow} />
      <div className={classes.cone} />
      <motion.div
        initial={{
          opacity: isDisabled ? 1 : 0,
        }}
        animate={{
          opacity: isDisabled ? 1 : 0,
        }}
        transition={{ duration: 0.35 }}
        className={classes.image}
      >
        <Image
          src='/images/myphoto.jpg'
          alt='picture of author'
          width={300}
          height={300}
          quality={100}
        />
      </motion.div>
      <motion.div className={classes.galaxy}>
        <motion.div
          initial={{ transform: 'translate(100px, 100px)' }}
          animate={!isDisabled && { transform: 'translate(0, 0)' }}
          transition={{ duration: 0.5, delay: 1 }}
          className={classes.bigstar}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={!isDisabled && { opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={classes.stars}
        >
          {stars.map((el, i) => (
            <span key={el + i} className={classes.star} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={!isDisabled && { opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {starsStatic.map((el, i) => (
            <span key={`${el + i}-static`} className={classes.static} />
          ))}
        </motion.div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={!isDisabled && { opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={classes.text}
      >
        {t('start')}
      </motion.span>
    </motion.button>
  );
};
