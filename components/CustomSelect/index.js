import Select from 'react-select';
import FilteredCarsContext from '../../Context/FilteredCarsContext';
import { useContext } from 'react';
import styles from './CustomSelect.module.scss';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'rgba(209, 214, 214, 0.2)' : '',
    color: 'black',
    width: '170px',
    position: 'relative',
    textAlign: 'left',
    padding: '10px 16px',
    fontSize: '12px',
  }),
  control: () => ({
    width: 170,
    paddingLeft: '0px',
    textAlign: 'right',
    display: 'flex',
    fontSize: '14px',
    position: 'relative',
    fontWeight: 600,
    zIndex: 9999,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

export default function customSelect({ options, defaultValue }) {
  const context = useContext(FilteredCarsContext);
  const { sortArray } = context;

  function handleChange(selectedOption) {
    console.log(selectedOption.value);
    sortArray(selectedOption.value);
  }

  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={defaultValue}
      onChange={handleChange}
      className={styles.wrapper}
    />
  );
}
