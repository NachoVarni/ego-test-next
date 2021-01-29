import styles from './Hero.module.scss'
import ProductFilter from '../ProductFilter'
import Products from '../Products'
import FieldContext from '../../Context/FieldContext'
import React, { useContext, useEffect, useState } from 'react'
import { FilteredCarsProvider } from '../../Context/FilteredCarsContext'

export default function Hero() {
 
  const [filteredAndSortedData, setFilteredAndSortedData] = useState([])
  
  const context = useContext(FieldContext)
  const {products} = context

 useEffect(() => {
    setFilteredAndSortedData(products)  
  }, [products])

  
  const filter = (button) => {
    //FILTERS  
    
    if (button === 'Todos') {
      
      setFilteredAndSortedData([...products])
      
    }
    else {
      const filteredData = products.filter(car => car.segment === button);
    
      setFilteredAndSortedData(filteredData)
    }
    
  }

  const sortArray = type => {
    const types = {
      moreExpensive: 'price',
      cheaper: 'price',
      newest: 'year',  
      oldest: 'year',
    };
    const sortProperty = types[type];
    
    const sortedAscendent = [...filteredAndSortedData].sort((a, b) => b[sortProperty] - a[sortProperty]);
    const sortedDescendent = [...filteredAndSortedData].sort((a, b) => a[sortProperty] - b[sortProperty]);

    if (type === 'moreExpensive') {
      setFilteredAndSortedData(sortedAscendent)
      
    }
    else if (type === 'cheaper') {
      setFilteredAndSortedData(sortedDescendent);
      
      
      
    }
    else if (type === 'newest') {
      setFilteredAndSortedData(sortedAscendent);
      
    }
    else if (type === 'oldest') {
      setFilteredAndSortedData(sortedDescendent);
    }
  };
  
  

  const filteredCarsData = {
    filteredAndSortedData,
    filter,
    products,
    sortArray
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
