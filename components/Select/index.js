import FilteredCarsContext, { FilteredCarsProvider } from '../../Context/FilteredCarsContext'
import {useContext} from 'react'
import styles from './Select.module.scss'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '2px dotted green',
    color: state.isSelected ? 'yellow' : 'black',
    backgroundColor: state.isSelected ? 'green' : 'white'
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "5%",
  })
}

  export default function Select({options, defaultValue}) {
    
    const context = useContext(FilteredCarsContext)
    const {filter, sortArray} = context
    

    return(
      <div className={styles.customSelect}> 
      <select defaultValue='selected' className={styles.selectButton}  onChange={(e) => sortArray(e.target.value)} >
        <option value="" disabled style={styles} className={`${styles.optionButton} ${styles.default}`}>{defaultValue}</option>
        {options.map((option, i) => {
          return(
            <option key={i} value={option} className={`${styles.optionButton}`}>{option}</option>
          )
        })}
      </select>
      </div>  
      
      
        
    )
    
  }
    
  