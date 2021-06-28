import './Admin.css'
import React, { useEffect, useState } from "react";
import Aos from "aos";
import { firebasefirestore } from "../firebase";
import "aos/dist/aos.css";
import { Texteditor } from "../components/texteditor/Texteditor";
import {Highlightpostsmanager} from '../components/highlightpostsmanager/Highlightpostsmanager'

import { Navbar } from "../components/navbar/Navbar";
export function Admin() {
  

  return (
    <div className="admin">
      <Navbar />
      <Texteditor />
      <Highlightpostsmanager/>
      
    </div>
  );
}
