import React from 'react'
import { Keyboard, Eye, Image, Monitor, MoreHorizontal } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const WhatDetects = () => {
  const { t } = useLanguage()

  const detectionCategories = [
    {
      icon: <Keyboard className="w-12 h-12 text-green-600" />,
      title: "Teclado y foco",
      description: "Validación completa de navegación por teclado, focus traps y indicadores visuales",
      items: [
        "Elementos interactivos que deben o no recibir foco mediante navegación con Tab",
        "Detección de trampas de teclado",
        "Verificación de operabilidad con teclado (Enter y Espacio)",
        "Validación de focus trap en modales",
        "Comprobación de orden lógico del foco y visibilidad del indicador de foco"
      ]
    },
    {
      icon: <Eye className="w-12 h-12 text-green-600" />,
      title: "Contraste (incluye estados)",
      description: "Análisis exhaustivo de ratios de contraste en texto, elementos interactivos y estados",
      items: [
        "Contraste de texto",
        "Contraste del indicador de foco y estado hover",
        "Contraste en iconos y elementos no textuales",
        "Contraste en radios y checkboxes (borde y estado seleccionado)",
        "Contraste considerando transparencias y color percibido por el usuario",
        "Contraste de enlaces dentro de bloques de texto"
      ]
    },
    {
      icon: <Image className="w-12 h-12 text-green-600" />,
      title: "Imágenes y screen reader",
      description: "Evaluación de alt text, logos y compatibilidad con lectores de pantalla",
      items: [
        "Evaluación y recomendaciones de alt text",
        "Identificación de logos y validación de su tratamiento",
        "Mejora de la experiencia para usuarios de lectores de pantalla"
      ]
    },
    {
      icon: <Monitor className="w-12 h-12 text-green-600" />,
      title: "Reflow y zoom",
      description: "Verificación de responsive design y accesibilidad en diferentes niveles de zoom",
      items: [
        "Detección de textos cortados o solapados",
        "Verificación de reflow correcto según viewport",
        "Prevención de scroll horizontal (doble scroll)",
        "Validaciones relacionadas con zoom y reflow del contenido"
      ]
    },
    {
      icon: <MoreHorizontal className="w-12 h-12 text-green-600" />,
      title: "Y más...",
      description: "Validaciones adicionales según WCAG 2.1 y mejores prácticas de accesibilidad",
      items: [
        "Validaciones adicionales según WCAG 2.1",
        "Detección de errores comunes de accesibilidad",
        "Análisis continuo de nuevos patrones"
      ]
    }
  ]

  return (
    <section id="what-detects" className="py-16 section-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Qué detecta A11i Detector?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Cobertura exhaustiva de los problemas de accesibilidad más frecuentes e impactantes
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
