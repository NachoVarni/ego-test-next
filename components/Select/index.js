import FieldContext from '../../Context/FieldContext'
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

  export default function Select() {
    
    const context = useContext(FieldContext)
    const {options} = context

    return(
      // <select
      //   styles={customStyles}
      //   options={options}
      // />
      <select>
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>
        })}
      </select>  
      
      
      
        
    )
    
  }
    
  