import React, {useEffect, useState} from "react";
import "./Filmslide.css";
import {firebasefirestore} from '../../firebase'
import { Slideprops } from "../props/Slideprops";
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

export function Filmslide() {
  
  const [highlightposts, sethighlightposts] = useState([

  ]);
  const gethighlightposts = async () => {
    const highlightpostsnapshot = await firebasefirestore.collection("highlightposts").get();
    const highlightpostsinfo = [];
    highlightpostsnapshot.forEach((doc) => {
      highlightpostsinfo.push({...doc.data(), id: doc.id});
      
      
    });
    console.log(highlightpostsinfo);
    sethighlightposts(highlightpostsinfo);
  };


  useEffect(() => {
    gethighlightposts();
  }, []);

  const slickSetting = {
    arrow: true,
    slideToShow: 1,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...slickSetting}>
      
     {highlightposts.map((post)=>{
       return (
        <Slideprops
        {...post}
      />
       )
     })}

    </Slider>
  );
}
