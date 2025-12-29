import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="hero-content max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold white-text mb-6">
            A11i Detector: Tu Experto en Accesibilidad Web
          </h1>

          <p className="text-xl white-text mb-8 max-w-3xl mx-auto">
            Descubre y reporta automáticamente los problemas de accesibilidad en tu sitio web.
            Una herramienta inteligente que actúa como un experto en accesibilidad para garantizar
            el cumplimiento con la Ley Europea de Accesibilidad y las pautas WCAG.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Prueba A11i Detector gratis
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
