'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18nConfig } from '@/lib/i18n.config';

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (lng: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = lng;
    router.push(segments.join('/'));
  };

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
