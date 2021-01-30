import DataSheetContext from '../../Context/DataSheetContext'
import {useContext} from 'react'
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CarCarousel.module.scss'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", color: 'black' }}
      onClick={onClick}
    />
  );
}



export default function CarCarousel() {
  
  const context = useContext(DataSheetContext)
  const {features} = context
  console.log(features)

  return (
    <div className={styles.carousel}>
      <Carousel 
        dots={true}
        slidesToShow={3}
        slidesToScroll={2}
        autoplay={false}
        autoplaySpeed={3000}
        arrows={true}
        nextArrow= {<SampleNextArrow />}
        prevArrow= {<SamplePrevArrow />}

        // responsive = {[
        //   {
        //     breakpoint: 812,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       arrows: false
        //     }
        //   }
        // ]}
        
      >
        {features.map((feature, key) => {
          
          return(
            <div key={key} className={styles.card}>
              
              <img src={`https://challenge.agenciaego.tech${feature.photo}`} className={styles.image} />
              <h3 className={styles.name}>{feature.name}</h3>
              <h3 className={styles.description}>{feature.description}</h3>
                
            </div>
            
          )
        })}
      </Carousel>
    </div>      
  )
}