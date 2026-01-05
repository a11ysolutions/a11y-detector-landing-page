import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import WhatDetects from './components/WhatDetects'
import DashboardResults from './components/DashboardResults'
import AnalysisTimes from './components/AnalysisTimes'
import Audience from './components/Audience'
import FAQ from './components/FAQ'
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
        <HowItWorks />
        <WhatDetects />
        <DashboardResults />
        <AnalysisTimes />
        <Audience />
        <FAQ />
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
