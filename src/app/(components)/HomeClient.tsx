'use client';

import { useTranslation, Trans } from 'react-i18next';

export default function HomeClient() {
  // Usa artefatos de tradução dos JSONs "common" e "home"
  const { t } = useTranslation(['common', 'home']);
  // Retorna os itens de acordo com a tradução do JSON
  return (
    <main>
      <h1>{t('nav.home')}</h1>
      <p>
        <Trans i18nKey="home:intro">
          Welcome to <strong>Next.js + i18next</strong>!
        </Trans>
      </p>
    </main>
  );
}
