import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function Sliders() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8WawKiKp2fQEAmXTmWKygbAtIVi3nUdHCUg4ZDQytg&s" />
        <Carousel.Caption>
          <h3>Our Campus</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" imageUrl="path/to/your/image2.jpg" />
        <Carousel.Caption>
          <h3>2023 Graduation</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" imageUrl="path/to/your/image3.jpg" />
        <Carousel.Caption>
          <h3>Our Main School</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;
