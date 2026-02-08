import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; 
import styles from './products.module.css';
import ProductsHeader from '../components/ProductsHeader';
import ProductsFilters from '../components/ProductsFilter';
import ProductsGrid from "../components/ProductsGrid";
import ProductsPagination from '../components/ProductsPagination';

const Product = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. Global Navigation */}
      <Navbar mode={2} />

      <motion.main 
        className={styles.mainContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section className={styles.container}>
          <ProductsHeader />
          <ProductsFilters />
          <ProductsGrid />
          <ProductsPagination />

        </section>
      </motion.main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
};

export default Product;