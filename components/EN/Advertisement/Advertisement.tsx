import styles from "@/components/Styles/Advertisement.module.css";

const Advertisement = ({}) => {
  return (
    <section className={styles.section}>
      <p className={styles.text_notary}>
        I consult and perform all types of notarial actions, in accordance with
        the Law of Ukraine “On Notaries”
      </p>
    </section>
  );
};

export { Advertisement };
