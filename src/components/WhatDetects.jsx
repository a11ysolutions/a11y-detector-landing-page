import React from 'react'
import { Keyboard, Eye, Image, Monitor, MoreHorizontal } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const WhatDetects = () => {
  const { t } = useLanguage()

  const detectionCategories = [
    {
      icon: <Keyboard className="w-12 h-12 text-green-600" />,
      title: t('what_detects.categories.keyboard_focus.title'),
      description: t('what_detects.categories.keyboard_focus.description'),
      items: t('what_detects.categories.keyboard_focus.items')
    },
    {
      icon: <Eye className="w-12 h-12 text-green-600" />,
      title: t('what_detects.categories.contrast.title'),
      description: t('what_detects.categories.contrast.description'),
      items: t('what_detects.categories.contrast.items')
    },
    {
      icon: <Image className="w-12 h-12 text-green-600" />,
      title: t('what_detects.categories.images_screen_reader.title'),
      description: t('what_detects.categories.images_screen_reader.description'),
      items: t('what_detects.categories.images_screen_reader.items')
    },
    {
      icon: <Monitor className="w-12 h-12 text-green-600" />,
      title: t('what_detects.categories.reflow_zoom.title'),
      description: t('what_detects.categories.reflow_zoom.description'),
      items: t('what_detects.categories.reflow_zoom.items')
    },
    {
      icon: <MoreHorizontal className="w-12 h-12 text-green-600" />,
      title: t('what_detects.categories.additional.title'),
      description: t('what_detects.categories.additional.description'),
      items: t('what_detects.categories.additional.items')
    }
  ]

  return (
    <section id="what-detects" className="py-16 section-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {t('what_detects.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            {t('what_detects.subtitle')}
          </p>
          <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {detectionCategories.map((category, index) => (
              <div key={index} className="feature-card bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="feature-icon mb-6 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatDetects
