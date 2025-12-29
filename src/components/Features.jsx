import React from 'react'
import { CheckCircle, Users, Clock, FileCheck } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Análisis Automatizado",
      description: "Escaneo completo del sitio web con detección automática de problemas según WCAG 2.1 nivel AA y cumplimiento con la norma técnica EN 301 549."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-green-600" />,
      title: "Reportes Detallados",
      description: "Informes completos con severidad y prioridad, recomendaciones específicas para corrección y guías paso a paso para implementar soluciones."
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Corrección Guiada",
      description: "Proporciona guías paso a paso y soluciones prácticas para implementar las correcciones necesarias en tu código."
    },
    {
      icon: <Clock className="w-12 h-12 text-green-600" />,
      title: "Integración Continua",
      description: "Se integra en tu flujo de desarrollo para mantener la accesibilidad como parte del proceso de calidad."
    }
  ]

  return (
    <section className="py-16 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-white">¿Qué es A11i Detector y</span>{' '}
            <span className="text-green-400">cómo funciona?</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="features-grid flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex-1 min-w-72 max-w-sm">
              <div className="feature-icon mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
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
