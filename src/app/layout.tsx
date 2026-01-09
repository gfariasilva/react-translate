
import { i18nConfig, AppLocale } from '@/lib/i18n.config';
import { initI18n } from '@/lib/i18n.server';
import { I18nextProvider } from 'react-i18next';
import Header from './[locale]/(components)/Header';

// Diz para o Next qual parâmetros de rotas dinâmicas deve gerar
export async function generateStaticParams() {
  return i18nConfig.locales.map((lng: string) => ({ locale: lng }));
}

// Retorna metadados das páginas e diz para engines de busca quais locales (idiomas) estão disponíveis
export async function generateMetadata({ params: { locale } }: { params: { locale: AppLocale } }) {
  return {
    alternates: {
      languages: {
        en: '/en',
        pt: '/pt'
      }
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: AppLocale };
}) {
  // Instancia o i18n e faz o pre-load de determinados JSONs
  // Nesse caso, faz pre-load do JSON common, que se trata de artefatos que todas as páginas utilizam
  // Caso mais JSONs sejam necessários (por exemplo, quero que tudo que está na pagina home ja seja carregado), adicionar estes na lista
  const i18n = await initI18n(locale, ['common']);

  // Embrulha a página no componente de internacionalização
  return (
    <html lang={locale}>
      <body>
        <I18nextProvider i18n={i18n}>
          <Header />
          
          <main style={{ padding: '16px' }}>
            {children}
          </main>
        </I18nextProvider>
      </body>
    </html>
  );
}
