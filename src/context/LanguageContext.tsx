import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '@/types';
import { translations, type TranslationKey } from '@/locales/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: TranslationKey) => string;
  getProductField: <T extends string>(product: Record<string, unknown>, field: T) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('gulchehra_lang');
    return (saved as Language) || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('gulchehra_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: TranslationKey): string => {
    return translations[lang]?.[key] || translations.uz[key] || key;
  };

  const getProductField = <T extends string>(product: Record<string, unknown>, field: T): string => {
    const key = `${field}_${lang}` as string;
    return (product[key] as string) || (product[`${field}_uz`] as string) || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getProductField }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
