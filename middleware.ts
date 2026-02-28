import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeDetection: false
});

export const config = {
    // Match only internationalized pathnames
    // Catch-all regex to match all routes except next internals, api, and static files
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/(es|en|bn)/:path*']
};
