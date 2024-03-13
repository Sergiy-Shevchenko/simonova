import styles from "../../Styles/Hero.module.css";
import { Contacts } from "@/components/Contacts/Contacts";
import Logo from "../../../public/logo.svg.png.svg";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
       <Logo className={styles.logo} />
        <div className={styles.hhbgihb}>
          <div className={styles.title}>
            <h3 className={styles.city}>
              КИЇВСЬКИЙ МІСЬКИЙ НОТАРІАЛЬНИЙ ОКРУГ
            </h3>
            <h2 className={styles.job}>НОТАРІУС</h2>
            <h1 className={styles.name}>СІМОНОВА Вікторія Валеріївна</h1>
            <h4 className={styles.certificate}>Свідоцтво №9824</h4>
          </div>
        </div>
        <Contacts />
      </div>
    </section>
  );
};

export { Hero };
