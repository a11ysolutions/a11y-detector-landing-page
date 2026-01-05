import React from 'react'
import { CheckCircle, Eye, Shield, Check } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const Features = () => {
  const { t } = useLanguage()

  const features = t('features.items').map((item, index) => {
    const icons = [<CheckCircle />, <Eye />, <Shield />]
    return {
      icon: React.cloneElement(icons[index], { className: "w-12 h-12 text-green-600" }),
      title: item.title,
      description: item.description
    }
  })

  return (
    <section id="features" className="py-16 section-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-white">{t('features.title')}</span>{' '}
            <span className="text-green-400">{t('features.title_highlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        {/* Párrafo descriptivo principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed mb-8">
            {t('features.description')}
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="feature-icon mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('features.functionality') }}></p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('features.compliance') }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
