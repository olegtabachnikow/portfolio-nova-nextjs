import { FC } from 'react';
import classes from './Project.module.css';
import Image from 'next/image';
import { SocialIcon } from 'react-custom-social-icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import type { ProjectType } from '@/types/types';

interface Props {
  project: ProjectType;
}

const Project: FC<Props> = ({ project }) => {
  const { image, description, gitLink, link, title, isNpm, isTg, withPreview } =
    project;
  const { t, i18n } = useTranslation('translation');
  const isHebrew = i18n.language === 'iw';
  return (
    <div className={classes.container}>
      <Image src={image} alt={title} width={340} height={200} />
      <div className={classes.info}>
        {isNpm && (
          <Image
            className={classes.npm}
            src='/images/npm.svg'
            width={40}
            height={15}
            alt='npm package'
          />
        )}
        <span className={classes.title}>{title}</span>
        <span dir={isHebrew ? 'rtl' : 'ltr'} className={classes.description}>
          {t(description)}
        </span>
        <div
          className={classes.link_container}
          style={{ flexDirection: isHebrew ? 'row-reverse' : 'row' }}
        >
          <Link
            style={{ flexDirection: isHebrew ? 'row-reverse' : 'row' }}
            href={gitLink}
            className={classes.link}
            target='_blank'
          >
            <SocialIcon
              network={isTg ? 'telegram' : 'github'}
              size={32}
              shape='round'
            />
            <span className={classes.link_text}>
              {isTg ? 'Telegram' : 'GitHub'}
            </span>
          </Link>
          {withPreview && (
            <Link
              href={link}
              className={classes.link}
              style={{ flexDirection: isHebrew ? 'row-reverse' : 'row' }}
              target='_blank'
            >
              <Image
                src='/images/magnifier.svg'
                width={32}
                height={32}
                alt='magnifier'
              />
              <span className={classes.link_text}>{t('projects.preview')}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
