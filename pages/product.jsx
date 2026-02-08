import React from 'react';
import Navbar from '../components/Navbar'; // Adjust paths based on your project
import Footer from '../components/Footer';
import styles from './product.module.css';

import ProductDetails from '../components/ProductDetails';

export default function ProductDetailsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. Global Navigation */}
      <Navbar mode={2} />

      {/* 2. Main Product Section (Empty for now) */}
      <main className={styles.mainContent}>
          <section className={styles.productPlaceholder}>
            <ProductDetails />
        </section>
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}