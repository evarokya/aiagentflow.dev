import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales } from './request';

export const routing = defineRouting({
    locales,
    defaultLocale: 'bn'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
