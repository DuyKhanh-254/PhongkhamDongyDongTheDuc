import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { vi } from '../locales/vi';
import { ko } from '../locales/ko';
import { zh } from '../locales/zh';

type Language = 'vi' | 'ko' | 'zh';

type TranslationKeys = typeof vi;

// Helper to get nested value by dot notation (e.g., 'nav.home')
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
};

// Context Definition
interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const dictionaries: Record<Language, any> = { vi, ko, zh };

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Load lang from localStorage or default to 'vi'
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'vi' || saved === 'ko' || saved === 'zh') return saved;
    return 'vi';
  });

  useEffect(() => {
    localStorage.setItem('language', lang);
  }, [lang]);

  const t = (key: string) => {
    const value = getNestedValue(dictionaries[lang], key);
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
