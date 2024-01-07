import { useState } from 'react'
import './assets/styles/style.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './assets/styles/components/Navbar'
import Hero from './assets/styles/components/Hero.jsx'
import List from './assets/styles/components/List.jsx'
import Footer from './assets/styles/components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <List />
      <Footer />
    </>
  )
}

export default App
