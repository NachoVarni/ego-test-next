import FilteredCarsContext, { FilteredCarsProvider } from '../../Context/FilteredCarsContext'
import {useContext} from 'react'

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
      // <select
      //   styles={customStyles}
      //   options={options}
      // />
      // <select>
      //   {options.map((option) => {
      //     return <option value={option.value}>{option.label}</option>
      //   })}
      // </select>
      // <select defaultValue='selected' onChange={(e) => sortArray(e.target.value)} className={styles.choose}>
      //   <option value=""  disabled hidden className={styles.choose}>Ordenar por</option>
      //   <option value="" className={styles.nothing}>Nada</option>
      //   <option value="moreExpensive" className={styles.moreExpensive}>Mas caro</option>
      //   <option value="cheaper" className={styles.cheaper}>Mas barato</option>
      //   <option value="newest" className={styles.newest}>Mas nuevo</option>
      //   <option value="oldest" className={styles.oldest}>Mas viejo</option>
      // </select>  
      <select defaultValue='selected' onChange={(e) => sortArray(e.target.value)}>
        <option value="" disabled>{defaultValue}</option>
        {options.map((option, i) => {
          return(
            <option key={i} value={option}>{option}</option>
          )
        })}
      </select>  
      
      
        
    )
    
  }
    
  