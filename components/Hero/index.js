import styles from './Hero.module.scss'
import ProductFilter from '../ProductFilter'
import Products from '../Products'
import FieldContext from '../../Context/FieldContext'
import React, { useContext, useEffect, useState } from 'react'
import { FilteredCarsProvider } from '../../Context/FilteredCarsContext'

const orderBy = ['Mas caro', 'Mas barato', 'Mas nuevo', 'Mas viejo']

export default function Hero() {
 
  const [filteredAndSortedData, setFilteredAndSortedData] = useState([])
    
  const context = useContext(FieldContext)
  const {products} = context

 useEffect(() => {
    setFilteredAndSortedData(products)  
  }, [products])

  const sortArray = type => {
     
    if (type === 'Todos') {
      
      setFilteredAndSortedData([...products])
      
    }
    else if (
      type === 'Autos' ||
      type === 'Pickups y Comerciales' ||
      type === 'SUVs y Crossovers' 
      ) {
      const filteredData = products.filter(car => car.segment === type);
    
      setFilteredAndSortedData(filteredData)
    }
    
    const sortedAscendentPrice = [...filteredAndSortedData].sort((a, b) => b.price - a.price);
    const sortedDescendentPrice = [...filteredAndSortedData].sort((a, b) => a.price - b.price);
    const sortedAscendentYear = [...filteredAndSortedData].sort((a, b) => b.year - a.year);
    const sortedDescendentYear = [...filteredAndSortedData].sort((a, b) => a.year - b.year);

    if (type === 'Mas caro') {
      setFilteredAndSortedData(sortedAscendentPrice)
      
    }
    else if (type === 'Mas barato') {
      setFilteredAndSortedData(sortedDescendentPrice);
    }
    else if (type === 'Mas nuevo') {
      setFilteredAndSortedData(sortedAscendentYear);
      
    }
    else if (type === 'Mas viejo') {
      setFilteredAndSortedData(sortedDescendentYear);
    }
  };
  
  

  const filteredCarsData = {
    filteredAndSortedData,
    products,
    sortArray,
    orderBy
  }


  return(
    <FilteredCarsProvider value={filteredCarsData}>
      <div className={styles.hero}>
        <h3 className={styles.discover}>Descubri todos los modelos</h3>
        <ProductFilter />
        <Products carsData={filteredAndSortedData} />
      
      </div>
    </FilteredCarsProvider>
  )
}
