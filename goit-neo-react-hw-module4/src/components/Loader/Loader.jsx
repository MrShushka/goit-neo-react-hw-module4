import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <ClipLoader size={50} color="#007BFF" />
  </div>
);

export default Loader;
