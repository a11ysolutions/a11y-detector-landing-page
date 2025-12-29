import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Audience from './components/Audience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <a href="#footer" className="skip-link">Ir al pie de página</a>

      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <Audience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
