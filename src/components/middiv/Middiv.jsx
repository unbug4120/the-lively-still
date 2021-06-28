import React from "react";
import "./Middiv.css";
import { Midprops } from "./Midprops";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      onClick={onClick}
      src="https://i.imgur.com/P1KTYoH.png"
    />
  );
 
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      onClick={onClick}
      src="https://i.imgur.com/WlIiNcU.png"
    />
  );
}
export function Middiv() {
  const slickSetting = {
    arrow: true,
    slideToShow: 1,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...slickSetting}>
      <Midprops 
      backgroundurl1="https://i.imgur.com/sHMjxKX.jpg" 
      textcolor= "white"
      size="100%"
      text="Tet 2020"
      
      />
    </Slider>
  );
}
