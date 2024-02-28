import Image from 'next/image'
import logo from '../../../public/tryzub.svg'
import styles from '../../Styles/Hero.module.css'
import { Contacts } from '@/components/Contacts/Contacts'

const Hero = () => {
    return (
        <section className={styles.section}>
        <div className={styles.container}>
          <Image className={styles.logo}
          src={logo}
          alt='truzub'
          priority
          />        
        <div className={styles.hhbgihb}>
          <div className={styles.title}>
            <h3 className={styles.city}>КИЇВСЬКИЙ МІСЬКИЙ НОТАРІАЛЬНИЙ ОКРУГ</h3>
            <h2 className={styles.job}>НОТАРІУС</h2>
            <h1 className={styles.name}>СІМОНОВА Вікторія Валеріївна</h1>
            <h4 className={styles.certificate}>Свідоцтво №9824</h4>
          </div>
       
        </div>
       <Contacts/>
      </div>
        </section>
    )
}

export {Hero}