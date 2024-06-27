import React from 'react'
import heroImg from '../../assets/hero/heroImage.png';
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Japnoor Singh</h1>
        <p className={styles.description}>I am a Full Stack Developer skilled in creating dynamic web applications and intuitive mobile apps for iOS and Android. I also excel in UI/UX design, crafting visually appealing and user-friendly interfaces for both web and mobile platforms.</p>
        <a className={styles.resumeBtn} href="mailto:sjapnoor11@gmail.com">My CV</a>
      </div>
        <img className={styles.heroImg} src={heroImg} alt="Hero Image" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
