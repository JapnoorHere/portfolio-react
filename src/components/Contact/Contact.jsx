import React from 'react'
import styles from './Contact.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Full Stack Developer</h1>
          <p>I am a Full Stack Developer skilled in creating dynamic web applications and intuitive Android apps. I also excel in UI/UX design, for making user-friendly interfaces for both web and mobile platforms.</p>
          <div className={styles.socialLinks}>
            <a rel="noreferrer" href="https://mail.google.com/mail/?view=cm&to=sjapnoor11@gmail.com" target='_blank' className={styles.linkContainer}>
              <i className='fas fa-envelope'></i>
              </a> 
              <a rel="noreferrer" href='https://github.com/JapnoorHere' target='_blank' className={styles.linkContainer}>
                <i className='fab fa-github'></i>
              </a>
              <a rel="noreferrer" href='https://www.linkedin.com/in/japnoor-singh/' target='_blank' className={styles.linkContainer}>
                <i className='fab fa-linkedin'></i>
              </a>
              <a rel="noreferrer" href='https://www.youtube.com/channel/UCWMRbbyG5aFXQmqpG9zcMAw' target='_blank' className={styles.linkContainer}>
                <i className='fab fa-youtube'></i>
              </a>
              <a rel="noreferrer" href='https://www.instagram.com/japnoor.here/' target='_blank' className={styles.linkContainer}>
                <i className='fab fa-instagram'></i>
              </a>
              <a rel="noreferrer" href='https://x.com/japnoor_here' target='_blank' className={styles.linkContainer}>
                <i className='fab fa-x-twitter'></i>
              </a>
              
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
