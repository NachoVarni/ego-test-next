import styles from './ProductFilter.module.scss';
import Button from '../Button';
import CustomSelect from '../CustomSelect';

const orderBy = [
  { value: 'Ordenar por', label: 'Ordenar por' },
  { value: 'Nada', label: 'Nada' },
  { value: 'Mas caro', label: 'Mas caro' },
  { value: 'Mas barato', label: 'Mas barato' },
  { value: 'Mas nuevo', label: 'Mas nuevo' },
  { value: 'Mas viejo', label: 'Mas viejo' },
];

const filterBy = [
  { value: 'Filtrar por', label: 'Filtrar por' },
  { value: 'Todos', label: 'Todos' },
  { value: 'Autos', label: 'Autos' },
  { value: 'Pickups y Comerciales', label: 'Pickups y Comerciales' },
  { value: 'SUVs y Crossovers', label: 'SUVs y Crossovers' },
];

export default function ProductFilter() {
  return (
    <>
      <div className={styles.filterList}>
        <div className={styles.filterListLeft}>
          <span className={styles.filterBy}>Filtrar por</span>
          <Button />
        </div>
        <div className={styles.filterListRight}>
          <CustomSelect options={orderBy} defaultValue={orderBy[0]} />
        </div>
      </div>
      <div className={styles.responsiveWrapper}>
        <CustomSelect options={filterBy} defaultValue={filterBy[0]} />
        <CustomSelect options={orderBy} defaultValue={orderBy[0]} />
      </div>
    </>
  );
}
