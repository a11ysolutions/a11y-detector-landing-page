import React from 'react'
import { CheckCircle, Users, Clock, FileCheck } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const Features = () => {
  const { t } = useLanguage()

  const features = t('features.items').map((item, index) => {
    const icons = [<CheckCircle />, <FileCheck />, <Users />, <Clock />]
    return {
      icon: React.cloneElement(icons[index], { className: "w-12 h-12 text-green-600" }),
      title: item.title,
      description: item.description
    }
  })

  return (
    <section className="py-16 section-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-white">{t('features.title')}</span>{' '}
            <span className="text-green-400">{t('features.title_highlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
      </div>
    </section>
  )
}

export default Features
