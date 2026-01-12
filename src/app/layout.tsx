
import { i18nConfig, AppLocale } from '@/lib/i18n.config';
import { getLocale, initI18n } from '@/lib/i18n.server';
import I18nProvider from '@/app/I18nProvider';
import Header from '@/app/(components)/Header';

// Retorna metadados das páginas e diz para engines de busca quais locales (idiomas) estão disponíveis
export async function generateMetadata() {
  const locale = await getLocale();

  return {
    alternates: {
      languages: {
        en: '/en',
        pt: '/pt'
      }
    },
  };
}

const NAMESPACES = ['common'];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  // Instancia o i18n e faz o pre-load de determinados JSONs
  // Nesse caso, faz pre-load do JSON common, que se trata de artefatos que todas as páginas utilizam
  // Caso mais JSONs sejam necessários (por exemplo, quero que tudo que está na pagina home ja seja carregado), adicionar estes na lista
  const i18n = await initI18n(locale, NAMESPACES);

  // Embrulha a página no componente de internacionalização
  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale} namespaces={NAMESPACES}>
          <Header />
          
          <main style={{ padding: '16px' }}>
            {children}
          </main>
        </I18nProvider>
      </body>
    </html>
  );
}
