import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
//images
import logo from '../images/itenf-logo.png';
import computerJongen from '../images/jongenAchterComputer.jpg'

function SliderExample() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);}

    return (  
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >
      <Carousel.Item className=''>
        <img
            className="d-block height15vh "
            src={logo}
            alt="logo slide"
          />
          <Carousel.Caption>
            <h3 className='my-3'>First slide label </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=' '>
      <img
            className="d-block height15vh "
            src={computerJongen}
            alt="jongen slide"
          />
        <Carousel.Caption className='bg-color-green'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='my-5'>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderExample;