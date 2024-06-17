import React from 'react'
import styles from './Card.module.css'
const Card = ({project}) => {

  const getImage = (imageName) => {
    try {
      return require(`../../assets/${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };


  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={getImage(project.image)} alt="" />
      </div>
        <h3 className={styles.heading}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        {/* <div className={styles.tech}>{project.tech.split(",")}</div> */}
        <div className={styles.projectLinks}>
          <a target='_blank' href={project.demo} className={styles.demo}>Demo</a>
          <a target='_blank' href={project.source} className={styles.source}>Source</a>
        </div>
    </div>
  )
}

export default Card
