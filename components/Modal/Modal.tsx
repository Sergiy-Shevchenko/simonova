import styles from "@/components/Styles/Modal.module.css";
import Succses from '@/public/succses.svg'

const Modal = ({ isVisible, onClose, children }) => {
  
  if (!isVisible) return true;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <Succses className={styles.svg}/>
          {children}
        <button
          data-modal-close
          className={styles.button}
          onClick={() => onClose()}
        >
         <p className={styles.button__text}>Ok</p>
        </button>
        
        </div>

        
    
    </div>
  );
};

export { Modal };
