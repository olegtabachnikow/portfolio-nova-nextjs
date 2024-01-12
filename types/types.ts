export type ButtonItemLangType = { lang: string; image: string; alt: string };

export type ButtonItemLinkType = {
  page: string;
  image: string;
  alt: string;
  link: string;
};

export type CardPageType = 'About' | 'Contact' | 'Experience';

export interface ProjectType {
  title: string;
  image: string;
  description: string;
  link: string;
  gitLink: string;
  isNpm: boolean;
  withPreview: boolean;
  isTg?: boolean;
}

export interface CertificateType {
  image: string;
  title: string;
  author: string;
  length: number;
  company: string;
}
