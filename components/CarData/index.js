import {useContext} from 'react'
import DataSheetContext from '../../Context/DataSheetContext'
import styles from './CarData.module.scss'

 
export default function CarData() {
  
  const context = useContext(DataSheetContext)
  const {model} = context
  
  console.log(model)

  return(
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={model.photo} className={styles.image} />  
      </div>
      <div className={styles.descWrapper}>
        <h2 className={styles.name}>{model.name}</h2>
        <h3 className={styles.title}>{model.title}</h3>
        <p className={styles.desc}>{model.description}</p>
      </div>
    </div>
  )
}