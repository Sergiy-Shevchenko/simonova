import styles from "@/components/Styles/Schedule.module.css";
import ClockIcon from "@/components/Icons/Clock";
import CalendarIcon from "@/components/Icons/Calendar";

const Schedule = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.schedule__title}>
          <CalendarIcon />
          <h3 className={styles.title}>Work schedule</h3>
        </div>

        <div className={styles.schedule}>
          <ClockIcon />
          <span className={styles.sectson}>
            <p className={styles.text}>Md-Fr - 10:00 - 19:00</p>
            <p className={styles.text}>Sa-Su - By prior agreement</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export { Schedule };
