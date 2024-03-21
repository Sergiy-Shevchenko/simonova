import styles from "@/components/Styles/Map.module.css";
import MapPointIcon from "@/components/Icons/MapPointIcon";

const Map = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <MapPointIcon />
        <h3 className={styles.title}>Google map</h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5086.618995605129!2d30.507330514314837!3d50.39806938726347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c94b47d3a02f%3A0xa0a5d4afb1d840c3!2sNotarius%20Simonova%20Viktoriya%20Valeriyivna!5e0!3m2!1sen!2sua!4v1711049166359!5m2!1sen!2sua"
        width="600"
        height="450"
        loading="lazy"
        className={styles.map}
      ></iframe>
    </section>
  );
};

export { Map };
