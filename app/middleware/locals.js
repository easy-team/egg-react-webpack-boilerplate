const en = require('../lib/i18n/en');
const zh = require('../lib/i18n/zh');
const locales = {
  en,
  zh
};
/* { Error: [React Intl Error MISSING_DATA] Missing locale data for locale: "zh" in Intl.NumberFormat. 
Using default locale: "en" as fallback. See https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md#runtime-requirements for more details
- Starting with Node.js 13.0.0 full-icu is supported by default.
- https://github.com/formatjs/react-intl/issues/1531
*/
module.exports = () => {
  return async function locale(ctx, next) {
    const locale = ctx.query.locale || ctx.cookies.get('locale') || 'en';
    ctx.locals.locale = locale;
    ctx.locals.origin = ctx.request.origin;
    ctx.locals.i18n = locales[locale] || locales.en;
    ctx.cookies.set('locale', locale);
    await next();
  };
};