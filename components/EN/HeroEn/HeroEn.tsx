import styles from "@/components/Styles/Hero.module.css";
import { Contacts } from "@/components/Contacts/Contacts";
import Logo from "@/public/logo.svg";

const HeroEn = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
       <Logo className={styles.logo} />
        <div className={styles.hhbgihb}>
          <div className={styles.title}>
            <h3 className={styles.city}>
            KYIV CITY NOTARIAL DISTRICT
            </h3>
            <h2 className={styles.job}>NOTARY</h2>
            <h1 className={styles.name}>SIMONOVA Victoria</h1>
            <h4 className={styles.certificate}>Certificate №9824</h4>
          </div>
        </div>
        <Contacts />
      </div>
    </section>
  );
};

export { HeroEn };
