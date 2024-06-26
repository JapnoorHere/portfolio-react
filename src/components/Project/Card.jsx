import React, { useState } from 'react';
import styles from './Card.module.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const Card = ({ project }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const getImage = (imageName) => {
    try {
      return require(`../../assets/${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  return (
    <div className={styles.card} onClick={() => setOpen(true)}>
      <div className={styles.imgContainer}>
        {project.image.startsWith('projects') ? (
          <img src={getImage(project.image)} alt={project.title} />
        ):(
          <img src={project.image} alt={project.title} />
          
        )}
        <div className={styles.imgOverlay}>
          <i className='fa fa-plus'></i>
          <h1>{project.title}</h1>
         
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{project.title}</DialogTitle>
        <DialogContent dividers>

          {(project.media) ? (
            project.media.map((media, index) => (
              media.type === 'video' ? (
                <video key={index} controls className={styles.dialogVideo}>
                  <source src={media.path} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img key={index} src={media.path} alt='project-image' className={styles.dialogImage} />
              )
            ))
          ):(
            <div className={styles.links}>
            <a target='_blank' rel='noopener noreferrer' href={project.demo}>View Demo</a>
            <a target='_blank' rel='noopener noreferrer' href={project.code}>View Code</a>
          </div>
          )}

        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Close
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Card;
