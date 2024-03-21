import styles from "@/components/Styles/Advertisement.module.css";

const Advertisement = ({}) => {
  return (
    <section className={styles.section}>
      <p className={styles.text_notary}>
        I provide consultations and perform all types of notarial actions in accordance with 
        the Law of Ukraine “On Notariat”       
      </p>
    </section>
  );
};

export { Advertisement };
