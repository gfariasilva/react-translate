import { createInstance, i18n as I18nType } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { i18nConfig } from './i18n.config';
import { cookies } from 'next/headers';

export async function getLocale() {
  const cookieStore = await cookies();
  // Tenta pegar do cookie 'i18next', senão usa o padrão
  return cookieStore.get('i18next')?.value || i18nConfig.defaultLocale;
}

// Cria uma nova instância do i18n
// locale: linguagem atual
// ns: namespace (JSON) a ser carregado
export async function initI18n(locale: string, ns: string[] = ['common']): Promise<I18nType> {
  const i18n = createInstance();

  await i18n
    .use(initReactI18next)
    .use(
      // Carrega o JSON de tradução
      resourcesToBackend((lng: string, namespace: string) =>
        import(`../../public/locales/${lng}/${namespace}.json`)
      )
    )
    .init({
      lng: locale,
      // Se tiver faltando, pega o locale padrão (definido no arquivo de config)
      fallbackLng: i18nConfig.defaultLocale,
      // Linguagens suportadas
      supportedLngs: i18nConfig.locales as unknown as string[],
      // Quais JSONs carregar pra essa página
      ns,
      defaultNS: 'common',
      // Escape de valores já é feito pelo React, por isso falso aqui
      interpolation: { escapeValue: false },
      react: { useSuspense: false }
    });

  return i18n;
}
