import styles from './SideNavbar.module.scss'
import Cross from 'next/image'
import React from 'react'

function SideNavbar({handleClick}) {
  
  

  return(
    <div className={styles.sideNavbar}>
      <header className={styles.sideHeader}>
        <div onClick={handleClick}>
          <span className={styles.sideCerrar}>Cerrar</span>
          <Cross src={'/assets/fill-1.png'} alt='cerrar' width={15} height={15} className={styles.sideCross} />
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
    
  
  )
}

export default SideNavbar