import Hours from "@/public/24-hours.svg";
import MetroIcon from "@/public/metro.svg";
import styles from "@/components/Styles/Modal.module.css";

const ModalContent = ({}) => {
  return (
    <div>
      <div className={styles.modal__content_schedule}>
        <p className={styles.modal_title_schedule}>Работаем</p>
        <Hours className={styles.modal_icon_schedule} />
      </div>

      <div className={styles.modal__content}>
        <MetroIcon className={styles.modal__icon} />
        <p className={styles.modal_title}>Голосеевськая, отель `МИР`</p>
      </div>
    </div>
  );
};

export { ModalContent };
