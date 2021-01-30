import CarData from '../CarData'
import styles from './DataSheetHero.module.scss'
import CarCarousel from '../CarCarousel'

export default function DataSheetHero() {
  return(
    <div className={styles.wrapper}>
      <CarData />
      <CarCarousel />
    </div>
  )
}