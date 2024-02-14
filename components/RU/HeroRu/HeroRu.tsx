import styles from '../../Styles/Hero.module.css'

const HeroRu = () => {
    return (
        <section className={styles.section}>
        <div className={styles.container}>
        {/* <img className={styles.picture} src={img} alt="gerb" /> */}
        <div className={styles.hhbgihb}>
          <div className={styles.title}>
            <h3 className={styles.city}>КИЕВСЬКИЙ ГОРОДСКОЙ НОТАРИАЛЬНЫЙ ОКРУГ</h3>
            <h2 className={styles.job}>НОТАРИУС</h2>
            <h1 className={styles.name}>СИМОНОВА Виктория Валериевна</h1>
            <h4 className={styles.certificate}>Свидетельство №9690</h4>
          </div>
       
        </div>
        {/* <img className={styles.logo} src={logo} alt="logo" /> */}
      </div>
        </section>
    )
}

export {HeroRu}