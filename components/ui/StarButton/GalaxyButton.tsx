import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import classes from './GalaxyButton.module.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import IntroAvatar from './IntroAvatar';
import Galaxy from './Galaxy';

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
  const [isAvatarShown, setIsAvatarShown] = useState<boolean>(true);
  const [isGalaxyShown, setIsGalaxyShown] = useState<boolean>(false);
  const { locale, push } = useRouter();

  function handleClick() {
    setIsStarted(true);
    setTimeout(() => {
      push(`/${locale}/nova`);
    }, 350);
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDisabled) {
      setIsGalaxyShown(true);
      timeout = setTimeout(() => setIsAvatarShown(false), 350);
    }
    return () => clearTimeout(timeout);
  }, [isDisabled]);

  useEffect(() => {
    setIsStarted(false);
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
      {isAvatarShown ? <IntroAvatar isDisabled={isDisabled} /> : null}
      {isGalaxyShown ? <Galaxy isDisabled={isDisabled} /> : null}
    </motion.button>
  );
};
