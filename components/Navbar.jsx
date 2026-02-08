import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, ShoppingBasket, Menu, X, 
  Home, Info, Store, Mail, 
  Instagram, Facebook, Linkedin, Coffee,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = ({ mode = 1 }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const locationCount = 3; 
  const cartCount = 1;

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', paths: ['/'], icon: <Home size={24} /> },
    { name: 'About Us', paths: ['/about'], icon: <Coffee size={26} /> },
    { name: 'Shop', paths: ['/shop', '/product', '/category'], icon: <Store size={26} /> },
    { name: 'Contact Us', paths: ['/contact'], icon: <Mail size={24} /> }
  ];

  const checkActive = (paths) => {
    if (!pathname) return false;
    return paths.some(path => path === '/' ? pathname === '/' : pathname.startsWith(path));
  };

  const [languagesOpen, setLanguagesOpen] = useState(false);
  const handleLaguagesClick = () => {
    setLanguagesOpen(!languagesOpen);
  }

  return (
    <>
      <motion.nav 
        className={`${styles.navbar} ${isSticky ? styles.sticky : ''} ${mode !== 1 ? styles.altMode : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className={styles.navLogo}>
          <Link href="/">
            <img src={isSticky || mode !== 1 ? "/logo.png" : "/footer-logo.png"} alt="Stella" />
          </Link>
        </div>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.name} className={styles.navItem}>
              <Link href={link.paths[0]} className={checkActive(link.paths) ? styles.activeLink : ''}>
                {link.name}
                <span className={styles.underline}></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <div className={`${styles.iconWrapper} ${styles.desktopOnly}`}>
            <Link href="/locations" className={styles.iconBtn}><MapPin size={24} /></Link>
            {locationCount > 0 && <span className={styles.badge}>{locationCount}</span>}
          </div>
          
          <div className={styles.iconWrapper}>
            <Link href="/cart" className={styles.iconBtn}><ShoppingBasket size={24} /></Link>
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </div>

          <Link href="/shop" className={`${styles.ctaButton} ${styles.desktopOnly}`}>
            Commander
          </Link>

          <button 
            className={`${styles.menuToggle} ${mode !== 1 ? styles.altModeIcon : ""}`} 
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>

          <div 
            class={styles.navbarLanguagesContainer}
            onClick={handleLaguagesClick}  
          >
            <p>FR</p>
            <ChevronDown size={17} className={styles.navbarLanguagesIcon} />
          </div>
        </div>
      </motion.nav>
      
      <div className={`${styles.languagesContainer} ${languagesOpen ? styles.active : styles.hidden}`}>
        <div className={styles.languageRow}>
          <img 
            src="https://static.wikia.nocookie.net/duolingo/images/9/97/French_flag.png"
            alt="fr"
            height={22}
          />
          <p>Français</p>
        </div>

        <div className={styles.languageRow}>
          <img 
            src="https://static.wikia.nocookie.net/duolingo/images/0/06/Italian_flag.png"
            alt="fr"
            height={22}
          />
          <p>Italiano</p>
        </div>

        <div className={styles.languageRow}>
          <img 
            src="https://www.jetpunk.com/img/user-img/f4/f4891e54d4-450.webp"
            alt="fr"
            height={20}
          />
          <p>español</p>
        </div>

        <div className={styles.languageRow}>
          <img 
            src="https://blog.duolingo.com/content/images/2020/12/DLR_Global_Flag_PT_1-1.png"
            alt="fr"
            height={16.5}
          />
          <p>português</p>
        </div>
      </div>

      {/* Mobile Drawer & Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* 1. Black Overlay */}
            <motion.div 
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div 
              className={styles.mobileDrawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* 2. Menu Header */}
              <div className={styles.drawerHeader}>
                <img src="/logo.png" alt="Stella" className={styles.drawerLogo} />
                <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <div className={styles.mobileNavContent}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link 
                      href={link.paths[0]} 
                      className={`${styles.mobileNavLink} ${checkActive(link.paths) ? styles.mobileActive : ''}`}
                    >
                      {/* 4. Icons before links */}
                      <span className={styles.linkIcon}>{link.icon}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* 5. Original styling CTA */}
                <Link href="/shop" className={styles.ctaButton} style={{ textAlign: 'center', marginTop: '1rem' }}>
                  Commander
                </Link>
              </div>

              {/* 7. Social Media Section */}
              <div className={styles.drawerFooter}>
                <div className={styles.divider}></div>
                <p className={styles.socialLabel}>Follow the Stella Journey</p>
                <div className={styles.socialIcons}>
                  <a href="#"><Instagram size={22} /></a>
                  <a href="#"><Facebook size={22} /></a>
                  <a href="#"><Linkedin size={22} /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;