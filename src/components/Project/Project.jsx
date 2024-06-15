import React, { useEffect, useState } from 'react'
import styles from './Project.module.css'
import Card from './Card'
import projects from '../../data/projects.json'

const Project = () => {

    const [activeCategory, setActiveCategory] = useState("app");
    const [category,setCategory] = useState("app");
    const [animateOut, setAnimateOut] = useState(false);
    const handleClick = (category) => {
        setActiveCategory(category);
        setCategory(category);
        
    }

    useEffect(() => {
        setAnimateOut(true);
        setTimeout(() => {
          setAnimateOut(false);
        }, 600);
      }, [category]);

    return (
        <section className={styles.project} id='projects'>
            <div className={styles.container}>
                <h2>Projects</h2>
                <div className={styles.content}>
                    <div className={styles.category_tab}>
                        <p className={`${styles.category} ${activeCategory === 'app' ? styles.active : ''}`} onClick={() => handleClick('app')}>App</p>
                        <p className={`${styles.category} ${activeCategory === 'web' ? styles.active : ''}`} onClick={() => handleClick('web')}>Web</p>
                        <p className={`${styles.category} ${activeCategory === 'ui' ? styles.active : ''}`} onClick={() => handleClick('ui')}>UI</p>
                    </div>
                    
                    <div className={`${styles.card_container} ${animateOut ? styles.animateOut : styles.animateIn}`}>
                        {
                            projects.map((project)=>{
                                if(project.category === category){
                                    return <Card project={project} key={project.id}/>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
