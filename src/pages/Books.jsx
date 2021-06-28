import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Modifiedbanner1 } from "../components/banner/Modifiedbanner1";
import { Footer } from "../components/footer/Footer";
import {Thumbnaillist} from '../components/thumbnaillist/Thumbnaillist'
export function Books() {
  
  return (
    <div>
      <Navbar />
      <Modifiedbanner1 />
      <Thumbnaillist category='books'/>
      <Footer />
    </div>
  );
}
