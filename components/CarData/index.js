import { useContext } from 'react';
import DataSheetContext from '../../Context/DataSheetContext';
import styles from './CarData.module.scss';
import Head from '../Head';

export default function CarData() {
  const context = useContext(DataSheetContext);
  const { model } = context;

  return (
    <>
      <Head title={model.title} description={model.description} />
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={`https://challenge.agenciaego.tech${model.photo}`} className={styles.image} />
        </div>
        <div className={styles.descWrapper}>
          <h2 className={styles.name}>{model.name}</h2>
          <h3 className={styles.title}>{model.title}</h3>
          <p className={styles.desc}>{model.description}</p>
        </div>
      </div>
    </>
  );
}
