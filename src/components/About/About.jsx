import React from 'react'
import styles from './About.module.css'
import aboutImg from '../../assets/about/aboutImage.png'
import fullStackIcon from '../../assets/about/fullStackIcon.png'
import androidIcon from '../../assets/about/androidIcon.png'
import uiIcon from '../../assets/about/uiIcon.png'

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImg} src={aboutImg} alt="About"/>
      <ul className={styles.aboutItems}>

        <li className={styles.aboutItem}>
            <img src={fullStackIcon} alt="Cursor" className={styles.aboutIcon}/>
        <div className={styles.aboutItemText}>
            <h3>Full Stack Developer</h3>
            <p>I am an experienced Full Stack Developer with expertise in designing and implementing dynamic, user-centric web applications.</p>
        </div>
        </li >

        <li className={styles.aboutItem}>
            <img src={androidIcon} alt="Android" className={styles.aboutIcon}/>
        <div className={styles.aboutItemText}>
            <h3>Android Developer</h3>
            <p>I am an experienced App Developer with expertise in creating intuitive and robust mobile applications for both iOS and Android platforms.</p>
        </div>
        </li>

        <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI" className={styles.aboutIcon}/>
        <div className={styles.aboutItemText}>
            <h3>UI/UX Designer</h3>
            <p>I am an experienced UI/UX Designer with expertise in creating visually compelling and user-friendly interfaces for web and mobile applications.</p>
        </div>
        </li>

      </ul>
      </div>

    </section>
  )
}

export default About
