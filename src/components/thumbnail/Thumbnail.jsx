import React from "react";
import './Thumbnail.css'
import { Link } from "react-router-dom";
export function Thumbnail(props) {
  const { title, shortdes, imagelink, bgcolor, color, postid } = props;
  return (
    <div>
    <div className="thumbnail">
      <img className="thumbnailimage" src={imagelink} />
      <div className="info" style={{backgroundColor: bgcolor}, {color: color}}>
        <div className="title">{title}</div>
        <div className="shortdes">{shortdes}</div>
        <Link className="button" to={`/post/${postid}`}>Read</Link>
      </div>
    </div>
     <div className="blank">
     ⚪⚪⚪⚪
     </div>
     </div>
  );
}
