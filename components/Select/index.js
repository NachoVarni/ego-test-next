import FilteredCarsContext, { FilteredCarsProvider } from '../../Context/FilteredCarsContext';
import { useContext } from 'react';
import styles from './Select.module.scss';

export default function Select({ options, defaultValue }) {
  const context = useContext(FilteredCarsContext);
  const { sortArray } = context;

  return (
    <div className={styles.customSelect}>
      <select defaultValue="selected" className={styles.selectButton} onChange={(e) => sortArray(e.target.value)}>
        <option value="" disabled style={styles} className={`${styles.optionButton} ${styles.default}`}>
          {defaultValue}
        </option>
        {options.map((option, i) => {
          return (
            <option key={i} value={option} className={`${styles.optionButton}`}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
