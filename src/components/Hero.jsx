import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="hero bg-gradient-to-br from-gray-50 to-white pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="hero-content max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold white-text mb-4 md:mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          <p className="text-lg sm:text-xl white-text mb-6 md:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
            {t('hero.description')}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white text-base sm:text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            {t('hero.cta')}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
