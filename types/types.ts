export type ButtonItemLangType = { lang: string; name: string };

export type ButtonItemLinkType = {
  page: string;
  link: string;
  image?: string;
  alt?: string;
};

export type CardPageType = 'About' | 'Skills' | 'Experience';

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

export interface SkillListType {
  image: string;
  title: string;
}
