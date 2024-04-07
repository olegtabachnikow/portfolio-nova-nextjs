import { FC } from 'react';
import classes from './Avatar.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { setIsStarted } from '@/redux/interface-slice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';

interface Props {
  isMoved: boolean;
}

const initialScale = { transform: 'translate(0px, 0px) scale(1)' };

const Avatar: FC<Props> = ({ isMoved }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { i18n } = useTranslation();
  const isStarted = useSelector(
    (state: RootState) => state.interface.isStarted
  );
  const avatarPosition = isStarted
    ? isMoved
      ? {
          transform: `translate(${
            i18n.language === 'iw' ? '150px' : '-150px'
          }, -165px) scale(0.25)`,
        }
      : { transform: 'translate(0px, -145px) scale(0.329)' }
    : initialScale;

  const avatarBackground = isStarted ? '#0b111a' : 'rgba(255, 255, 255, 0.1)';
  const imageTransform = {
    transform: isStarted
      ? 'translate(0px,200px) scale(1.3)'
      : initialScale.transform,
  };
  const handleClick = () => {
    dispatch(setIsStarted(true));
    setTimeout(() => router.push('/'), 1000);
  };
  return (
    <motion.div
      className={classes.avatar}
      initial={avatarPosition}
      animate={avatarPosition}
    >
      <div className={classes.container}>
        <div className={classes.container_inner}>
          <motion.div
            className={classes.overlay}
            initial={{ backgroundColor: avatarBackground }}
            animate={{ backgroundColor: avatarBackground }}
          />
          <motion.div
            className={classes.image_wrapper}
            initial={isStarted ? imageTransform : initialScale}
            animate={imageTransform}
          >
            <Image
              className={classes.img}
              src={'/images/nobgpicture.png'}
              width={400}
              quality={100}
              height={600}
              alt='Oleg Tabachnikow - Frontend Developer'
            />
          </motion.div>
          <motion.button
            onClick={handleClick}
            initial={{ top: 440, opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            animate={
              isStarted ? { top: 600, opacity: 0 } : { top: 440, opacity: 0.7 }
            }
            className={classes.button}
          >
            <Image
              src='/images/play.svg'
              width={64}
              height={64}
              alt='play (start)'
              style={{ transform: 'translateX(5px)' }}
              quality={100}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Avatar;
