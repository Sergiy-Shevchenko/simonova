import styles from '../../Styles/Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.section}>
        <div className={styles.container}>
        {/* <img className={styles.picture} src={img} alt="gerb" /> */}
        <div className={styles.hhbgihb}>
          <div className={styles.title}>
            <h3 className={styles.city}>КИЇВСЬКИЙ МІСЬКИЙ НОТАРІАЛЬНИЙ ОКРУГ</h3>
            <h2 className={styles.job}>НОТАРІУС</h2>
            <h1 className={styles.name}>СІМОНОВА Вікторія Валеріївна</h1>
            <h4 className={styles.certificate}>Свідоцтво №9690</h4>
          </div>
       
        </div>
        {/* <img className={styles.logo} src={logo} alt="logo" /> */}
      </div>
        </section>
    )
}

export {Hero}