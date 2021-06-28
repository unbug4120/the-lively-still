import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Banner } from "../components/banner/Banner";
import { Footer } from "../components/footer/Footer";
import {Thumbnaillist} from '../components/thumbnaillist/Thumbnaillist'



export function Films() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Thumbnaillist category='films'/>
      <Footer />
    </div>
  );
}
