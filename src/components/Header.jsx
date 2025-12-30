import React, { useState } from 'react'
import { Globe } from 'lucide-react'
import logoImage from '/assets/images/logo-green-ntEDZESj.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('es')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const changeLanguage = (lang) => {
    setCurrentLang(lang)
    // Aquí iría la lógica de cambio de idioma
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
          <a href="#contact" className="nav-link">Contáctanos</a>
          <div className="language-selector-container" role="group" aria-labelledby="languageSelectorLabel">
            <Globe />
            <label id="languageSelectorLabel" htmlFor="lang-select" className="sr-only">Selector de idioma. Idioma actual: Español</label>
            <select
              id="lang-select"
              value={currentLang}
              onChange={(e) => changeLanguage(e.target.value)}
              aria-describedby="languageInstruction"
            >
              <option value="en">INGLÉS</option>
              <option value="es">ESPAÑOL</option>
            </select>
            <div id="languageInstruction" className="sr-only">
              Use las flechas para navegar y presione Enter para seleccionar
            </div>
          </div>
        </div>

        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
                Contáctanos
              </a>

              <div className="language-selector-container">
                <Globe />
                <select
                  value={currentLang}
                  onChange={(e) => changeLanguage(e.target.value)}
                >
                  <option value="en">INGLÉS</option>
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
