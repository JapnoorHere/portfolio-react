import React from 'react'
import styles from './Skills.module.css'
import skills from '../../data/skills.json'
const Skills = () => {
  const getImage = (imageName) => {
    try {
      return require(`../../assets/${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  return (
    <section className={styles.experience} id='skills'>
      <div className={styles.container}>
        <h2>Skills</h2>
        <div className={styles.content}>

          {
            skills.map((skill, id) => {
              return <div key={id} className={styles.card}>
                <div className={styles.cardImgContainer}>
                  <img src={getImage(skill.image)} alt="skill" />
                </div>
                <p className={styles.cardTitle}>{skill.title}</p>
              </div>

            })
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
