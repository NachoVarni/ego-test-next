import styles from './ProductFilter.module.scss'
import Button from '../Button'
import SortWrapper from '../SortWrapper'
import Select from '../Select'
import {useContext} from 'react'
import FieldContext from '../../Context/FieldContext'
import FilteredCarsContext from '../../Context/FilteredCarsContext'

export default function ProductFilter() {
  
  const fieldContext = useContext(FieldContext)
  const filteredCarsContext = useContext(FilteredCarsContext)
  const {buttons} = fieldContext
  const {orderBy} = filteredCarsContext
  
  return(
    <>
      <div className={styles.filterList}>
        <div className={styles.filterListLeft}>
          <span className={styles.filterBy}>Filtrar por</span> 
          <Button />
        </div>
        <div className={styles.filterListRight}>
          <Select options={orderBy} defaultValue='Ordenar por' />
        </div>
        
      </div>
      <div className={styles.responsiveWrapper}>
        <Select options={buttons} defaultValue='Filtrar por' />
        <Select options={orderBy} defaultValue='Ordenar por' />
      </div>
      
      
      
    </>
  )
}

