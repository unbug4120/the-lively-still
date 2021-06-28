import React from 'react'
import {Navbar} from '../components/navbar/Navbar'
import {Modifiedbanner} from '../components/banner/Modifiedbanner'
import {Footer} from '../components/footer/Footer'
import {Thumbnaillist} from '../components/thumbnaillist/Thumbnaillist'
export function Writings(){
    return(
    <div>
        <Navbar/>
        <Modifiedbanner/>
        <Thumbnaillist category='writings'/>
        <Footer/>
    </div>  
    )
}