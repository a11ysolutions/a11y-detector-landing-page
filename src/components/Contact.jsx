import React, { useState } from 'react'
import { Mail, Linkedin, Chrome, BarChart3, Search, Download } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
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
      alert(t('contact.form.validation.required'))
      setIsSubmitting(false)
      return
    }

    if (!formData.privacidad) {
      alert(t('contact.form.validation.privacy'))
      setIsSubmitting(false)
      return
    }

    // Simular envío
    setTimeout(() => {
      alert(t('contact.form.validation.success'))
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
              <span className="text-white">{t('contact.title')}</span>{' '}
              <span className="text-white">{t('contact.title_highlight')}</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <p className="white-text text-lg leading-relaxed text-justify">
                {t('contact.description')}
              </p>

              <div className="space-y-4">
                {t('contact.benefits').map((benefit, index) => {
                  const icons = [Chrome, BarChart3, Search, Download]
                  const IconComponent = icons[index] || CheckCircle
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 rounded-full flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="white-text">{benefit}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gray-900/25 backdrop-blur-md border border-white/20 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl shadow-black/25">
                <div className="grid grid-cols-1 gap-13 mb-4 md:mb-6">
                  <div className="form-group">
                    <label htmlFor="nombre" className="block text-left text-white mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder={t('contact.form.placeholders.name')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="block text-left text-white mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder={t('contact.form.placeholders.email')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="empresa" className="block text-left text-white mb-2">
                      {t('contact.form.company')} *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder={t('contact.form.placeholders.company')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="url" className="block text-left text-white mb-2">
                      {t('contact.form.website')} *
                    </label>
                    <input
                      type="url"
                      id="url"
                      name="url"
                      value={formData.url}
                      onChange={handleChange}
                      className="contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder={t('contact.form.placeholders.website')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="sector" className="block text-left text-white mb-2">
                      {t('contact.form.sector')}
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className="contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      required
                    >
                      <option value="">{t('contact.form.sectors.placeholder')}</option>
                      <option value="ecommerce">{t('contact.form.sectors.ecommerce')}</option>
                      <option value="finance">{t('contact.form.sectors.finance')}</option>
                      <option value="education">{t('contact.form.sectors.education')}</option>
                      <option value="health">{t('contact.form.sectors.health')}</option>
                      <option value="government">{t('contact.form.sectors.government')}</option>
                      <option value="other">{t('contact.form.sectors.other')}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje" className="block text-left text-white mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje || ''}
                      onChange={handleChange}
                      rows="4"
                      className="contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder={t('contact.form.placeholders.message')}
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
                      className="contact-form-field mr-3 w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-400"
                      required
                    />
                    {t('contact.form.privacy')}{' '}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="contact-privacy-link text-green-400 hover:text-green-300 underline ml-1">
                      {t('footer.privacy_policy').toLowerCase()}
                    </a>{' '}
                    *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit-button w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition duration-300 hover:from-green-700 hover:to-green-800 transform hover:scale-105 focus:outline focus:outline-4 focus:outline-white focus:outline-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
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
