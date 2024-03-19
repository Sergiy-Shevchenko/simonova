import styles from '@/components/Styles/Modal.module.css'
import Hours from '@/public/24-hours.svg';
import MetroIcon from '@/public/metro.svg'

const Modal = () => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <Hours className={styles.svg}/>
                <div className={styles.modal__content}>
                <MetroIcon className={styles.modal__icon}/>
                    children</div>
               <button data-modal-close className={styles.button}>
        <p className={styles.button__text}>Ok</p>
      </button>
            </div>
            
            
            
            </div>
    )
}

export {Modal};