import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import SideNavbar from '../SideNavbar'
import { useContext } from 'react'
import {useRouter} from 'next/router'
import FieldContext from '../../Context/FieldContext'

function Navbar({handleShowSide, showSideNav}) {
  
  const router = useRouter()
  // const context = useContext(FieldContext)
  // const {showSideNav, handleShowSide} = context

  return(
    <>
      {!showSideNav && 
        <div className={styles.navbar}> 
            <ul className={styles.leftHeader}>
              <li className={styles.logoWrapper}>
                <Link href='/'>  
                  <div className={styles.logo}>
                    <Image src='/assets/logo.png' alt='ego' layout='fill' objectFit='contain'  />
                  </div>
                </Link>
              </li>
              <li className={router.pathname == "/" ? `${styles.models} ${styles.selected}` : styles.models}>
                <Link href='/'>
                
                  Modelos
                
                </Link>
              </li>
              
              
                <li className={router.pathname != "/" ? `${styles.info} ${styles.selected}` : styles.info}>
                  Ficha de modelo
                </li>
              
            </ul>
            
            <div className={styles.rightHeader} onClick={() => handleShowSide()}>
              <span className={styles.menu}>Menu</span>
              <div className={styles.menuImg}>
                <Image src='/assets/gray.png' alt='menu' layout='fill' objectFit='contain'  />
              </div>
            </div>
          </div>
      }
      
      {showSideNav && 
        <div className={styles.responsiveNavbar}> 
            <div className={styles.responsiveLogo}>
              <Link href='/'>  
                <div className={styles.responsiveImg}>
                  <Image src='/assets/logo.png' alt='ego' layout='fill' objectFit='contain'  />
                </div>
              </Link>
            </div>
            <div className={styles.responsiveMenuImg}>
              <Image src='/assets/gray.png' alt='menu' layout='fill' objectFit='contain'  />
            </div>
          </div>
      }    
          
      {showSideNav && 
        <>
          <SideNavbar handleShowSide={handleShowSide} />
          <div className={styles.backdrop}></div>
        </>
      }
      

      
    </>
  )
}

export default Navbar