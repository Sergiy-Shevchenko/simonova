import styles from "@/components/Styles/Advertisement.module.css";

const Advertisement = ({}) => {
  return (
    <section className={styles.section}>
      <p className={styles.text_notary}>
       Консультируем и осуществляем все виды нотариальных действий, в соответствии с Законом Украины
        “О нотариате”</p>
    </section>
  );
};

export { Advertisement };
