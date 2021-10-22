import { Carousel } from "react-bootstrap";
import { useState } from "react";
import FirstImage from "../../Refrence/images/image-product-1.jpg";
import SecondImage from "../../Refrence/images/image-product-2.jpg";
import ThirdImage from "../../Refrence/images/image-product-3.jpg";
import FourthImage from "../../Refrence/images/image-product-4.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={FirstImage} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SecondImage} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ThirdImage} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={FourthImage} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
