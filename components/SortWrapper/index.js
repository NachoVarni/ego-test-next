import styles from './SortWrapper.module.scss'
import React, { useState, useEffect, useContext } from 'react';
import FilteredCarsContext from '../../Context/FilteredCarsContext'

function SortWrapper() {
  
  const context = useContext(FilteredCarsContext)
  const {sortArray, filteredAndSortedData} = context
  
  return (
    <div className={styles.wrapper}>
      <select defaultValue='selected' onChange={(e) => sortArray(e.target.value)} className={styles.choose}>
        <option value=""  disabled hidden className={styles.choose}>Ordenar por</option>
        <option value="" className={styles.nothing}>Nada</option>
        <option value="moreExpensive" className={styles.moreExpensive}>Mas caro</option>
        <option value="cheaper" className={styles.cheaper}>Mas barato</option>
        <option value="newest" className={styles.newest}>Mas nuevo</option>
        <option value="oldest" className={styles.oldest}>Mas viejo</option>
      </select>

    </div>
  );
}

export default SortWrapper