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

  const categoryImages = [bevaCate, breakfastCate, indianCate, chineseCate, dinnerCate, fastFoodCate];

  return (
    <Container style={{}}>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        infinite={true}
        removeArrowOnDeviceType={["mobile"]}
      >
        {categoryImages.map((cateImg, index) => (
          <Image
            key={index}
            src={cateImg}
            alt={`Image ${index + 1}`}
            roundedCircle
            style={{ width: '70px', height: '70px'}}
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default Category;
