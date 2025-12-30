import React, { createContext, useContext, useState, useEffect } from 'react'
import esTranslations from './locales/es.json'
import enTranslations from './locales/en.json'

const translations = {
  es: esTranslations,
  en: enTranslations
}

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Intentar obtener el idioma del localStorage, por defecto 'es'
    const saved = localStorage.getItem('a11y-language')
    return saved || 'es'
  })

  useEffect(() => {
    // Guardar el idioma en localStorage cuando cambie
    localStorage.setItem('a11y-language', language)
  }, [language])

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage)
    }
  }

  const t = (key, fallback = '') => {
    const keys = key.split('.')
    let value = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || fallback
  }

  const value = {
    language,
    changeLanguage,
    t,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
