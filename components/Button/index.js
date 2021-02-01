import styles from './Button.module.scss'
import FieldContext from '../../Context/FieldContext'
import FilteredCarsContext from '../../Context/FilteredCarsContext'
import { useContext, useState } from 'react'

export default function Button() {
  
  const fieldData = useContext(FieldContext)
  const filterData = useContext(FilteredCarsContext)
  const {buttons} = fieldData
  const {filter, sortArray} = filterData
  
  
  return(
    <>
      {buttons.map((cat, key) => {
        return(
          <div key={key} className={styles.wrapper}>
            <button onClick={() => sortArray(cat)} className={`${styles.button}`}>{cat}</button>
          </div>
        )
      })}
    </>
  )
}

// className={router.pathname != "/" ? `${styles.info} ${styles.selected}` : styles.info}