import React from 'react'
import {
  Footer,
  Contact,
  Clients,
  Testimonials,
  Team,
  Services,
  Partners,
  Header
} from './components'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Services />
        <Partners />
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
