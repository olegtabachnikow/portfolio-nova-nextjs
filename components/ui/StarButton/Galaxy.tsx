import { FC, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import classes from './Galaxy.module.css';
import { motion } from 'framer-motion';

const stars: number[] = new Array(20).fill(1);
const starsStatic: number[] = new Array(5).fill(1);

interface Props {
  isDisabled: boolean;
}

const Galaxy: FC<Props> = ({ isDisabled }) => {
  const { t } = useTranslation();

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
    <>
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
    </>
  );
};

export default Galaxy;
