import Image from 'next/image'
import styles from '@/components/Styles/Location.module.css'
import Picture from '@/public/of_1.jpg'
import LocationPointIcon from '@/components/Icons/LocationPointIcon'
import MetroIcon from '@/public/metro.svg' 

const Location = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <LocationPointIcon/>
                <h3 className={styles.title}>проспект Голосіївський, 70, готель `Мир`, <MetroIcon className={styles.metro_icon}/> Голосіївська</h3>
                 </div>
                <Image src={Picture} alt='office_1'
                className={styles.map}/>
           
        </section>
    )
}

export {Location}