import React from 'react'
import styles from './Card.module.css'
const Card = ({ project }) => {
  const getImage = (imageName) => {
    try {
      return require(`../../assets/${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };
  var image = getImage(project.image)
  var title = project.title
  var code = project.code
  var demo = project.demo
  return (
    <div className={styles.card}>

      <div className={styles.imgContainer}>

        <img src={image} alt="" />
        <div className={styles.imgOverlay}>
          <i className='fa fa-plus'></i>
          <h1>{title}</h1>
          <div className={styles.links}>
            <a target='_blank' href={demo}>View Demo</a>
            <a target='_blank' href={code} >View Code</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
