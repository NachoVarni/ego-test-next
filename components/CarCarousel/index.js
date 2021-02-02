import DataSheetContext from '../../Context/DataSheetContext';
import { useContext } from 'react';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CarCarousel.module.scss';

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div className={`${styles.slickNext} ${styles.slickArrow}`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div className={`${styles.slickPrev} ${styles.slickArrow}`} onClick={onClick} />;
}

export default function CarCarousel() {
  const context = useContext(DataSheetContext);
  const { features } = context;

  return (
    <div className={styles.carousel}>
      <Carousel
        dots={true}
        slidesToShow={4}
        slidesToScroll={2}
        autoplay={false}
        autoplaySpeed={3000}
        arrows={true}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        responsive={[
          {
            breakpoint: 812,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ]}>
        {features.map((feature, key) => {
          return (
            <div key={key} className={styles.card}>
              <img src={`https://challenge.agenciaego.tech${feature.photo}`} className={styles.image} />
              <h3 className={styles.name}>{feature.name}</h3>
              <h3 className={styles.description}>{feature.description}</h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
