import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image } from 'react-bootstrap';
import bevaCate from '../assets/bevaragesCate.jpg';
import breakfastCate from '../assets/breakfastCate.jpg';
import indianCate from '../assets/indianCate.jpg';
import chineseCate from '../assets/chineseCate.jpg';
import dinnerCate from '../assets/dinnerCate.jpg';
import fastFoodCate from '../assets/fastFoodCate.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Category() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const categoryImages = [
    { src: bevaCate, text: 'Beverages' },
    { src: breakfastCate, text: 'Breakfast' },
    { src: indianCate, text: 'Indian' },
    { src: chineseCate, text: 'Chinese' },
    { src: dinnerCate, text: 'Dinner' },
    { src: fastFoodCate, text: 'Fast Food' },
  ];

  return (
    <Container>
      <Carousel
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["mobile"]}
        itemClass=''
      >
        {categoryImages.map((item, index) => (
          <div className=''>
          <div key={index} className="flex flex-col text-center justify-center items-center mt-4">
            <Image
              src={item.src}
              alt={`Image ${index + 1}`}
              roundedCircle
              style={{width: '5rem', height: '5rem'}}
            />
            <div>{item.text}</div>
          </div>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default Category;
