import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './ProductsFilter.module.css';

const categories = ["All", "Winter Jackets", "Light Jackets", "Fleece Jackets", "Pants", "Bags", "Accessories"];

const ProductFilters = ({ itemCount = 16 }) => {
  const [activeCat, setActiveCat] = useState("All");
  const [gridType, setGridType] = useState(2); // 1: wide, 2: standard, 3: dense

  return (
    <div className={styles.filterBar}>
      {/* Left: Stats & Sorting */}
      <div className={styles.leftSection}>
        <span className={styles.itemCount}>{itemCount} Items</span>
        <div className={styles.sortWrapper}>
          Sorted by <span className={styles.sortValue}>Recommended <ChevronDown size={14} /></span>
        </div>
      </div>

      {/* Middle: Category Pill Selectors */}
      <nav className={styles.categoryList}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`${styles.catButton} ${activeCat === cat ? styles.catButtonActive : ''}`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Right: Grid Type Selector */}
      {/* <div className={styles.rightSection}>
        <span className={styles.gridLabel}>Grid type</span>
        <div className={styles.gridIcons}>
          <div 
            className={`${styles.iconGroup} ${gridType === 1 ? styles.iconGroupActive : ''}`}
            onClick={() => setGridType(1)}
          >
            <div className={styles.box} /><div className={styles.box} />
          </div>
          <div 
            className={`${styles.iconGroup} ${gridType === 2 ? styles.iconGroupActive : ''}`}
            onClick={() => setGridType(2)}
          >
            <div className={styles.box} /><div className={styles.box} />
            <div className={styles.box} /><div className={styles.box} />
          </div>
          <div 
            className={`${styles.iconGroup} ${gridType === 3 ? styles.iconGroupActive : ''}`}
            onClick={() => setGridType(3)}
          >
            <div className={styles.box} /><div className={styles.box} />
            <div className={styles.box} /><div className={styles.box} />
            <div className={styles.box} /><div className={styles.box} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductFilters;