import styles from '@/components/Styles/Loader.module.css'

export default function LoadingPage() {
    return (  
    <div id="preloader">
    <div className={styles.loader}>
      <div className={styles.face}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.face}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.face}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.face}>
        <div className={styles.circle}></div>
      </div>
    </div>
  </div>)
     
    
}