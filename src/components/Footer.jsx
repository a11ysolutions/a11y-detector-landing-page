import React from 'react'
import { Mail, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex items-center gap-6 -ml-20">
            <img
              src="/assets/images/iaap-logo.png"
              alt="IAAP Logo"
              className="w-40 h-40 object-contain"
            />
            <div>
              <p className="font-bold text-white text-lg mb-2">
                Expertos en Accesibilidad Web y Digital.
              </p>
              <p className="text-gray-300 max-w-lg">
                Ayudamos a empresas y entidades a cumplir con la Ley de Accesibilidad Europea, la norma técnica EN 301 549 y las pautas WCAG, asegurando una experiencia digital inclusiva y conforme a la legalidad.
              </p>
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <h3 className="font-semibold text-lg mb-4 text-white text-left">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>a11ycontact@a11ysolutions.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Linkedin className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/company/a11ysolutions/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 a11ySolutions. Todos los derechos reservados
            </p>
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline transition-colors text-sm"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
