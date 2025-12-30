import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Audience from './components/Audience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider, useLanguage } from './LanguageContext'

function AppContent() {
  const { t } = useLanguage()

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">{t('accessibility.skip_to_content')}</a>
      <a href="#footer" className="skip-link">{t('accessibility.skip_to_footer')}</a>

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

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
