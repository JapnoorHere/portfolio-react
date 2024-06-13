import React from 'react'
import heroImg from '../../assets/hero/heroImage.png';
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Japnoor Singh</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem saepe voluptates debitis soluta quis reprehenderit, consectetur cum at molestias!</p>
        <a className={styles.contactBtn} href="mailto:sjapnoor11@gmail.com">Contact Me</a>
      </div>
        <img className={styles.heroImg} src={heroImg} alt="Hero Image" />
        {/* <div className={styles.topBlur}></div> */}
        {/* <div className={styles.bottomBlur}></div> */}
    </section>
  )
}

export default Hero
