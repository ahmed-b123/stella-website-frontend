import React,{ useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MenuListings.module.css';
import { Search, ChevronDown, Star, ChevronRight } from 'lucide-react';
import MenuItemDetails from './MenuItemDetails';

const menuItems = [
  { id: 1, name: "Smokey Supreme Latte", category: "Coffee", rating: 4.5, price: "$12.00", badge: "Signature", img: "https://myeverydaytable.com/wp-content/uploads/2025/04/Latte_0_7.jpg" },
  { id: 2, name: "Golden Roast Espresso", category: "Espresso", rating: 4.7, price: "$22.00", badge: "10% Off", img: "https://kitchenaid.com.au/cdn/shop/articles/Iced_Latte.png?v=1759984682" },
  { id: 3, name: "Forest Chicken Delight", category: "Brunch", rating: 4.8, price: "$18.00", badge: null, img: "https://www.nescafe.com/gb/sites/default/files/2023-11/Untitled-5%20copy_7.jpg" },
  { id: 4, name: "Fiery Shrimp Salad", category: "Salad", rating: 4.4, price: "$8.00", badge: null, img: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/D2E2521B-2690-44B5-8BD5-0BAD5C76EB37/Derivates/41b07817-2915-44d2-96f0-2f1852d64b16.jpg" },
  { id: 5, name: "Stella Lava Cake", category: "Dessert", rating: 4.9, price: "$10.00", badge: "Must Try", img: "https://www.seriouseats.com/thmb/VAuEFUAePPa4QXEP3dhBHA4RvJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20250904-SEA-WhiteChocolateCheesecake-LorenaMasso-HERO-206c88529afb4abbb2ca8f114b1d0f2b.jpg" },
  { id: 6, name: "Classic Stella Burger", category: "Burger", rating: 4.6, price: "$10.00", badge: "Buy 1 Get 1", img: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/26a885f4-97c9-44ff-8d0c-e482f27d63d2/Derivates/c4e61759-f7ed-4160-9fe4-b73888b44cfb.jpg" },
];

const MenuListings = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <motion.section 
      className={styles.mainWrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Stella Collection</h2>
          <hr className={styles.divider} />
          <p className={styles.subtitle}>Curated Selections for the Connoisseur</p>
        </div>

        {/* New Search and Filter Bar */}
        <motion.div 
          className={styles.filterBar}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.searchWrapper}>
            <div className={styles.inputContainer}>
              <Search className={styles.searchIcon} size={18} />
              <input 
                type="text" 
                placeholder="Search for menu..." 
                className={styles.searchInput} 
              />
              <button className={styles.searchButton}>Search</button>
            </div>
          </div>

          <div className={styles.sortWrapper}>
            <span className={styles.sortLabel}>Sort by:</span>
            <div className={styles.dropdown}>
              <span>Popular</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </motion.div>

        <div className={styles.menuGrid}>
            {menuItems.map((item) => (
                <motion.div 
                    key={item.id} 
                    className={styles.menuCard}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleOpenModal}
                >
                <div className={styles.imageContainer}>
                    <img src={item.img} alt={item.name} className={styles.itemImage} />
                    {item.badge && <span className={styles.badge}>{item.badge}</span>}
                </div>
                
                <div className={styles.cardDetails}>
                    <h4 className={styles.cardCategory}>{item.category}</h4>
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    
                    <div className={styles.cardFooter}>
                    <div className={styles.ratingBox}>
                        <Star size={14} fill="#C5A059" color="#C5A059" />
                        <span className={styles.ratingNumber}>{item.rating}</span>
                    </div>
                    <span className={styles.price}>{item.price}</span>
                    </div>
                </div>
                </motion.div>
            ))}
        </div>

        <div className={styles.paginationContainer}>
            <motion.button 
                className={`${styles.pageButton} ${styles.activePage}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                1
            </motion.button>
            
            <motion.button className={styles.pageButton} whileHover={{ scale: 1.05 }}>2</motion.button>
            <motion.button className={styles.pageButton} whileHover={{ scale: 1.05 }}>3</motion.button>
            
            <span className={styles.paginationDivider}>...</span>
            
            <motion.button className={styles.pageButton} whileHover={{ scale: 1.05 }}>5</motion.button>
            
            <motion.button className={styles.nextButton} whileHover={{ x: 3 }}>
                <ChevronRight size={20} />
            </motion.button>
        </div>
      </div>
      <MenuItemDetails isOpen={openModal} onClose={handleCloseModal} />
    </motion.section>
  );
};

export default MenuListings;