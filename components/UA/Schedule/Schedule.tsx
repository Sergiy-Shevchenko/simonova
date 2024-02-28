import Image from 'next/image';
import calendar from '../../../public/calendar.svg'
import clock from '../../../public/clock.svg'
import styles from '../../Styles/Schedule.module.css';

const Schedule = () => {
    return (
        <section>
            <div className={styles.container}>
            <h3 className={styles.title}>
            <Image className={styles.icon__calendar}         
       src={calendar} 
       alt='calendar'        
       width={36}
       height={36}
       priority/>Графік роботи</h3>
    <div className={styles.schedule}>
    <Image className={styles.icon__time}         
       src={clock} 
       alt='clock'        
       width={36}
       height={36}
       priority/>
       <span className={styles.sectson}>
        <p className={styles.text}>Пн-Пт - 10:00-19:00</p>
        <p className={styles.text}>Сб-Нд - За домовленістю</p>
      </span>
    </div>  
            </div>
        </section>
    )
}

export {Schedule}