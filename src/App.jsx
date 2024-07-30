import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <main>
      <Hero></Hero>

      <h1>Main</h1>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
