// 'use client'

import styles from "@/components/Styles/Modal.module.css";
import Hours from "@/public/24-hours.svg";
import MetroIcon from "@/public/metro.svg";
import { ModalButtonTitle } from "../UA/ModalComponent/ModalButtonTitle";

const Modal = ({ isVisible, onClose, children }) => {
  console.log(isVisible);
  console.log(onClose);
  console.log(children);

  if (!isVisible) return true;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <Hours className={styles.svg} />
        <div className={styles.modal__content}>
          <MetroIcon className={styles.modal__icon} />
          {children}
        </div>

        <button
          data-modal-close
          className={styles.button}
          onClick={() => onClose()}
        >
          <ModalButtonTitle />
        </button>
      </div>
    </div>
  );
};

export { Modal };
