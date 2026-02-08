import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import styles from './ProductsGrid.module.css';

const products = [
  { id: 1, name: "Nordictrail Explorer", price: "339$", tag: "HOT", sizes: "S, M, L, XL", colors: 1, img: "/product1.jpg" },
  { id: 2, name: "Glacierbound Pack", price: "109$", tag: "HOT", sizes: "One Size", colors: 3, img: "/product2.jpg" },
  { id: 4, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product3.jpg" },
  { id: 5, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product4.jpg" },
  { id: 6, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product3.jpg" },
  { id: 7, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product1.jpg" },
  { id: 8, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product2.jpg" },
  { id: 9, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product3.jpg" },
  { id: 10, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product2.jpg" },
  { id: 11, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product3.jpg" },
  { id: 12, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product4.jpg" },
  { id: 13, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product1.jpg" },
  { id: 14, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product2.jpg" },
  { id: 15, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product3.jpg" },
  { id: 16, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product1.jpg" },
  { id: 17, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product2.jpg" },
  { id: 18, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product3.jpg" },
  { id: 19, name: "Polaredge Denim", price: "189$", tag: null, sizes: "S, M, L, XL, XXL", colors: 4, img: "/product4.jpg" }
];

const ProductCard = ({ product }) => (
  <motion.div 
    className={styles.productCard}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className={styles.imageWrapper}>
      <button className={styles.wishlistBtn}><Heart size={16} /></button>
      {product.tag && <span className={styles.badge}>{product.tag}</span>}
      <img src={product.img} alt={product.name} className={styles.productImage} />
    </div>
    <div className={styles.info}>
      <h3 className={styles.productName}>{product.name}</h3>
      <span className={styles.price}>{product.price}</span>
      <div className={styles.details}>
        Sizes: {product.sizes} | Colors: {product.colors}
      </div>
    </div>
  </motion.div>
);

const ProductsGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {/* Featured Wide Card */}
      {/* <motion.div 
        className={styles.heroCard}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/product-banner-1.jpg" alt="Winter Collection" className={styles.heroImage} />
      </motion.div> */}

      {/* Product List */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;