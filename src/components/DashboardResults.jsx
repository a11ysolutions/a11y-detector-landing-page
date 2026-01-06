import React from 'react'
import { Database, Eye, MapPin, Trash2, FileText, TrendingUp } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const DashboardResults = () => {
  const { t } = useLanguage()

  const dashboardFeatures = [
    {
      icon: <Database className="w-6 h-6 text-[#066044]" />,
      text: t('dashboard_results.features')[0]
    },
    {
      icon: <Eye className="w-6 h-6 text-[#066044]" />,
      text: t('dashboard_results.features')[1]
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#066044]" />,
      text: t('dashboard_results.features')[2]
    },
    {
      icon: <Trash2 className="w-6 h-6 text-[#066044]" />,
      text: t('dashboard_results.features')[3]
    },
    {
      icon: <FileText className="w-6 h-6 text-[#066044]" />,
      text: t('dashboard_results.features')[4]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#066044]" />,
      text: t('dashboard_results.features')[5]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('dashboard_results.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
            {t('dashboard_results.subtitle')}
          </p>
          <div className="w-16 sm:w-24 h-1 bg-[#066044] mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contenido de texto */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('dashboard_results.description')}
              </p>

              <ul className="space-y-4">
                {dashboardFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Imagen del dashboard */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <img
                  src="/assets/images/2.png"
                  alt={t('dashboard_results.image_alt')}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardResults
