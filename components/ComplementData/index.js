import DataSheetContext from '../../Context/DataSheetContext'
import {useContext} from 'react'
import styles from './ComplementData.module.scss'

export default function ComplementData() {
  
  const context = useContext(DataSheetContext)
  const {model, highlights} = context
  
  return(
    <div className={styles.hero}>
      {highlights.map((highlight, i) => {
        console.log(i)
        return(
          <div className={i == 0 ? `${styles.wrapper}` : `${styles.wrapper} ${styles.two}` }>
            <div className={styles.textWrapper}>
              <h3 className={styles.title}>{highlight.title}</h3>
              <p className={styles.text}>{highlight.content}</p>
            </div>
            <div className={styles.imageWrapper}>
              <img src={`https://challenge.agenciaego.tech${highlight.image}`} className={styles.image} />
            </div>
            
          </div>
        )
      })}
    </div>
  )
}