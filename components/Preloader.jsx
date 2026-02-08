import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.wrapper}>
      <img 
        src="/loading.gif" 
        alt="Loading..." 
        className={styles.fullScreenGif} 
      />
    </div>
  );
};

export default Preloader;