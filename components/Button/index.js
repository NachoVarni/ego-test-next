import styles from './Button.module.scss'
import FieldContext from '../../Context/FieldContext'
import FilteredCarsContext from '../../Context/FilteredCarsContext'
import React, { useContext } from 'react'

export default function Button() {
  
  const fieldData = useContext(FieldContext)
  const filterData = useContext(FilteredCarsContext)
  const {buttons} = fieldData
  const {filter} = filterData
  
  
  return(
    <>
      {buttons.map((cat, key) => {
        return(
          <div key={key} className={styles.wrapper}>
            <button onClick={() => filter(cat)} className={`${styles.button} active`}>{cat}</button>
          </div>
        )
      })}
    </>
  )
}
