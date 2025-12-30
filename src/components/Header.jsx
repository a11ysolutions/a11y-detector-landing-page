import React, { useState } from 'react'
import logoImage from '/assets/images/logo-green-ntEDZESj.png'
import { useLanguage } from '../LanguageContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, changeLanguage, t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white text-gray-900 fixed top-0 w-full z-[100] shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <img
            src={logoImage}
            alt="A11i Detector Logo"
            className="h-7 w-auto"
            style={{filter: 'brightness(0) saturate(100%)'}}
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#contact" className="nav-link">{t('nav.contact')}</a>
          <div className="language-selector-container" role="group" aria-labelledby="languageSelectorLabel">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600" aria-hidden="true">
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <label id="languageSelectorLabel" htmlFor="lang-select" className="sr-only">{t('accessibility.language_selector')}</label>
            <select
              id="lang-select"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              aria-describedby="languageInstruction"
            >
              <option value="en">ENGLISH</option>
              <option value="es">ESPAÑOL</option>
            </select>
            <div id="languageInstruction" className="sr-only">
              {t('accessibility.language_instruction')}
            </div>
          </div>
        </div>

        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={t('accessibility.menu_toggle')}
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex flex-col gap-4">
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </a>

              <div className="language-selector-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600" aria-hidden="true">
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                  <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"></path>
                  <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <select
                  value={language}
                  onChange={(e) => changeLanguage(e.target.value)}
                >
                  <option value="en">ENGLISH</option>
                  <option value="es">ESPAÑOL</option>
                </select>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
