import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'



import {Navbar} from '../components/navbar/Navbar'
import {Title} from '../components/Title/Title'
import {Film} from '../components/films/Film'
import {Footer} from '../components/footer/Footer' 
import {Middiv} from '../components/middiv/Middiv'
import {Filmslide} from '../components/filmslide/Filmslide'



export function Home(){


    return (
        <div className="home">
            <Navbar/>      
            <Title/>
            <Film/>
            <Filmslide/>
            <Footer/>
        </div>
    )

}