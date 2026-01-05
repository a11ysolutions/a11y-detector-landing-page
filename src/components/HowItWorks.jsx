import React from 'react'
import { useLanguage } from '../LanguageContext'

const HowItWorks = () => {
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      title: t('how_it_works.steps.1.title'),
      description: t('how_it_works.steps.1.description'),
      features: t('how_it_works.steps.1.features'),
      note: t('how_it_works.steps.1.note')
    },
    {
      number: "02",
      title: t('how_it_works.steps.2.title'),
      description: t('how_it_works.steps.2.description'),
      features: t('how_it_works.steps.2.features'),
      note: t('how_it_works.steps.2.note')
    },
    {
      number: "03",
      title: t('how_it_works.steps.3.title'),
      description: t('how_it_works.steps.3.description'),
      features: t('how_it_works.steps.3.features'),
      note: t('how_it_works.steps.3.note')
    }
  ]

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('how_it_works.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Un proceso simple y eficiente para detectar y gestionar issues de accesibilidad
          </p>
          <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const isRightAligned = index === 1; // Paso 2 (índice 1) va a la derecha
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Columna izquierda - vacía para pasos que van a la derecha */}
                  {isRightAligned && <div className="hidden lg:block"></div>}

                  {/* Columna derecha - contenido */}
                  <div className={`space-y-4 ${isRightAligned ? 'lg:text-right lg:[&_p]:text-left lg:[&_ul]:text-left lg:[&_h3]:text-left' : 'lg:text-left'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${isRightAligned ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <span className="text-5xl font-extrabold text-[#16A34A]">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                        {step.number === '01' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="4"></circle>
                            <line x1="21.17" x2="12" y1="8" y2="8"></line>
                            <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                            <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
                          </svg>
                        )}
                        {step.number === '02' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                          </svg>
                        )}
                        {step.number === '03' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" x2="12" y1="15" y2="3"></line>
                          </svg>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#16A34A] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-[#16A34A] rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-gray-500 italic border-l-4 border-green-400 pl-4">
                      {step.note}
                    </p>
                  </div>

                  {/* Columna izquierda - contenido para pasos que van a la izquierda */}
                  {!isRightAligned && <div className="hidden lg:block"></div>}
                </div>
              );
            })}
          </div>

          {/* Sección adicional de notificaciones */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#16A34A]">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
              <h4 className="text-lg font-semibold text-gray-900">
                {t('how_it_works.notifications.title')}
              </h4>
            </div>
            <p className="text-gray-600 mb-4">
              {t('how_it_works.notifications.description')}
            </p>
            <ul className="space-y-2">
              {t('how_it_works.notifications.features').map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#16A34A] rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 italic mt-4">
              {t('how_it_works.notifications.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
