import Image from 'next/image';
import svg from "../../../public/feather.svg"
import styles from '../../Styles/Servise.module.css'


const servises = [
      { id: '1', name: 'Оформлення договорів' },
  { id: '2', name: 'Оформлення довіреностей' },
  { id: '3', name: 'Оформлення заяв' },
  { id: '4', name: 'Оформлення спадщини' },
  { id: '5', name: 'Оформлення заповіту' },
  { id: '6', name: 'Посвідчення підпису' },
  { id: '7', name: 'Посвідчення копій' },
  { id: '8', name: 'Переоформлення нерухомості' },
  { id: '9', name: 'Державна реєстрація' },
  { id: '10', name: 'Посвідчення аграрних розписок' },
  ];

const Servise = ({ }) => {
    return (
        <section className={styles.section}>
        <div className={styles.container}>
        <ul className={styles.list}>
      {servises.map(({ id, name }) => (
        <li className={styles.item} key={id}>
         
       <Image className={styles.img}         
       src={svg} 
       alt='feather'        
       width={36}
       height={36}
       priority/>
         
      
         <p className={styles.text}>{name}</p>
        </li>
      ))}
    </ul>
      </div>
        </section>
    )
}

export {Servise}