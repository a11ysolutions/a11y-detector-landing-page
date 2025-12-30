import React, { useState } from 'react'
import { Mail, Linkedin, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    url: '',
    sector: '',
    mensaje: '',
    privacidad: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validación básica
    const requiredFields = ['nombre', 'email', 'empresa', 'url', 'sector']
    const isValid = requiredFields.every(field => formData[field].trim() !== '')

    if (!isValid) {
      alert('Por favor, completa todos los campos obligatorios.')
      setIsSubmitting(false)
      return
    }

    if (!formData.privacidad) {
      alert('Debes aceptar la política de privacidad.')
      setIsSubmitting(false)
      return
    }

    // Simular envío
    setTimeout(() => {
      alert('¡Gracias por tu interés! Te contactaremos pronto con más información sobre A11i Detector.')
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        url: '',
        sector: '',
        mensaje: '',
        privacidad: false
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="py-12 md:py-16 hero bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-white">Prueba</span>{' '}
              <span className="text-white">A11i Detector Gratis</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <p className="white-text text-lg leading-relaxed">
                Solicita una demostración gratuita y descubre cómo A11i Detector puede transformar la accesibilidad de tu sitio web.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="white-text">Análisis completo gratuito</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="white-text">Reporte detallado en 24h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="white-text">Consulta personalizada incluida</span>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gray-900/25 backdrop-blur-md border border-white/20 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl shadow-black/25">
                <div className="grid grid-cols-1 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="form-group">
                    <label htmlFor="nombre" className="block text-left text-white mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="block text-left text-white mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="empresa" className="block text-left text-white mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Nombre de tu empresa"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="url" className="block text-left text-white mb-2">
                      Sitio web a analizar *
                    </label>
                    <input
                      type="url"
                      id="url"
                      name="url"
                      value={formData.url}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder="https://tusitio.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="sector" className="block text-left text-white mb-2">
                      Sector
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      required
                    >
                      <option value="">Seleccionar sector</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="finanzas">Finanzas</option>
                      <option value="educacion">Educación</option>
                      <option value="salud">Salud</option>
                      <option value="gobierno">Gobierno</option>
                      <option value="otros">Otro</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje" className="block text-left text-white mb-2">
                      Mensaje adicional
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje || ''}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Cuéntanos más sobre tus necesidades..."
                    />
                  </div>
                </div>

                <div className="form-group checkbox-group mb-6">
                  <label className="flex items-center text-gray-300">
                    <input
                      type="checkbox"
                      id="privacidad"
                      name="privacidad"
                      checked={formData.privacidad}
                      onChange={handleChange}
                      className="mr-3 w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-400"
                      required
                    />
                    Acepto la{' '}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline ml-1">
                      política de privacidad
                    </a>{' '}
                    *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition duration-300 hover:from-green-700 hover:to-green-800 transform hover:scale-105 focus:outline focus:outline-4 focus:outline-white focus:outline-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar demostración gratis'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
