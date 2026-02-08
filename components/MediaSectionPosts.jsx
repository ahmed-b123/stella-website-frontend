import styles from './MediaSectionPosts.module.css';
import { ArrowUpRight } from 'lucide-react'; // Example using lucide-react, or use an SVG

const MediaSectionPosts = () => {
  const cards = [
    {
      id: 1,
      title: "Modern Design Trends",
      author: "Alex Reed",
      date: "Jan 12, 2026",
      image: "https://img.restaurantguru.com/rd67-Stella-Cafe-Teatime-Paris-design.jpg", // Ensure images are in your public folder
      style: styles.cardOne
    },
    {
      id: 2,
      title: "Next.js Performance",
      author: "Sarah J.",
      date: "Jan 15, 2026",
      image: "https://tb-static.uber.com/prod/image-proc/processed_images/1eebf5c5c732ab00148ea643a747e4bd/fb86662148be855d931b37d6c1e5fcbe.jpeg",
      style: styles.cardTwo
    },
    {
      id: 3,
      title: "Creative Solutions",
      author: "James Doe",
      date: "Feb 04, 2026",
      image: "https://images.squarespace-cdn.com/content/v1/58d96e7b46c3c455ff795ed4/1625681239993-28EW4GVKLQP2LRZWKL7B/20210707_073204.jpg",
      style: styles.cardThree
    }
  ];

  return (
    <section className={styles.container}>
      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <div key={card.id} className={`${styles.card} ${card.style}`}>
            <img src={card.image} alt={card.title} className={styles.cardImage} />
            <div className={styles.overlay}>
              <div className={styles.iconContainer}>
                <span className={styles.arrowIcon}>↗</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardMeta}>
                  by {card.author} <span className={styles.dot}>•</span> {card.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSectionPosts;