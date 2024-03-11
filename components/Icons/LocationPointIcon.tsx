import styles from '../Styles/Location.module.css'

const LocationPointIcon = () => (
  <svg viewBox="0 0 32 32"
  className={styles.map__icon}>
    <path fill="none" 
    strokeLinejoin="miter" 
    strokeLinecap="butt" 
    strokeMiterlimit="4" 
    strokeWidth="1" 
    d="M26.5 10.95c0 6.75-8.1 20.55-10.5 20.55-2.45 0-10.5-13.8-10.5-20.55 0-5.8 4.7-10.45 10.5-10.45s10.5 4.7 10.5 10.45z"></path>
    <path fill="none" 
    strokeLinejoin="miter" 
    strokeLinecap="butt" 
    strokeMiterlimit="4" 
    strokeWidth="1" 
    d="M20 10.5c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
  </svg>
)
export default LocationPointIcon