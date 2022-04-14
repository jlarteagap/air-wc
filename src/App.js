import React from 'react'
import { Footer } from './components'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <AppProvider>
      <div className="App">
        Jola
        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
