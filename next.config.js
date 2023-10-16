const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    NEXT_CV:
      'https://github.com/olegtabachnikow/portfolio-nova-nextjs/raw/main/public/OLEG_TABACHNIKOW_CV.pdf',
  },
};

module.exports = nextConfig;
