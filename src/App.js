import React from 'react'
import {
  Footer,
  Contact,
  Clients,
  Testimonials,
  Team,
  Services,
  Partners,
  Header,
  Slide,
  Brands
} from './components'
import { SplashScreen } from './components/utils/SplashScreen'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <SplashScreen />
        <Slide />
        <Services />
        <Partners />
        <Brands />
        <Team />
        <Testimonials />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
