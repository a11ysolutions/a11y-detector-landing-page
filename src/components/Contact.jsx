import React, { useState, useEffect } from 'react'
import { Mail, Linkedin, Chrome, BarChart3, Search, Download } from 'lucide-react'
import emailjs from '@emailjs/browser'
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
  const [fieldErrors, setFieldErrors] = useState({})
  const [touchedFields, setTouchedFields] = useState({})

  // Recalcular errores cuando cambia el idioma para mantener traducciones actualizadas
  useEffect(() => {
    if (Object.keys(fieldErrors).length > 0) {
      const updatedErrors = {}
      Object.keys(fieldErrors).forEach(fieldName => {
        if (fieldErrors[fieldName]) {
          switch (fieldName) {
            case 'nombre':
              updatedErrors.nombre = t('contact.form.validation.name_required')
              break
            case 'email':
              updatedErrors.email = fieldErrors.email.includes('formato')
                ? t('contact.form.validation.email_invalid')
                : t('contact.form.validation.email_required')
              break
            case 'empresa':
              updatedErrors.empresa = t('contact.form.validation.company_required')
              break
            case 'url':
              updatedErrors.url = t('contact.form.validation.website_required')
              break
            case 'privacidad':
              updatedErrors.privacidad = t('contact.form.validation.privacy_required')
              break
          }
        }
      })
      setFieldErrors(updatedErrors)
    }
  }, [t])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const fieldValue = type === 'checkbox' ? checked : value

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }))

    // Marcar campo como tocado
    setTouchedFields(prev => ({
      ...prev,
      [name]: true
    }))

    // Limpiar error cuando el usuario empiece a escribir
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (fieldName) => {
    setTouchedFields(prev => ({
      ...prev,
      [fieldName]: true
    }))

    // Validar campo individual cuando pierda foco
    validateField(fieldName)
  }

  const validateField = (fieldName) => {
    const value = formData[fieldName]
    const errors = { ...fieldErrors }

    switch (fieldName) {
      case 'nombre':
        if (!value.trim()) {
          errors.nombre = t('contact.form.validation.name_required')
        } else {
          errors.nombre = ''
        }
        break
      case 'email':
        if (!value.trim()) {
          errors.email = t('contact.form.validation.email_required')
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errors.email = t('contact.form.validation.email_invalid')
        } else {
          errors.email = ''
        }
        break
      case 'empresa':
        if (!value.trim()) {
          errors.empresa = t('contact.form.validation.company_required')
        } else {
          errors.empresa = ''
        }
        break
      case 'url':
        if (!value.trim()) {
          errors.url = t('contact.form.validation.website_required')
        } else {
          errors.url = ''
        }
        break
      case 'privacidad':
        if (!value) {
          errors.privacidad = t('contact.form.validation.privacy_required')
        } else {
          errors.privacidad = ''
        }
        break
    }

    setFieldErrors(errors)
    return !errors[fieldName] // Retorna true si no hay error
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Marcar todos los campos como tocados
    const allFields = ['nombre', 'email', 'empresa', 'url', 'privacidad']
    const touchedState = {}
    allFields.forEach(field => {
      touchedState[field] = true
    })
    setTouchedFields(touchedState)

    // Validar todos los campos
    const errors = {}
    let hasErrors = false

    // Validar campos requeridos
    const requiredFields = ['nombre', 'email', 'empresa', 'url']
    requiredFields.forEach(field => {
      if (!formData[field] || !formData[field].toString().trim()) {
        errors[field] = t(`contact.form.validation.${field}_required`)
        hasErrors = true
      }
    })

    // Validar email
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t('contact.form.validation.email_invalid')
      hasErrors = true
    }

    // Validar privacidad
    if (!formData.privacidad) {
      errors.privacidad = t('contact.form.validation.privacy_required')
      hasErrors = true
    }

    setFieldErrors(errors)

    if (hasErrors) {
      setIsSubmitting(false)
      // Enfocar el primer campo con error
      const firstErrorField = Object.keys(errors).find(field => errors[field])
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField)
        if (element) {
          element.focus()
        }
      }
      return
    }

    try {
      // Preparar los datos para EmailJS
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        empresa: formData.empresa,
        website: formData.url,
        sector: formData.sector,
        mensaje: formData.mensaje || 'No message provided',
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'dariana.lago@a11ysolutions.com'
      }

      // Enviar email usando EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // Éxito - limpiar formulario y mostrar mensaje
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
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo más tarde.')
    } finally {
      setIsSubmitting(false)
    }
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
                      onBlur={() => handleBlur('nombre')}
                      className={`contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                        fieldErrors.nombre && touchedFields.nombre
                          ? 'border-red-500 focus:ring-red-400 focus:bg-red-900/20'
                          : 'border-white/10 focus:ring-green-400 focus:bg-gray-700/30'
                      }`}
                      placeholder={t('contact.form.placeholders.name')}
                      aria-invalid={fieldErrors.nombre && touchedFields.nombre ? 'true' : 'false'}
                      aria-describedby={fieldErrors.nombre && touchedFields.nombre ? 'nombre-error' : undefined}
                      required
                    />
                    {fieldErrors.nombre && touchedFields.nombre && (
                      <p
                        id="nombre-error"
                        className="mt-1 text-sm"
                        style={{ color: '#FFA3A3' }}
                        role="alert"
                        aria-live="polite"
                      >
                        {fieldErrors.nombre}
                      </p>
                    )}
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
                      onBlur={() => handleBlur('email')}
                      className={`contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                        fieldErrors.email && touchedFields.email
                          ? 'border-red-500 focus:ring-red-400 focus:bg-red-900/20'
                          : 'border-white/10 focus:ring-green-400 focus:bg-gray-700/30'
                      }`}
                      placeholder={t('contact.form.placeholders.email')}
                      aria-invalid={fieldErrors.email && touchedFields.email ? 'true' : 'false'}
                      aria-describedby={fieldErrors.email && touchedFields.email ? 'email-error' : undefined}
                      required
                    />
                    {fieldErrors.email && touchedFields.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-sm"
                        style={{ color: '#FFA3A3' }}
                        role="alert"
                        aria-live="polite"
                      >
                        {fieldErrors.email}
                      </p>
                    )}
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
                      onBlur={() => handleBlur('empresa')}
                      className={`contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                        fieldErrors.empresa && touchedFields.empresa
                          ? 'border-red-500 focus:ring-red-400 focus:bg-red-900/20'
                          : 'border-white/10 focus:ring-green-400 focus:bg-gray-700/30'
                      }`}
                      placeholder={t('contact.form.placeholders.company')}
                      aria-invalid={fieldErrors.empresa && touchedFields.empresa ? 'true' : 'false'}
                      aria-describedby={fieldErrors.empresa && touchedFields.empresa ? 'empresa-error' : undefined}
                      required
                    />
                    {fieldErrors.empresa && touchedFields.empresa && (
                      <p
                        id="empresa-error"
                        className="mt-1 text-sm"
                        style={{ color: '#FFA3A3' }}
                        role="alert"
                        aria-live="polite"
                      >
                        {fieldErrors.empresa}
                      </p>
                    )}
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
                      onBlur={() => handleBlur('url')}
                      className={`contact-form-field w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/20 backdrop-blur-sm border rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                        fieldErrors.url && touchedFields.url
                          ? 'border-red-500 focus:ring-red-400 focus:bg-red-900/20'
                          : 'border-white/10 focus:ring-green-400 focus:bg-gray-700/30'
                      }`}
                      placeholder={t('contact.form.placeholders.website')}
                      aria-invalid={fieldErrors.url && touchedFields.url ? 'true' : 'false'}
                      aria-describedby={fieldErrors.url && touchedFields.url ? 'url-error' : undefined}
                      required
                    />
                    {fieldErrors.url && touchedFields.url && (
                      <p
                        id="url-error"
                        className="mt-1 text-sm"
                        style={{ color: '#FFA3A3' }}
                        role="alert"
                        aria-live="polite"
                      >
                        {fieldErrors.url}
                      </p>
                    )}
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
                  <label className="flex items-start text-gray-300">
                    <input
                      type="checkbox"
                      id="privacidad"
                      name="privacidad"
                      checked={formData.privacidad}
                      onChange={handleChange}
                      onBlur={() => handleBlur('privacidad')}
                      className={`contact-form-field mr-3 mt-1 w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-green-400 ${
                        fieldErrors.privacidad && touchedFields.privacidad
                          ? 'border-red-500 focus:ring-red-400'
                          : 'text-green-600'
                      }`}
                      aria-invalid={fieldErrors.privacidad && touchedFields.privacidad ? 'true' : 'false'}
                      aria-describedby={fieldErrors.privacidad && touchedFields.privacidad ? 'privacidad-error' : undefined}
                      required
                    />
                    <div className="flex-1">
                      {t('contact.form.privacy')}{' '}
                      <a href="https://accesibilidadweb.a11ysolutions.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="contact-privacy-link text-green-400 hover:text-green-300 underline ml-1">
                        {t('footer.privacy_policy')}
                      </a>{' '}
                      *
                      {fieldErrors.privacidad && touchedFields.privacidad && (
                        <p
                          id="privacidad-error"
                          className="mt-1 text-sm"
                          style={{ color: '#FFA3A3' }}
                          role="alert"
                          aria-live="polite"
                        >
                          {fieldErrors.privacidad}
                        </p>
                      )}
                    </div>
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
