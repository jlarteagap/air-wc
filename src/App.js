import React from 'react'
import { Footer, Contact } from './components'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Contact />
        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
