import React from 'react'
import { Database, Eye, MapPin, Trash2, FileText, TrendingUp } from 'lucide-react'

const DashboardResults = () => {
  const dashboardFeatures = [
    {
      icon: <Database className="w-6 h-6 text-green-600" />,
      text: "Todas las ejecuciones quedan guardadas y accesibles"
    },
    {
      icon: <Eye className="w-6 h-6 text-green-600" />,
      text: "Evidencia visual asociada a cada issue"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      text: "Acceso directo al punto exacto del problema en la página"
    },
    {
      icon: <Trash2 className="w-6 h-6 text-green-600" />,
      text: "Posibilidad de descartar issues antes de descargar el reporte final"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      text: "Notas y estados para facilitar la colaboración entre equipos"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      text: "Base sólida para comparaciones futuras entre ejecuciones"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dashboard y gestión de resultados
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
            A11i Detector no es solo un escáner automático. Es una herramienta pensada para el trabajo real de equipos técnicos.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contenido de texto */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A11i Detector no es solo un escáner automático. Es una herramienta pensada para el trabajo real de equipos técnicos:
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
              <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg border border-gray-300">
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Imagen próximamente</span>
                  </div>
                  <p className="text-gray-600 italic">
                    Captura del Dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardResults
