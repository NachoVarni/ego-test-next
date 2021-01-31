import styles from './Button.module.scss'
import FieldContext from '../../Context/FieldContext'
import FilteredCarsContext from '../../Context/FilteredCarsContext'
import { useContext, useState } from 'react'

export default function Button() {
  
  const [isActive, setIsActive] = useState(false)
  
  const fieldData = useContext(FieldContext)
  const filterData = useContext(FilteredCarsContext)
  const {buttons} = fieldData
  const {filter} = filterData
  
  
  function handleChangeColor() {
    setIsActive(true)
  }

  return(
    <>
      {buttons.map((cat, key) => {
        return(
          <div key={key} className={styles.wrapper}>
            <button onClick={() => filter(cat)} className={`${styles.button}`}>{cat}</button>
          </div>
        )
      })}
    </>
  )
}

// className={router.pathname != "/" ? `${styles.info} ${styles.selected}` : styles.info}