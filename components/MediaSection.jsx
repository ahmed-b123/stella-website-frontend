import React from 'react';
import styles from './MediaSection.module.css';
import MediaSectionFeatured from './MediaSectionFeatured';
import MediaSectionPosts from './MediaSectionPosts';

const MediaSection = () => {
  const cards = [
    { id: 1, title: "Feature One", desc: "Description for the main highlight.", img: "/images/media1.jpg" },
    { id: 2, title: "Feature Two", desc: "Brief insight.", img: "/images/media2.jpg" },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.mainTitle}>Our Collection</h1>
      {/*<hr className={styles.divider} />*/}
      <p className={styles.mainSubtitle}>EXPLORE THE LATEST UPDATES</p>

      <div className={styles.contentRow}>
        {/* Left Side - 70% */}
        <div className={styles.leftCol}>
          <MediaSectionFeatured />
        </div>

        {/* Right Side - 30% */}
        <div className={styles.rightCol}>
          <MediaSectionPosts />
        </div>
      </div>
    </section>
  );
};

export default MediaSection;