import styles from './ProductFilter.module.scss'
import Button from '../Button'
import SortWrapper from '../SortWrapper'


export default function ProductFilter() {
  
  return(
    <div className={styles.filterList}>
      <div className={styles.filterListLeft}>
        <span className={styles.filterBy}>Filtrar por</span> 
        <Button />
      </div>
      <div className={styles.filterListRight}>
        <SortWrapper  />
      </div>
    </div>
      
    
  )
}

