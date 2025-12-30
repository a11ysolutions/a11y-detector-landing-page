import React from 'react'
import { Mail, Linkedin } from 'lucide-react'
import iaapLogo from '/assets/images/iaap-logo.png'

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={iaapLogo}
                alt="IAAP Logo"
                className="w-40 h-40 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0"
              />
              <div className="w-full text-center md:text-left">
                <div className="mt-0 md:mt-4">
                  <p className="font-bold text-white">Expertos en Accesibilidad Web y Digital.</p>
                  <p className="text-gray-300 mt-2 max-w-full md:max-w-md mx-auto md:mx-0">Ayudamos a empresas y entidades a cumplir con la Ley de Accesibilidad Europea, la norma técnica EN 301 549 y las pautas WCAG, asegurando una experiencia digital inclusiva y conforme a la legalidad.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-xs">
            <h3 className="font-semibold text-lg mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>a11ycontact@a11ysolutions.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Linkedin className="w-5 h-5 mr-3 flex-shrink-0" />
                <a id="linkedin" href="https://www.linkedin.com/company/a11ysolutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-[#0d9e71] transition-colors focus:outline focus:outline-2 focus:outline-[#0d9e71] focus:outline-offset-2 rounded">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm">© 2025 a11ySolutions. Todos los derechos reservados</p>
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline transition-colors text-sm focus:outline focus:outline-2 focus:outline-[#0d9e71] focus:outline-offset-2 rounded">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
