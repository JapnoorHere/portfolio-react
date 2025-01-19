import React from 'react'
import heroImg from '../../assets/hero/heroImage.png';
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Japnoor Singh</h1>
        <p className={styles.description}>I am a Full Stack Developer skilled in creating dynamic web applications and intuitive Android apps. I also excel in UI/UX design, for making user-friendly interfaces for both web and mobile platforms.</p>
        <a className={styles.resumeBtn} href="https://drive.google.com/file/d/1V73ek066Ep6EE6V8e5G7WNXKQ1g47gfb/view?usp=drive_link" target='_blank' rel='noreferrer'>My CV</a>
      </div>
        <img className={styles.heroImg} src={heroImg} alt="Hero" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
