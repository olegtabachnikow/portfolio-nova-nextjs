import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AboutContent from '@/components/AboutContent/AboutContent';
import { useTranslation } from 'react-i18next';

export default function Page() {
  return <AboutContent />;
}

export const metadata = {
  generator: 'Next.js',
  applicationName: "Oleg's frontent web developer portfolio",
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Frontend',
    'Web Developer',
    'Oleg Tabachnikow',
  ],
  authors: [{ name: 'Oleg Tabachnikow' }],
  creator: 'Oleg Tabachnikow',
  publisher: 'Oleg Tabachnikow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: '/images/preview.png',
  },
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translationsProps = await serverSideTranslations(locale ?? 'en', [
    'translation',
  ]);

  return {
    props: {
      ...translationsProps,
    },
  };
};
