import { FC } from 'react';
import classes from './Certificate.module.css';
import { CertificateType } from '@/types/types';
import Image from 'next/image';
import { PhotoView } from 'react-photo-view';

interface Props {
  certificate: CertificateType;
}

const Certificate: FC<Props> = ({ certificate }) => {
  const { image, title, author, length, company } = certificate;
  return (
    <div className={classes.container}>
      <PhotoView src={image}>
        <Image
          className={classes.image}
          src={image}
          alt={title}
          width={340}
          height={215}
        />
      </PhotoView>
      <div className={classes.info}>
        <span className={classes.title}>{title}</span>
        <span className={classes.author}>
          {author === 'Adukar' ? company : author + ', ' + company}
        </span>
        <span className={classes.length}>{`${length}h`}</span>
      </div>
    </div>
  );
};

export default Certificate;
