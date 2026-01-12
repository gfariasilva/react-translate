'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18nConfig } from '@/lib/i18n.config';
import { useTranslation } from 'react-i18next';

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const switchTo = (lng: string) => {
    // Muda a linguagem do objeto instanciado do i18n
    i18n.changeLanguage(lng);

    // Muda a linguagem no cookie
    document.cookie = `i18next=${lng}; path=/; max-age=31536000; SameSite=Lax`;

    // Força o Next a recarregar a página, pegando o valor atualizado do cookie
    router.refresh(); 
  };

  // Renderiza um botão pra cada locale disponível nas configs do i18n
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {i18nConfig.locales.map((lng) => (
        <button 
          key={lng} 
          onClick={() => switchTo(lng)}
          style={{ 
             fontWeight: i18n.language === lng ? 'bold' : 'normal',
             textDecoration: i18n.language === lng ? 'underline' : 'none'
          }}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
