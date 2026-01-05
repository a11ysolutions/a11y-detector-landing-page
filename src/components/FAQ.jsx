import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const FAQ = () => {
  const { t } = useLanguage()
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqItems = [
    {
      question: "¿A11i Detector reemplaza una auditoría manual?",
      answer: "No, A11i Detector es una herramienta complementaria. Automatiza la detección del 70% de los problemas más comunes, pero las auditorías manuales expertas siguen siendo esenciales para casos complejos y validación final."
    },
    {
      question: "¿Qué nivel de cobertura ofrece?",
      answer: "A11i Detector cubre más del 70% de los problemas de accesibilidad más frecuentes según las pautas WCAG 2.1 Nivel AA, incluyendo teclado, foco, contraste, imágenes, navegación y responsive design."
    },
    {
      question: "¿Sobre qué páginas puedo ejecutar el análisis?",
      answer: "Puedes ejecutar análisis sobre cualquier URL pública accesible desde internet. La extensión funciona en páginas web completas o secciones específicas que selecciones manualmente."
    },
    {
      question: "¿Cuánto tarda un análisis?",
      answer: "El tiempo varía según la complejidad de la página (20-30 minutos típicos). Factores como cantidad de elementos interactivos, imágenes y contenido dinámico afectan la duración."
    },
    {
      question: "¿Puedo revisar y filtrar los resultados antes de descargarlos?",
      answer: "Sí, el Dashboard permite revisar todos los issues detectados, filtrar por severidad, tipo o URL, añadir notas, marcar falsos positivos y gestionar el estado antes de generar el reporte final."
    },
    {
      question: "¿Qué navegadores son compatibles?",
      answer: "La extensión está disponible para Chrome y Firefox. El Dashboard funciona en cualquier navegador moderno con conexión a internet."
    },
    {
      question: "¿El Dashboard está incluido?",
      answer: "Sí, el acceso incluye tanto la extensión de navegador como el Dashboard completo para gestión de resultados, reportes históricos y colaboración en equipo."
    }
  ]

  return (
    <section id="faq" className="py-16 section-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Respuestas a las dudas más comunes sobre A11i Detector
          </p>
          <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 text-green-400">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
