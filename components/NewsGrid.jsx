import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './NewsGrid.module.css';

const mediaArray = [
    [
        { id: 1, source: 'Formula 1', time: '3 hours ago', title: "'He deserves a lot more' Verstappen backs Alonso", excerpt: 'Max Verstappen believes his fellow two-time world champion...', image: 'https://content.mosaiquefm.net/uploads/content/medium/1712704554.png' },
        { id: 2, source: 'BBC', time: '12 hours ago', title: 'Liverpool hammer Leeds for first win in five games', excerpt: 'Mohamed Salah and Diogo Jota both scored twice as Liverpool...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514328658_1256734935818316_5550043430983496641_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cCkrcSSyy-gQ7kNvwHq54TI&_nc_oc=Adkwnjp7V8EMsFjcKwshMrGTAKqkvzJa86bTHWOB_KO3HkzPtQm3UobxjzCRQqgtyEI&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=MY1IgsjlvJIw5oaVlo1Xeg&oh=00_AfobRe8ediEd5Qgp3eySTGIoW70mY3ivd3eAsf4WDOe1pg&oe=69810CB9' },
        { id: 3, source: 'IDN Times', time: 'April 17, 2023', title: 'Papua: At least one killed in hunt for kidnapped pilot', excerpt: 'At least one Indonesian soldier has been killed in a rebel attack...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514775678_1256735005818309_4743597921091793251_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yXiGFfp-4jEQ7kNvwER0Bff&_nc_oc=AdkcA776rQkSlIVqRl4mXqCVCC4ltusSJomIP8ETDZukfAk9jyBUpyvyKJpS7ogMU-Q&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=AEksl4YMgJqXlm8gcNsB3w&oh=00_AfoyJd5iy7dHSA3ybcfqeN7CMVAlx91LjS58mPzOO9e4Jw&oe=698134FA' },
        { id: 4, source: 'BBC', time: 'April 15, 2023', title: 'Jeremy Bowen: Israel\'s unclear road ahead', excerpt: 'Tensions between Israel and the Palestinians are on the rise once more...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514399360_1256735152484961_1202592867950453768_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IpsW72ppc1sQ7kNvwGMtRWg&_nc_oc=AdkllDrrUt63oElmVQR-Maeqoc1ovPpxKLb6hdCHlEm2l9o41MHNGRw8o1QvmTNXD_s&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=9UQWNsgIaoetwKTyyvIaHg&oh=00_Afo2rwl1VDbGHHLf1QQlexp1nCqVHtQW1gWoB0BGAbPy6g&oe=69812C16' }
    ],
    [
        { id: 5, source: 'Formula 1', time: '3 hours ago', title: "'He deserves a lot more' Verstappen backs Alonso", excerpt: 'Max Verstappen believes his fellow two-time world champion...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514599767_1256735099151633_8722990873634234778_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IR8tWJ_vq1YQ7kNvwHxSb1e&_nc_oc=AdkTL_xLpUDHckX8NEUAxnamRcMcI3vsou-4fCCs9kHocGbxhDcWtLmkPmA7noU_560&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=z8RyUAliP6R1DLnaLtyDqg&oh=00_Afp5_V7JjbZoFQi4NJ8y3KDA1CjeKETSOcvxakpdo37JSQ&oe=69812F1C' },
        { id: 6, source: 'BBC', time: '12 hours ago', title: 'Liverpool hammer Leeds for first win in five games', excerpt: 'Mohamed Salah and Diogo Jota both scored twice as Liverpool...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/516315885_1262956371862839_4061162040399107547_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=toxYe0_oMHgQ7kNvwHd5QS8&_nc_oc=AdnwhgesZlinhBSmFRQO1MSiTrYtcoOfcyp5kJPwTgZO_ZBYRP897FijwC_UbiTSCYY&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=v75MoarlItqMRZpmMFVasg&oh=00_AfqZL7RvJnkU4kJfvkgGE6Q6UdxP5OTDOAOhUIw_6m0hfg&oe=6981212A' },
        { id: 7, source: 'IDN Times', time: 'April 17, 2023', title: 'Papua: At least one killed in hunt for kidnapped pilot', excerpt: 'At least one Indonesian soldier has been killed in a rebel attack...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/515080164_1256735069151636_354165985617074501_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y1Zs7aEA2YUQ7kNvwGxkK0q&_nc_oc=AdlyXAVz54butp-kcYo64tqkJQgUQJPaqQiiZAn7rdE9A0zxn-2YfRVPci-BgTA-sS0&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=AZXONURJ7d4o4NTfcIh9iw&oh=00_AfqW1fDEBU5jsglS5fuAVzHInfBDNngvVMUbToh43K-nqw&oe=69811CFB' },
        { id: 8, source: 'BBC', time: 'April 15, 2023', title: 'Jeremy Bowen: Israel\'s unclear road ahead', excerpt: 'Tensions between Israel and the Palestinians are on the rise once more...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514405901_1256735052484971_2922970408812693248_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VbSZdmfl3iAQ7kNvwEWSkCl&_nc_oc=Adn9LWxvGa0S39xfsVYFjHLtCvluUYZFlifbval10SrWr470slliEEapC3C3i_3jlO4&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=FdUjvE5F7HQCIEi3IjRfXw&oh=00_AfpH29A0XFB3gyypZhBgDU9tWYvzNU7wno6NAJZhh2Ux6w&oe=698118D1' }
    ],
    [
        { id: 9, source: 'Formula 1', time: '3 hours ago', title: "'He deserves a lot more' Verstappen backs Alonso", excerpt: 'Max Verstappen believes his fellow two-time world champion...', image: 'https://content.mosaiquefm.net/uploads/content/medium/1712704554.png' },
        { id: 10, source: 'BBC', time: '12 hours ago', title: 'Liverpool hammer Leeds for first win in five games', excerpt: 'Mohamed Salah and Diogo Jota both scored twice as Liverpool...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514328658_1256734935818316_5550043430983496641_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cCkrcSSyy-gQ7kNvwHq54TI&_nc_oc=Adkwnjp7V8EMsFjcKwshMrGTAKqkvzJa86bTHWOB_KO3HkzPtQm3UobxjzCRQqgtyEI&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=MY1IgsjlvJIw5oaVlo1Xeg&oh=00_AfobRe8ediEd5Qgp3eySTGIoW70mY3ivd3eAsf4WDOe1pg&oe=69810CB9' },
        { id: 11, source: 'IDN Times', time: 'April 17, 2023', title: 'Papua: At least one killed in hunt for kidnapped pilot', excerpt: 'At least one Indonesian soldier has been killed in a rebel attack...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514775678_1256735005818309_4743597921091793251_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yXiGFfp-4jEQ7kNvwER0Bff&_nc_oc=AdkcA776rQkSlIVqRl4mXqCVCC4ltusSJomIP8ETDZukfAk9jyBUpyvyKJpS7ogMU-Q&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=AEksl4YMgJqXlm8gcNsB3w&oh=00_AfoyJd5iy7dHSA3ybcfqeN7CMVAlx91LjS58mPzOO9e4Jw&oe=698134FA' },
        { id: 12, source: 'BBC', time: 'April 15, 2023', title: 'Jeremy Bowen: Israel\'s unclear road ahead', excerpt: 'Tensions between Israel and the Palestinians are on the rise once more...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514399360_1256735152484961_1202592867950453768_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IpsW72ppc1sQ7kNvwGMtRWg&_nc_oc=AdkllDrrUt63oElmVQR-Maeqoc1ovPpxKLb6hdCHlEm2l9o41MHNGRw8o1QvmTNXD_s&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=9UQWNsgIaoetwKTyyvIaHg&oh=00_Afo2rwl1VDbGHHLf1QQlexp1nCqVHtQW1gWoB0BGAbPy6g&oe=69812C16' }
    ],
    [
        { id: 5, source: 'Formula 1', time: '3 hours ago', title: "'He deserves a lot more' Verstappen backs Alonso", excerpt: 'Max Verstappen believes his fellow two-time world champion...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514599767_1256735099151633_8722990873634234778_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IR8tWJ_vq1YQ7kNvwHxSb1e&_nc_oc=AdkTL_xLpUDHckX8NEUAxnamRcMcI3vsou-4fCCs9kHocGbxhDcWtLmkPmA7noU_560&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=z8RyUAliP6R1DLnaLtyDqg&oh=00_Afp5_V7JjbZoFQi4NJ8y3KDA1CjeKETSOcvxakpdo37JSQ&oe=69812F1C' },
        { id: 6, source: 'BBC', time: '12 hours ago', title: 'Liverpool hammer Leeds for first win in five games', excerpt: 'Mohamed Salah and Diogo Jota both scored twice as Liverpool...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/516315885_1262956371862839_4061162040399107547_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=toxYe0_oMHgQ7kNvwHd5QS8&_nc_oc=AdnwhgesZlinhBSmFRQO1MSiTrYtcoOfcyp5kJPwTgZO_ZBYRP897FijwC_UbiTSCYY&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=v75MoarlItqMRZpmMFVasg&oh=00_AfqZL7RvJnkU4kJfvkgGE6Q6UdxP5OTDOAOhUIw_6m0hfg&oe=6981212A' },
        { id: 7, source: 'IDN Times', time: 'April 17, 2023', title: 'Papua: At least one killed in hunt for kidnapped pilot', excerpt: 'At least one Indonesian soldier has been killed in a rebel attack...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/515080164_1256735069151636_354165985617074501_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y1Zs7aEA2YUQ7kNvwGxkK0q&_nc_oc=AdlyXAVz54butp-kcYo64tqkJQgUQJPaqQiiZAn7rdE9A0zxn-2YfRVPci-BgTA-sS0&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=AZXONURJ7d4o4NTfcIh9iw&oh=00_AfqW1fDEBU5jsglS5fuAVzHInfBDNngvVMUbToh43K-nqw&oe=69811CFB' },
        { id: 8, source: 'BBC', time: 'April 15, 2023', title: 'Jeremy Bowen: Israel\'s unclear road ahead', excerpt: 'Tensions between Israel and the Palestinians are on the rise once more...', image: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/514405901_1256735052484971_2922970408812693248_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VbSZdmfl3iAQ7kNvwEWSkCl&_nc_oc=Adn9LWxvGa0S39xfsVYFjHLtCvluUYZFlifbval10SrWr470slliEEapC3C3i_3jlO4&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=FdUjvE5F7HQCIEi3IjRfXw&oh=00_AfpH29A0XFB3gyypZhBgDU9tWYvzNU7wno6NAJZhh2Ux6w&oe=698118D1' }
    ]
]

const NewsGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Rendering 3 rows as requested
  return (
    <section className={styles.sectionContainer}>
      <header className={styles.header}>
        <h2 className={styles.sectionTitle}>Latest News</h2>
      </header>

      {mediaArray.map((row) => (
        <motion.div 
          key={row}
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {row.map((article) => (
            <motion.article key={`${row}-${article.id}`} className={styles.card} variants={item}>
              <div className={styles.imageContainer}>
                <img src={article.image} alt={article.title} className={styles.image} />
              </div>
              
              <div className={styles.content}>
                <div className={styles.meta}>
                  <div className={styles.sourceGroup}>
                    {/* <div className={styles.sourceIndicator} /> */}
                    <span className={styles.sourceName}>{article.source}</span>
                  </div>
                  <span className={styles.dot}>•</span>
                  <span className={styles.time}>{article.time}</span>
                </div>

                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      ))}
    </section>
  );
};

export default NewsGrid;