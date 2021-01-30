import styles from './Navbar.module.scss'
import Logo from 'next/image'
import Link from 'next/link'
import Hamburguer from 'next/image'
import SideNavbar from '../SideNavbar'
import { useState } from 'react'
import {useRouter} from 'next/router'

function Navbar() {
  
  const [showSide, setShowSide] = useState(false)

  function handleClick() {
    setShowSide((prevState) => !prevState)
    
  }
  
  const router = useRouter()

  return(
    <>
      {!showSide && 
        <div className={styles.navbar}> 
          <ul className={styles.leftHeader}>
            
            <Link href='/'>  
                <li>
                <Logo src='/assets/logo.png' alt='ego' width={20} height={20} className={styles.logo} />
                </li>
              </Link>
            
            <Link href='/'>
              <li className={router.pathname == "/" ? `${styles.models} ${styles.selected}` : styles.models}>
                Modelos
              </li>
            </Link>
            
            <Link href='/ficha/1'>
              <li className={router.pathname != "/" ? `${styles.info} ${styles.selected}` : styles.info}>
                Ficha de modelo
              </li>
            </Link>
          </ul>
          
          <div className={styles.rightHeader} onClick={handleClick}>
            <span className={styles.menu}>Menu</span>
            <Hamburguer src='/assets/gray.png' alt='menu' width={25} height={18} className={styles.menuImg} />
          </div>

        </div>
      }

      {showSide && <SideNavbar handleClick={handleClick} />}
      {showSide && <div className={styles.backdrop}></div>}
    </>
  )
}

export default Navbar