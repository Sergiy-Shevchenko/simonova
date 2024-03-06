import Link from "next/link";
import ContactPhoneIcon from "../Icons/ContactPhoneIcon";
import ContactEmailIcon from "../Icons/ContactEmailIcon";

import styles from "../Styles/Contacts.module.css";

const Contacts = () => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.contact}>
          <Link className={styles.contact__item} href="tel:+380960051155">
            <ContactPhoneIcon />
            <p className={styles.contact__text}>+38 096 005 11 55</p>
          </Link>
        </div>
        <div className={styles.contact}>
          <Link
            className={styles.contact__item}
            href="mailto:simonova.w78@ukr.net"
          >
            <ContactEmailIcon />
            <p className={styles.contact__text}>simonova.w78@ukr.net</p>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Contacts };
