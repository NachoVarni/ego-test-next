import styles from './Button.module.scss';
import FieldContext from '../../Context/FieldContext';
import FilteredCarsContext from '../../Context/FilteredCarsContext';
import { useContext, useState, useEffect } from 'react';

export default function Button() {
  const [currentCategory, setCurrentCategory] = useState('');
  const fieldData = useContext(FieldContext);
  const filterData = useContext(FilteredCarsContext);
  const { buttons } = fieldData;
  const { filter, sortArray } = filterData;

  useEffect(() => {
    if (currentCategory) {
      sortArray(currentCategory);
    }
  }, [currentCategory]);

  return (
    <>
      {buttons.map((cat, key) => {
        return (
          <div key={key} className={`${styles.wrapper} ${currentCategory === cat ? styles.active : ''}`}>
            <button onClick={() => setCurrentCategory(cat)} className={`${styles.button}`}>
              {cat}
            </button>
          </div>
        );
      })}
    </>
  );
}
