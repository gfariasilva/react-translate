'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { i18nConfig } from '@/lib/i18n.config';

const initI18n = (locale: string, namespaces: string[]) => {
  const i18n = createInstance();

  i18n
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) =>
      import(`../../../public/locales/${language}/${namespace}.json`)
    ))
    .init({
      lng: locale,
      fallbackLng: i18nConfig.defaultLocale || 'en',
      supportedLngs: i18nConfig.locales,
      ns: namespaces,
      defaultNS: namespaces[0],
      fallbackNS: namespaces[0],
      interpolation: {
        escapeValue: false,
      },
    });

  return i18n;
};

export default function I18nProvider({
  children,
  locale,
  namespaces
}: {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
}) {
  const i18n = initI18n(locale, namespaces);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}