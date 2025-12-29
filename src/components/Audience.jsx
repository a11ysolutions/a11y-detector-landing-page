import React from 'react'
import { Building, Users, FileText, Code } from 'lucide-react'

const Audience = () => {
  const audiences = [
    {
      icon: <Building className="w-12 h-12 text-green-600" />,
      title: "Empresas y Organizaciones",
      description: "Para empresas que necesitan cumplir con la Ley Europea de Accesibilidad y garantizar que sus sitios web sean inclusivos para todos los usuarios."
    },
    {
      icon: <Code className="w-12 h-12 text-green-600" />,
      title: "Desarrolladores Web",
      description: "Para equipos de desarrollo que quieren integrar la accesibilidad desde las primeras etapas del desarrollo y mantener estándares de calidad."
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Agencias y Consultoras",
      description: "Para agencias digitales que ofrecen servicios de accesibilidad y necesitan herramientas eficientes para auditar y mejorar sus proyectos."
    },
    {
      icon: <FileText className="w-12 h-12 text-green-600" />,
      title: "Instituciones Públicas",
      description: "Para entidades gubernamentales y organizaciones públicas que deben cumplir con normativas de accesibilidad digital obligatorias."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Para quién es A11i Detector?
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="audience-card bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="audience-icon mb-6 flex justify-center">
                {audience.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
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
