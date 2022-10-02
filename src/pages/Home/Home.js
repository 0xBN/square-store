import styles from './styles.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroWords}>
        <div className={styles.title}>BEST ONLINE RETAILER OF SQUARES</div>
        <br />
        <div className={styles.subtitle}>
          All squares are rectangles but all rectangles are not squares.
        </div>
        <br />
        <button className={styles.shopButton}>
          <a href='./shop'>Shop Now</a>
        </button>
      </div>
      <div className={styles.heroImage}>
        <img src='https://bit.ly/3y8HzQG' alt='' />
      </div>
    </div>
  );
};
