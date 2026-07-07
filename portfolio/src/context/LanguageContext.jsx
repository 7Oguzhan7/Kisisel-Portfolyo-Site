import React, { createContext, useState, useContext, useEffect } from 'react';

const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      contact: 'İletişim'
    },
    footer: {
      builtWith: 'ile geliştirildi'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    footer: {
      builtWith: 'built with'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('tr');

  // Load language from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLang(prev => {
      const nextLang = prev === 'tr' ? 'en' : 'tr';
      localStorage.setItem('portfolio-lang', nextLang);
      return nextLang;
    });
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (section, key) => {
    return translations[lang]?.[section]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
