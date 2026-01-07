import React, { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import videoFile from '/assets/videos/A11YDetector.mp4'
import posterImage from '/assets/images/1.png'

const Hero = () => {
  const { t } = useLanguage()
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="hero pt-20 md:pt-24 pb-12 md:pb-16" style={{ background: 'linear-gradient(to right bottom, rgb(13, 158, 113), rgb(0, 0, 0))' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="hero-content max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse border border-green-400"></span>
            {t('hero.subtitle')}
          </div>

          <h1 className="text-white mb-4 md:mb-6" style={{ fontSize: '60px', lineHeight: '60px', fontWeight: '800' }} dangerouslySetInnerHTML={{ __html: t('hero.title') }}>
          </h1>

          <p className="text-lg sm:text-xl text-white mb-6 md:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex gap-4 justify-center items-center mb-8 md:mb-12">
            <a
              href="#contact"
              className="hero-cta-primary inline-flex items-center gap-2 px-8 py-0 bg-black text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-black/50 h-11"
              onClick={(e) => {
                // Remove focus after click to prevent persistent white outline
                setTimeout(() => e.target.blur(), 100);
              }}
            >
              {t('hero.cta_primary')}
            </a>

            <button
              onClick={() => {
                setIsDemoModalOpen(true);
                // Remove focus after click to prevent persistent white outline
                setTimeout(() => {
                  const activeElement = document.activeElement;
                  if (activeElement && activeElement.tagName === 'BUTTON') {
                    activeElement.blur();
                  }
                }, 100);
              }}
              className="hero-cta-secondary inline-flex items-center gap-2 px-8 py-0 bg-white/10 border border-white/30 text-white text-base font-semibold rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 h-11"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
              {t('hero.cta_secondary')}
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6 md:pt-8">
            <p className="text-sm text-white mb-4 font-medium">
              {t('hero.standards_title')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {t('hero.standards').map((standard, index) => (
                <div key={index} className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium">
                  {standard}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {t('hero.cta_secondary')}
                </h2>
                <button
                  onClick={() => setIsDemoModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Cerrar modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="aspect-video bg-black rounded-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster={posterImage}
                      preload="metadata"
                    >
                      <source src={videoFile} type="video/mp4" />
                      <p className="text-white text-center py-8">
                        Tu navegador no soporta el elemento de video.
                        <br />
                        <a href={videoFile} className="text-blue-400 underline">Descarga el video</a>
                      </p>
                    </video>
                  </div>
                  <p className="text-gray-600 text-sm mt-2 text-center">
                    Demo completa de A11i Detector
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
