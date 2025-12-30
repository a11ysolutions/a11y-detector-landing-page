import React from 'react'
import { Building, Users, FileText, Code } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const Audience = () => {
  const { t } = useLanguage()

  const audiences = t('audience.items').map((item, index) => {
    const icons = [<Building />, <Code />, <Users />, <FileText />]
    return {
      icon: React.cloneElement(icons[index], { className: "w-12 h-12 text-green-600" }),
      title: item.title,
      description: item.description
    }
  })

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('audience.title')}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="audience-card bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="audience-icon mb-4 md:mb-6 flex justify-center">
                {audience.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 md:mb-4 text-center">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audience
