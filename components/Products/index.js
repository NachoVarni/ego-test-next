import styles from './Products.module.scss'
import Link from 'next/link'


export default function Products({carsData}) {
  

  return(
    <>
      
      <div className={styles.products}>
        {carsData.map((product) => {
          return(
            <Link href={`/ficha/${product.id}`} key={product.id}>
              <div className={styles.product} >
                <h4 className={styles.productName}>{product.name}</h4>
                <span className={styles.productYear}>{product.year} | ${product.price}</span>
                <img src={product.photo} alt='car' className={styles.productPic} />
              </div>  
            </Link>
          )
        })}
      
      </div>
    </>
  )
}

