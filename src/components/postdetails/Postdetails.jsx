import React, {useEffect} from "react";
import {Comments} from '../../components/comments/Comments' 
import './Postdetails.css'
import {Loading} from '../Loading/Loading'
export function Postdetails(props) {
  const { postinfo } = props;
  const removethumbnail = (rawcontent) =>{
    let parser = new DOMParser();
    let parsedDoccument = parser.parseFromString(rawcontent, "text/html");
    let contentImage = parsedDoccument.getElementsByTagName("img");
    if (contentImage[0]){contentImage[0].remove();}
    return parsedDoccument.getElementsByTagName("body")[0].innerHTML;
  }
  useEffect(() => {
    const contentelements = document.getElementById("postcontent");
    if(postinfo && contentelements) {contentelements.innerHTML = removethumbnail(postinfo.postcontent);

   
  }}, [postinfo]);
  
  return (
    <>
      {postinfo ? (
       <> <div className="postdetails">
         <div className="title"> {postinfo.title}</div>
          <div id="postcontent"></div>
        </div>
        <Comments postid={postinfo.id} comments = {postinfo.comments||[]} />
        </>

      ) : (
        <div className="loadingholder">
          <Loading/>
        </div>
      )}
    </>
  );
}
