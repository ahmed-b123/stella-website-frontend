import styles from './MediaSectionFeatured.module.css';
import Image from 'next/image';

const MediaSectionFeatured = () => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Assuming image is in public folder. Replace 'speaker.jpg' with actual filename */}
        {/*<img 
          src="https://content.mosaiquefm.net/uploads/content/large/1765460316.webp" 
          alt="Speaker at microphone" 
          className={styles.image} 
        /> */}
        {/* The overlay creates the smooth fade into the background color */}
        <div className={styles.fadeOverlay}></div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          The Future of Digital Architecture in 2026
        </h2>

        <p className={styles.description}>
          Discover how modern frameworks and design systems are evolving to meet the demands of a high-performance web landscape.
        </p>

        <div className={styles.footer}>
          <div className={styles.meta}>
            <div className={styles.logoIcon}>m</div>
            <div>
              <span className={styles.by}>by </span>
              <span className={styles.authorName}>Mosaique FM</span>
              {/*<span className={styles.separator}> | </span>*/}
              <span className={styles.date}>February 3, 2026</span>
            </div>
          </div>

          <button className={styles.button}>
            Read More
          </button>
        </div>
      </div>
    </article>
  );
};

export default MediaSectionFeatured;