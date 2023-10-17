module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'iw'],
    localeDetection: false,
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath:
      typeof window === 'undefined'
        ? require('path').resolve('./public/locales')
        : '/locales',
  },
};
