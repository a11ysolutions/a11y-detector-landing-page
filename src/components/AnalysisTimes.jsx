import React from 'react'
import { Clock, Shuffle, AlertTriangle, Bell } from 'lucide-react'

const AnalysisTimes = () => {
  const analysisTimes = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "20–30 minutos",
      description: "Duración típica por ejecución"
    },
    {
      icon: <Shuffle className="w-8 h-8" />,
      title: "Variable",
      description: "Depende de la cantidad de elementos interactivos y contenido"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Timeout automático",
      description: "Para detectar errores de ejecución"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Notificaciones",
      description: "Disponibles al finalizar el proceso o ante errores"
    }
  ]

  return (
    <section className="py-16 section-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Tiempos de análisis
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            El tiempo de análisis varía según la complejidad de la página
          </p>
          <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {analysisTimes.map((item, index) => (
            <div key={index} className="feature-card bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="feature-icon mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnalysisTimes
