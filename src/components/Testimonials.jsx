import React from 'react'
import { Star, TrendingUp, Users, Clock, CheckCircle, FileCheck } from 'lucide-react'

const Testimonials = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      value: "500+",
      label: "Sitios auditados"
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      value: "95%",
      label: "Precisión en detección"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      value: "24h",
      label: "Tiempo promedio de análisis"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      value: "100%",
      label: "Cumplimiento WCAG garantizado"
    }
  ]

  const testimonials = [
    {
      quote: "A11i Detector nos permitió identificar y corregir problemas críticos de accesibilidad en tiempo récord. Ahora cumplimos con la Ley Europea de Accesibilidad sin complicaciones.",
      author: "Ana García",
      position: "Directora de Tecnología en Empresa XYZ"
    },
    {
      quote: "Como herramienta automática, A11i Detector es increíblemente eficiente. Nos ahorra semanas de trabajo manual y garantiza que mantenemos los estándares de accesibilidad.",
      author: "Carlos Rodríguez",
      position: "Lead Developer en Agencia Digital ABC"
    }
  ]

  return (
    <section className="py-16 section-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Confianza y Resultados
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="metric-card p-4 md:p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <blockquote className="text-white mb-4 md:mb-6 text-base md:text-lg italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-white">
                <div className="font-semibold text-green-400 text-sm md:text-base">{testimonial.author}</div>
                <div className="text-xs md:text-sm opacity-80">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
