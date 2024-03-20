import Image from "next/image";
import styles from "@/components/Styles/Location.module.css";
import Picture from "@/public/of_1.jpg";

import LocationPointIcon from "@/components/Icons/LocationPointIcon";

const Location = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <LocationPointIcon />
        <h3 className={styles.title}>
        Golosiivskyi Avenue, 70, `MIR` Hotel (m. Goloseevskaya)
        </h3>
      </div>
      <Image src={Picture} alt="office_1" className={styles.map} />
    </section>
  );
};

export { Location };
