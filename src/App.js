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
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
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
