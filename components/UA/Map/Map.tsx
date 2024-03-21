import styles from "@/components/Styles/Map.module.css";
import MapPointIcon from "@/components/Icons/MapPointIcon";

const Map = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <MapPointIcon />
        <h3 className={styles.title}>Google мапа</h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5086.6403320892505!2d30.505885859246824!3d50.39787055127343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c94b47d3a02f%3A0xa0a5d4afb1d840c3!2z0J3QvtGC0LDRgNGW0YPRgSDQodGW0LzQvtC90L7QstCwINCS0ZbQutGC0L7RgNGW0Y8g0JLQsNC70LXRgNGW0ZfQstC90LA!5e0!3m2!1suk!2sua!4v1711048846314!5m2!1suk!2sua" 
        width="600"
        height="450"
        loading="lazy"
        className={styles.map}
      ></iframe>      
    </section>
  );
};

export { Map };
