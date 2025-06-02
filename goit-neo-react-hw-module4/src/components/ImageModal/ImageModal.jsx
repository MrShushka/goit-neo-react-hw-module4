import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img className={styles.image} src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
