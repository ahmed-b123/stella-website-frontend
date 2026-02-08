import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import styles from './LocationsCarousel.module.css';

// Added more dummy data so you can actually scroll to test the carousel
const LOCATIONS = [
  { id: 1, title: "Stella Tunisia Mall", address: "Tunisia Mall, Les Berges du Lac 2", status: "OPEN NOW", closes: "22:00", image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepnSZptnw0w7y8OsSl0sGNT3RtBO4NZicM_Vh_AXqhtbB-VmXETSOOGTFNV8Z4MY0d3WdevFULdv_I6uXa7st4-YxqWqPlF-ov4EonvD4QFqwZlF3JzfIr6O5u8lIqvFlH0eSt_=s680-w680-h510-rw" },
  { id: 2, title: "Stella La Marsa", address: "Rue du 16 Aout 1956, La Marsa", status: "CLOSING SOON", closes: "20:00", extra: "Coastal suburb", image: "https://www.challenges.tn/wp-content/uploads/2020/04/challenges-tn-monoprix.jpg" },
  { id: 3, title: "Stella Les Berges", address: "Avenue du Lac Nord", status: "OPEN NOW", closes: "23:00", image: "https://www.geant.tn/img/cms/geant_img/caisse.jpg" },
  { id: 4, title: "Stella Sidi Bou Said", address: "Main Street, Sidi Bou Said", status: "OPEN NOW", closes: "21:30", image: "https://i.ytimg.com/vi/lVdhw1xoYwY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB116t0DLQcMW9HjCJeuCzIe9bA0Q" },
  { id: 5, title: "Stella Gammarth", address: "Zone Touristique, Gammarth", status: "OPEN NOW", closes: "02:00", image: "https://www.utic.tn/wp-content/uploads/2022/03/7P7A8487-scaled.jpg" },
  { id: 6, title: "Stella Carthage", address: "Rue Hannibal, Carthage", status: "CLOSED", closes: "18:00", image: "https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1280,height=720,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2015/06/25/Magazin-general-Tunisie-Hichem.jpg" },
];

const LocationsCarousel = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    if(carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      
      {/* Left Arrow overlay */}
      {/* <button className={`${styles.navButton} ${styles.navButtonLeft}`}>
        <ChevronLeft size={28} />
      </button> */}

      <div className={styles.viewport} ref={carouselRef}>
        <motion.div 
          className={styles.track}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className={styles.card}>
              <img 
                src={loc.image} 
                alt={loc.title} 
                className={styles.cardImage} 
                onError={(e) => {e.target.style.backgroundColor = '#2c2c2c'}} 
              />
              
              <div className={styles.cardContent}>
                <div>
                  <div className={styles.headerRow}>
                    <h3 className={styles.locationTitle}>{loc.title}</h3>
                    {/* <span className={styles.statusBadge}>{loc.status}</span> */}
                  </div>
                  
                  <p className={styles.address}>{loc.address}</p>
                  
                  <div className={styles.infoRowContainer}>
                    <div className={styles.infoRow}>
                      <Clock className={styles.icon}/>
                      <span>Closes at {loc.closes}</span>
                    </div>
                    {loc.extra && (
                      <div className={styles.infoRow}>
                        <MapPin className={styles.icon} />
                        <span>{loc.extra}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.buttonGroup}>
                  <button className={styles.btnPrimary}>Get Directions</button>
                  <button className={styles.btnSecondary}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Arrow overlay */}
      {/* <button className={`${styles.navButton} ${styles.navButtonRight}`}>
        <ChevronRight size={28} />
      </button> */}

    </div>
  );
};

export default LocationsCarousel;