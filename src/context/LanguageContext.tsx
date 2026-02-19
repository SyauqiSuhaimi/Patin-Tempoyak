import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Language, type TranslationContent } from '../i18n/translations';

const LANGUAGE_STORAGE_KEY = 'ptkz_language';
const GEO_IP_ENDPOINT = 'https://ipwho.is/?fields=country_code';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: TranslationContent;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getInitialLanguage = (): { language: Language; autoDetected: boolean } => {
  if (typeof window === 'undefined') {
    return { language: 'en', autoDetected: false };
  }

  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  if (queryLanguage === 'en' || queryLanguage === 'ms') {
    return { language: queryLanguage, autoDetected: false };
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage === 'en' || storedLanguage === 'ms') {
    return { language: storedLanguage, autoDetected: false };
  }

  const browserLanguage = window.navigator.language.toLowerCase().startsWith('ms') ? 'ms' : 'en';
  return { language: browserLanguage, autoDetected: true };
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const initialLanguageState = getInitialLanguage();
  const [language, setLanguageState] = useState<Language>(initialLanguageState.language);
  const [autoDetected, setAutoDetected] = useState(initialLanguageState.autoDetected);

  const setLanguage = (nextLanguage: Language) => {
    setAutoDetected(false);
    setLanguageState(nextLanguage);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', nextLanguage);
      window.history.replaceState({}, '', url);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ms' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language === 'ms' ? 'ms-MY' : 'en';
  }, [language]);

  useEffect(() => {
    if (autoDetected || typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [autoDetected, language]);

  useEffect(() => {
    if (!autoDetected || typeof window === 'undefined') {
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 2500);
    let ignore = false;

    const resolveCountryLanguage = async () => {
      try {
        const response = await fetch(GEO_IP_ENDPOINT, { signal: controller.signal });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { country_code?: string };
        if (ignore) {
          return;
        }

        const geoLanguage = data.country_code === 'MY' ? 'ms' : 'en';
        setLanguageState(geoLanguage);
        setAutoDetected(false);
      } catch {
        setAutoDetected(false);
      } finally {
        window.clearTimeout(timeoutId);
      }
    };

    resolveCountryLanguage();

    return () => {
      ignore = true;
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [autoDetected]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
};
