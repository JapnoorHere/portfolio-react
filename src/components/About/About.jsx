import React from 'react'
import styles from './About.module.css'
import aboutImg from '../../assets/about/aboutImage.png'
import cursorIcon from '../../assets/about/cursorIcon.png'
import serverIcon from '../../assets/about/serverIcon.png'
import uiIcon from '../../assets/about/uiIcon.png'

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImg} src={aboutImg} alt="About Image"/>
      <ul className={styles.aboutItems}>

        <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor Icon" />
        <div className={styles.aboutItemText}>
            <h3>Full Stack Developer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus officiis porro esse? Porro, error ut totam perferendis mollitia excepturi! Repellendus.</p>
        </div>
        </li >

        <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server Icon" />
        <div className={styles.aboutItemText}>
            <h3>Full Stack Developer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus officiis porro esse? Porro, error ut totam perferendis mollitia excepturi! Repellendus.</p>
        </div>
        </li>

        <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI Icon" />
        <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus officiis porro esse? Porro, error ut totam perferendis mollitia excepturi! Repellendus.</p>
        </div>
        </li>

      </ul>
      </div>

    </section>
  )
}

export default About
