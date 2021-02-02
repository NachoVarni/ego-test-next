import React, { Component, useState } from 'react';
import Select from 'react-select';
import FieldContext from '../../Context/FieldContext';
import FilteredCarsContext, { FilteredCarsProvider } from '../../Context/FilteredCarsContext';
import { useContext } from 'react';

// export default function Select({ options, defaultValue }) {
//   return (
//     <div className={styles.customSelect}>
//       <select defaultValue="selected" className={styles.selectButton} onChange={(e) => sortArray(e.target.value)}>
//         <option value="" disabled style={styles} className={`${styles.optionButton} ${styles.default}`}>
//           {defaultValue}
//         </option>
//         {options.map((option, i) => {
//           return (
//             <option key={i} value={option} className={`${styles.optionButton}`}>
//               {option}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// }

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    width: 500,
    position: 'relative',
    padding: '20px 5px',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 170,
    display: 'flex',
    backgroundColor: 'white',
    fontSize: '14px',
    fontWeight: 600,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

// Un render atrasado y se soluciona

export default function customSelect({ options, defaultValue }) {
  const [selectedVal, setSelectedVal] = useState(null);

  function handleChange(selectedOption) {
    setSelectedVal(selectedOption.value);
    console.log(selectedVal);
  }

  function handleSort() {
    sortArray(selectedVal);
  }

  function onClick() {
    console.log('click');
  }

  const context = useContext(FilteredCarsContext);
  const { sortArray } = context;

  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={defaultValue}
      onClick={onClick}
      onChange={handleChange}
    />
  );
}
