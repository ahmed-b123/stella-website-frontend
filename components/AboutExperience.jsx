import React, { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence for smooth switching
import styles from './AboutExperience.module.css';

const AboutExperience = () => {
  const [view, setView] = useState('introvert'); // 'introvert' (default) or 'extrovert'

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  // Gallery Data organized by personality
  const galleries = {
    introvert: [
      { id: 1, image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/582811505_1367653481393127_7518851774413160165_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XBNLNAv2o9cQ7kNvwHOFguE&_nc_oc=Adn6NRLUgzPy-ywFc5xwSJrXKS0oJ-6dkt_xatkP5CKuVhLKH9y6SOdRYXAMgTr6i0g&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=rrjkI6uZjgWR4IiMNVd_OA&oh=00_AfsEUxTl31oSrYaY83H19HH3f64UxaI15LKZzPY2B21QIQ&oe=6983A06B" },
      { id: 2, image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/578266358_1359943908830751_2127648773735869371_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6MtRVopR8YsQ7kNvwFud_yQ&_nc_oc=AdnPf-sCydI8q0okwdX1bJwymJ8L7PgqIEIf4k0LwUvnUoRUyVySD0Sljwgy7tfq_xM&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=rqH-ttTTZdnCR8E7LMrAxw&oh=00_AfsxA-mKexO1TKWhweOOaR9k7M0Ks5lqYwaPsIGjPhn0qw&oe=6983C93A" },
      { id: 3, image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/559534119_1357991762359299_4758596361527134785_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Q06VflXRzS8Q7kNvwEukmPB&_nc_oc=Admn10duR0c-k63QixPl-sNrHiIuSNO4H16l9ZuETnAHYox9iZQFoGOHv3vr7kaCEaw&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=BI5ucaT-M3-2driBlmpKVw&oh=00_AfsR_RSv03OhYDRBgRReWRCT4NWSVP2Hx2wUCexbTY9FNg&oe=6983BE4D" },
      { id: 4, image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/561330736_1346630363495439_5448929573063331367_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WzjJTIbobIUQ7kNvwGPaNHk&_nc_oc=AdnxhxcyFu8A4Qf9fYtLjYntUOyt13DX34RFHcAYRZybeoC4ZMbIkki5AXgLnXiPLmM&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=5RgsLc_KqbIwqaesxYf4Hw&oh=00_Aftj0yM6LYh-5DxnIKylIli8yW9L4dpPvGxIL8nPO631Nw&oe=6983B243" },
      { id: 5, image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/560613610_1339957254162750_29850282693199724_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cTyyYywSIfcQ7kNvwHWcv0I&_nc_oc=AdmoNKaZowE230xwIlIYDNzhTpmo4D1gSCS0U65gCmDBBYIbe5DpL1ZzSJYKnqn9iGw&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=BhCw-0jE4fJQC2e7G9D5Iw&oh=00_Afv5wtbsfJ3EO_71qaHOTQTDIjLt6jIZFyy_eYKcUHy25Q&oe=6983A28B" },
      { id: 6, image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/502256834_1230978911727252_2414401042104317721_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-AKlUatbIOEQ7kNvwH62pk_&_nc_oc=Adl3rvoEmJmksbHKY_TCCAZ27Yp8imR5SqWVlfrUnTxIMHqI2Q4lPTDH5Zz7VD0rmkQ&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=xM1LRAplRsAAa9GS8Fthkg&oh=00_AfuRy7kllOFPOnsgnbOl5tlRWZ-arVgOFMhfXing0eJi9A&oe=6983CB41" }
    ],
    extrovert: [
        // Using your public directory naming convention for the baristas gallery
        { id: 1, image: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/518844132_1267302454761564_3427816192239509158_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=W8erRqEEv9UQ7kNvwFnVNOG&_nc_oc=AdktDhinZaJDXN_RXZe5ycqaPyR8jtbX2J5eMPK4_DlXY__Wzg5yG4vM_VBoEtNoMBM&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=vaWwiPhP5Mmxwvr-iBsjMA&oh=00_AfsJJP6TARa9JacNFWDFC6wGGp4lRH1ohPInAQ0vAO13Tg&oe=6983A4F6" },
        { id: 2, image: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/516315885_1262956371862839_4061162040399107547_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JbOoBL3sMM4Q7kNvwGoCNkE&_nc_oc=AdmvRGUNvhCeLPxTzwFYWNeXFFOogbipbPGbKv44fApX0Yol954Haq7pv6yOsUZGnFc&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=vvu2wlJHmDaCC0bXmDRf0w&oh=00_AfvVBA4wajxTmxH_cOWUPU9u999kFcLwJGtLURgvi7KszA&oe=6983C42A" },
        { id: 3, image: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514399360_1256735152484961_1202592867950453768_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1RB-WsCdldwQ7kNvwH0cjKR&_nc_oc=AdnL-zBuYBudG1h-ko6hR3K0FI9auQCE2cLS8SpH4qK6q95FrCIH8_4mKUdvmt4ImWM&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=hmXJ_STImeXBipAcHyJHIA&oh=00_Afu8viOvzBvSF8bbrIjw2Zi-5S1U-y_9JElOUZA2j_ivow&oe=6983CF16" },
        { id: 4, image: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514510886_1256735115818298_1948472569649982815_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9TH4ORK9uo8Q7kNvwGNa0ik&_nc_oc=Adn8h1WWMIhGuLYmOclUsJ14ApgPIb6KbScO_XpISELhLX26LkdjQA8Tc2LtmHoqVSc&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=ImC4sE8p9UZEB9eFUAo7YQ&oh=00_AfvQXAkCK2LW6Biem6sFTFdzYhKiBxAGLlH4SNiZ-lcBfw&oe=6983C1A5" },
        { id: 5, image: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514599767_1256735099151633_8722990873634234778_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0nKtElGqA8AQ7kNvwGrQ38i&_nc_oc=AdkzLf5Dcn5oRU2CP_PPWPgm9aczmzzkgcYVT0HppKzw8mXNIzQkVb3_gZSyHAFj6kU&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=eg1PylSdWljo0RdvLzPHig&oh=00_Aft9001wUhwH6OyfrW32wGaudj5kv1A56dA3vBifdSOSGg&oe=6983D21C" },
        { id: 6, image: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/515013794_1256734942484982_4726965813312848202_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GzxPW-zjSfoQ7kNvwH2wjt1&_nc_oc=Adlg72qB0zu7xC_BstCFvtzl_EJwVzNn7XOIUWHOTVTSTZEleuPIdc3JMZ-kgRIhps4&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=j0xY5qz3i8sWlMEEAdEBxA&oh=00_AfvQ402sXDx5KK8tqcax_ntnban3b7qPmJZQTtV5UdfStw&oe=6983B7B0" }
    ]
  };

  return (
    <section className={styles.experienceWrapper}>
      <motion.div className={styles.headerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.h2 variants={textVariants} className={styles.mainTitle}>The Stella Experience</motion.h2>
        <div className={styles.dividerContainer}><hr className={styles.divider} /></div>
        <motion.p variants={textVariants} className={styles.goldSubtitle}>
          Discover our innovative 3D generator that transforms your design ideas into stunning visualizations.
        </motion.p>
      </motion.div>

      <div className={styles.buttonGroup}>
        <motion.button 
          onClick={() => setView('introvert')}
          className={view === 'introvert' ? styles.primaryBtn : styles.secondaryBtn}
          whileTap={{ scale: 0.95 }}
        >
          I'm an Introvert
        </motion.button>
        
        <motion.button 
          onClick={() => setView('extrovert')}
          className={view === 'extrovert' ? styles.primaryBtn : styles.secondaryBtn}
          whileTap={{ scale: 0.95 }}
        >
          I'm an Extrovert
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={view} // Triggers animation on switch
          className={styles.imageGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {galleries[view].map((item) => (
            <motion.div key={item.id} className={styles.gridItem} variants={itemVariants}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt="Experience" className={styles.gridImage} />
                <div className={styles.imageOverlay}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default AboutExperience;