import React from "react";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";

import "react-slideshow-image/dist/styles.css"; // Import CSS cho slideshow

const EachSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 400px; /* Đặt chiều cao cho mỗi slide */
`;

const Text = styled.span`
  background-color: rgba(0, 0, 0, 0.5); /* Nền mờ cho text */
  color: white;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
`;
const images = [
  "./assets/img/slide1.jfif",
  "./assets/img/slide2.jfif",
  "./assets/img/slide3.jfif",
];

function Slideshow() {
  return (
    
      <div style={{width:"1200px", margin:"auto"}} >
        <Slide easing="ease">
          {images.map((each, index) => (
            <EachSlide key={index} style={{ backgroundImage: `url(${each})` }}>
              {/* <Text>Slide {index + 1}</Text> */}
            </EachSlide>
          ))}
        </Slide>
      </div>
    
  );
}

export default Slideshow;
