import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PropertyGrid from './components/PropertyGrid/PropertyGrid';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <PropertyGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
