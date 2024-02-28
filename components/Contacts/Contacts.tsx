import Link from 'next/link'
import Image from 'next/image'
import phone from '../../public/contact-phone.svg'
import email from '../../public/contact-email.svg'


import styles from '../Styles/Contacts.module.css'

const Contacts = () => {
    return (
       <section className={styles.section}>
        <div>
            <div className={styles.contact}>               
                <Link className={styles.contact__item} href="tel:+380960051155">
                  <Image className={styles.contact__icon}
                src={phone}
                alt='phone'/>
                <p className={styles.contact__text}>+38 096 005 1155</p></Link>
              </div>
            <div className={styles.contact}>

                <Link className={styles.contact__item} href="mailto:simonova.w78@ukr.net">
                <Image className={styles.contact__icon}
                src={email}
                alt='email'/><p className={styles.contact__text}>simonova.w78@ukr.net</p>  </Link>
            </div>
          </div>
       </section>
    )
}

export {Contacts}