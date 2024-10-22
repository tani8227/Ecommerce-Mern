import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fridge from '../images/HomeSliderImg/fridge.jpg';
import Laptop from '../images/HomeSliderImg/laptop.jpg';
import appliances from '../images/HomeSliderImg/appliances.png';
import main from '../images/HomeSliderImg/main.jpg';
import { Link } from 'react-router-dom';



const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    { id: 1, imageUrl: main, mainCategory:"Fashion", productCategory:"" },
    { id: 2, imageUrl: appliances, mainCategory:'Appliances', productCategory:"" },
    { id: 3, imageUrl: Laptop, mainCategory:'Electronics', productCategory:"Laptop" },
    { id: 4, imageUrl: Fridge, mainCategory:'Appliances', productCategory:"Fridge" },
  ];

  return (
    <div style={styles.sliderContainer}>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <div style={styles.imageWrapper}>
              <Link to={`${product.mainCategory}${product.productCategory!==""?`/${product.productCategory}`:''}`}>
              <img src={product.imageUrl} alt={`Product ${product.id}`} style={styles.image} />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  sliderContainer: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
  },
  card: {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  imageWrapper: {
    maxWidth: '100%',
    maxHeight: '300px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '100%',    
    maxHeight: '100%',   
    objectFit: 'conatain', 
  },
};

export default HomeSlider;
