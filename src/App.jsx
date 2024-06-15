import React from 'react'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
