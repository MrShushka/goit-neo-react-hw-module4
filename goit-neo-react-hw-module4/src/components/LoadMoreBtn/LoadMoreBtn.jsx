import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <div className={styles.wrapper}>
    <button className={styles.button} onClick={onClick}>Load more</button>
  </div>
);

export default LoadMoreBtn;
