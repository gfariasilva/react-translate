'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18nConfig } from '@/lib/i18n.config';

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Pega a URL, faz uma lista separando pelas '/' e altera a linguagem de acordo com o parâmetro "lng"
  // Remonta a URL depois e redireciona para a página correta
  const switchTo = (lng: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = lng;
    router.push(segments.join('/'));
  };

  // Renderiza um botão pra cada locale disponível nas configs do i18n
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {i18nConfig.locales.map((lng) => (
        <button key={lng} onClick={() => switchTo(lng)}>
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
