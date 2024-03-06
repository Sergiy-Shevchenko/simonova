import styles from '../Styles/Schedule.module.css'

const ClockIcon = ()=> (
  <svg xmlns="http://www.w3.org/2000/svg" 
  // width="48" 
  // height="48" 
  viewBox="0 0 24 24"
  fill="currentColor"
  // stroke="currentColor"
className={styles.icon__time}
  >
  <g 
  // fill="none" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  strokeWidth="1.5"
  >
      <path d="M12 6v6l4 2"></path>
      <circle cx="12" cy="12" r="9"></circle>
  </g>
  </svg>
)
export default ClockIcon
