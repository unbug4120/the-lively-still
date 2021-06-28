import React from 'react'
import './About.css'
import {Navbar} from '../components/navbar/Navbar'
import {Aboutframe} from '../components/aboutframe/aboutframe'
import {Footer} from '../components/footer/Footer'
export function About(){
    return(
        <div className="full">
        <Navbar/>
        <Aboutframe/>
        <Footer/>
        </div>
    )
}