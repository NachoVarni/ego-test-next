import styles from './SideNavbar.module.scss'
import Image from 'next/image'
import FieldContext from '../../Context/FieldContext'
import {useContext} from 'react'

function SideNavbar({handleShowSide}) {
  
  
  return(
    <>
      <div className={styles.sideNavbar}>
        <header className={styles.sideHeader}>
          <div onClick={handleShowSide} className={styles.sideCloseWrapper}>
            <span className={styles.sideClose}>Cerrar</span>
            <div className={styles.sideCross}>
              <Image src={'/assets/cross.png'} alt='cerrar' layout='fill' objectFit='contain' />
            </div>
          </div>
        </header>
        <ul className={styles.sideList}>
          <li className={styles.listText}>Modelos</li>
          <li className={styles.listText}>Servicios y Accesorios</li>
          <li className={styles.listText}>Financiacion</li>
          <li className={styles.last}>Reviews y comunidad</li>
          <div className={styles.listLineWrapper}><div className={styles.listLine}></div></div>
          <li className={styles.listText}>Toyota Mobility Service</li>
          <li className={styles.listText}>Toyota Gazoo Racing</li>
          <li className={styles.last}>Toyota Hibridos</li>
          <div className={styles.listLineWrapper}><div className={styles.listLine}></div></div>
          <li className={styles.listText}>Concesionarios</li>
          <li className={styles.listText}>Test Drive</li>
          <li className={styles.last}>Contacto</li>
          <div className={styles.bottom}><div className={styles.listLine}></div></div>
          <div className={styles.coloredList}>
            <li className={styles.listText}>Actividades</li>
            <li className={styles.listText}>Servicios al Cliente</li>
            <li className={styles.listText}>Ventas Especiales</li>
            <li className={styles.listText}>Innovacion</li>
            <li className={styles.listText}>Prensa</li>
            <li className={styles.listText}>Acerca de...</li>
          </div>
        </ul>
        
    </div>
    </>
  
  )
}

export default SideNavbar