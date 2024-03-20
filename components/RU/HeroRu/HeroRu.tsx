import styles from "@/components/Styles/Hero.module.css";
import { Contacts } from "@/components/Contacts/Contacts";
import Logo from "@/public/logo.svg";

const HeroRu = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
       <Logo className={styles.logo} />
        <div className={styles.hhbgihb}>
          <div className={styles.title}>
            <h3 className={styles.city}>
            КИЕВСЬКИЙ ГОРОДСКОЙ НОТАРИАЛЬНЫЙ ОКРУГ
            </h3>
            <h2 className={styles.job}>НОТАРИУС</h2>
            <h1 className={styles.name}>СИМОНОВА Виктория Валериевна</h1>
            <h4 className={styles.certificate}>Свидетельство №9824</h4>
          </div>
        </div>
        <Contacts />
      </div>
    </section>
  );
};

export { HeroRu };
