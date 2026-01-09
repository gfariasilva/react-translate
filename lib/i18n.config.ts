export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'pt'] as const,
} as const;

// Exporta um tipo de variável "AppLocale" que contém os locales suportados pela aplicação (nesse caso, 'en' | 'pt')
export type AppLocale = (typeof i18nConfig)['locales'][number];