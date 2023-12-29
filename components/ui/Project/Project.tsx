import { FC, useState } from 'react';
import classes from './Project.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-custom-social-icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export interface ProjectType {
  theme: string;
  title: string;
  image: string;
  description: string;
  link: string;
  gitLink: string;
}

const buttonVariants = {
  expanded: {
    transform: 'rotate(0deg)',
    transition: { duration: 0.3 },
  },
  notExpanded: {
    transform: 'rotate(270deg)',
    transition: { duration: 0.3 },
  },
};

interface Props {
  project: ProjectType;
}

const Project: FC<Props> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { theme, image, description, gitLink, link, title } = project;
  const { t, i18n } = useTranslation('translation');

  const toggleExpand = () => {
    setIsExpanded((state) => !state);
  };

  return (
    <div
      className={classes.container}
      style={{
        filter:
          theme === 'dark'
            ? 'drop-shadow(2px 2px 4px rgba(107, 60, 163, 0.9))'
            : 'drop-shadow(2px 2px 4px rgba(255, 192, 103, 0.9))',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Link href={link} target='_blank'>
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1.05 }}
            initial={{ scale: 1.05 }}
            transition={{ bounce: 0 }}
          >
            <Image
              className={classes.image}
              src={image}
              width={300}
              height={200}
              alt='project cover'
            />
          </motion.div>
          <motion.span
            style={{
              backgroundColor:
                theme === 'dark' ? '#6b3ca3' : 'rgb(255, 192, 103)',
            }}
            initial={{ scale: 1.2 }}
            animate={
              isExpanded ? { scale: 1 } : { scale: 1.2, translateX: '-10%' }
            }
            className={theme === 'dark' ? classes.title_light : classes.title}
          >
            {title}
          </motion.span>
        </Link>
      </div>
      <motion.div
        initial={{ left: -180 }}
        animate={{ left: isExpanded ? 0 : -140 }}
        className={
          theme === 'dark' ? classes.expand_left_dark : classes.expand_left
        }
      >
        <motion.button
          style={{
            filter:
              theme === 'dark'
                ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)'
                : 'none',
          }}
          onClick={toggleExpand}
          className={classes.plus}
          whileHover={{ opacity: 0.5 }}
        >
          <span className={classes.stroke} />
          <motion.span
            initial={{
              transform: 'rotate(90deg)',
            }}
            animate={isExpanded ? 'expanded' : 'notExpanded'}
            variants={buttonVariants}
            className={classes.stroke}
          />
        </motion.button>
        <div
          style={{ fontSize: i18n.language === 'iw' ? '13px' : '14px' }}
          dir={i18n.language === 'iw' ? 'rtl' : 'ltr'}
          className={
            theme === 'dark'
              ? classes.description_container
              : classes.description_container_light
          }
        >
          {t(description)}
        </div>
      </motion.div>
      <motion.div
        initial={{ top: -180 }}
        animate={{ top: isExpanded ? -100 : -170 }}
        className={
          theme === 'dark' ? classes.expand_top_dark : classes.expand_top
        }
      >
        <Link href={gitLink} target='_blank'>
          <SocialIcon
            network='github'
            size={40}
            shape='round'
            className={classes.git}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default Project;
