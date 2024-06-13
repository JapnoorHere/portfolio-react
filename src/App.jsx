import React from 'react'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Experience/Skills'
const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
