import React, { useEffect } from 'react'
import './Film.css'
import {Link} from 'react-router-dom'
export function Film(){

    return (
        <div className="frame"> 
            <div className="bigtitle">Films </div>
            <div className="filmtext">In this modern era, films have become somewhat unorthodox, somewhat extraordinary as a visual art form. The industry started out humble with "movies" lasting for only a few minutes each, yet the potential for filmdom was unprecedentedly huge that it's developed to what we currently have. The beauty lies in its impeccable blend of visual poetry and storytelling, art and reality.</div>
            <div className="readmoreframe">
            <Link className="pressme" to="/films"><div className="readmore"> Read More</div></Link>
            </div>
        </div>
    )
}
