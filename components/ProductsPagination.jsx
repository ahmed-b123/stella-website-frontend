import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProductsPagination.module.css';

const ProductsPagination = ({ currentPage = 1, totalPages = 4 }) => {
  
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.paginationWrapper} aria-label="Product Pagination">
      {/* Previous Button */}
      <button 
        className={styles.navButton} 
        disabled={currentPage === 1}
        onClick={() => console.log("Prev Page")}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page Numbers */}
      <div className={styles.pageNumbers}>
        {pages.map((page) => (
          <motion.button
            key={page}
            whileTap={{ scale: 0.95 }}
            className={`${styles.pageBtn} ${currentPage === page ? styles.activePage : ''}`}
            onClick={() => console.log(`Go to page ${page}`)}
          >
            {page}
          </motion.button>
        ))}
        
        {/* Example of ellipsis if you have many pages */}
        {totalPages > 5 && (
          <>
            <span className={styles.dots}>...</span>
            <button className={styles.pageBtn}>{totalPages + 10}</button>
          </>
        )}
      </div>

      {/* Next Button */}
      <button 
        className={styles.navButton} 
        disabled={currentPage === totalPages}
        onClick={() => console.log("Next Page")}
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  );
};

export default ProductsPagination;