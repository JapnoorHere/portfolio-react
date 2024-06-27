import React, { useEffect, useState } from 'react';
import styles from './Project.module.css';
import Card from './Card';
import projects from '../../data/projects.json';

const Project = () => {
    const [activeCategory, setActiveCategory] = useState("app");
    const [category, setCategory] = useState("app");
    const [animateOut, setAnimateOut] = useState(false);
    const [visibleProjects, setVisibleProjects] = useState({
        app: 3,
        web: 3,
        ui: 3
    });

    const handleClick = (category) => {
        setActiveCategory(category);
        setCategory(category);
    }

    const handleSeeMore = () => {
        const totalProjectsInCategory = projects.filter(project => project.category === category).length;
        setVisibleProjects(prevState => ({
            ...prevState,
            [category]: totalProjectsInCategory
        }));
    }

    const handleSeeLess = () => {
        setVisibleProjects(prevState => ({
            ...prevState,
            [category]: 3
        }));
    }

    useEffect(() => {
        setAnimateOut(true);
        setTimeout(() => {
            setAnimateOut(false);
        }, 600);
    }, [category]);

    const filteredProjects = projects.filter(project => project.category === category);

    return (
        <section className={styles.project} id='projects'>
            <div className={styles.container}>
                <h2>Projects</h2>
                <div className={styles.content}>
                    <div className={styles.category_tab}>
                        <p className={`${styles.category} ${activeCategory === 'app' ? styles.active : ''}`} onClick={() => handleClick('app')}>App</p>
                        <p className={`${styles.category} ${activeCategory === 'web' ? styles.active : ''}`} onClick={() => handleClick('web')}>Web</p>
                        <p className={`${styles.category} ${activeCategory === 'ui' ? styles.active : ''}`} onClick={() => handleClick('ui')}>UI/UX</p>
                    </div>
                <p className={styles.description}>Click on a project to explore more details!</p>

                    <div className={`${styles.card_container} ${animateOut ? styles.animateOut : styles.animateIn}`}>
                        {
                            filteredProjects.slice(0, visibleProjects[category]).map((project) => (
                                <Card project={project} key={project.id} />
                            ))
                        }
                    </div>

                    {filteredProjects.length > visibleProjects[category] && (
                        <button onClick={handleSeeMore} className={styles.seeMoreButton}>See More</button>
                    )}

                    {visibleProjects[category] > 3 && (
                        <button onClick={handleSeeLess} className={styles.seeLessButton}>See Less</button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Project;
