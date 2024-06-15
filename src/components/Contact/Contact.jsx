import React from 'react'
import styles from './Contact.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContainer}>
            <h1>Contact</h1>
            <p>Feel free to reach out!</p>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.contactLink}>
              <i className='fas fa-envelope'></i>
              <p>sjapnoor11@gmail.com</p>
            </div>
            
            <div className={styles.contactLink}>
              <i className='fab fa-linkedin'></i>
              <p>Japnoor Singh</p>
            </div>
            
            <div className={styles.contactLink}>
              <i className='fab fa-github'></i>
              <p>JapnoorHere</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
