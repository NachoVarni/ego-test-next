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
            <li>
              
                <Logo src='/assets/logo.png' alt='ego' width={20} height={20} className={styles.logo} />
              
            </li>
            <li className={router.pathname == "/" ? "models active" : "models"}>
                
                Modelos
              
            </li>
            <li className={router.pathname == "/" ? "info active" : "info"}>
              <Link href='/ficha/1'>
                Ficha de modelo
              </Link>
            </li>
          </ul>
          <div className={styles.rightHeader} onClick={handleClick}>
            <span className={styles.menu}>Menu</span>
            <Hamburguer src='/assets/gray.png' alt='menu' width={25} height={18} className={styles.menuImg} />
          </div>

        </div>
      }

      {showSide && <SideNavbar handleClick={handleClick} />}
      {showSide && <div className='backdrop'></div>}
    </>
  )
}

export default Navbar