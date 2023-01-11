import React from 'react'
import {
  Navbar,
  Hero,
  Projects,
  Technologies,
  About,
  Chrono,
  Footer,
} from './components'
import './App.scss'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Chrono />
      <Footer />
    </div>
  )
}

export default App
