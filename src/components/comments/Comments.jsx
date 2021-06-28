import React, { useState } from "react";
import dayjs from 'dayjs';
import "./Comments.css";
import {firebasefirestore} from '../../firebase'
import {Signinbutton} from '../signinbutton/signin'

export function Comments(props) {
  const { comments, postid } = props;
  const savecmt = async () => {
    if (currentcmt){
      const newcontentinfo = [...cmts, {
        username: JSON.parse(localStorage.getItem("userinfo")).displayName,
        time: dayjs().format("dddd, MM/DD/YYYY HH:mm"),
        content: currentcmt,
    }];
    var postref = firebasefirestore.collection("posts").doc(postid);
    const response = await postref.update({
        comments: newcontentinfo,
    })
    console.log (response);

  }
  };
  const [currentcmt, setcurrentcmt] = useState("");
  const reverse =(oldarray)=>{
      const newarray =[];
    
      for (let i= oldarray.length-1; i>=0; i--){newarray.push(oldarray[i]);}
      console.log (newarray);
      return newarray;
  }
  const [cmts, setcmts] = useState(comments);
  const handlecmt = () => {
    setcurrentcmt("");
    if (currentcmt){
    setcmts([...cmts, {
        username: JSON.parse(localStorage.getItem("userinfo")).displayName,
        time: dayjs().format("dddd, MM/DD/YYYY HH:mm"),
        content: currentcmt,
    }])
    savecmt();
  }
  };
  const updatecurrentcmt = (e) => {
    setcurrentcmt(e.target.value);
  };
  const issignedin = localStorage.getItem("userinfo");
  return (
    <div className="commentsection">
      <div className="typecomment">
        <img src="data:image/png;base64,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" />
        <input className ="commentinput"
          value={currentcmt}
          onChange={updatecurrentcmt}
          disabled = {!issignedin}
          placeholder={issignedin? ("Add a comment..."):("Please sign in to comment")}
        />
        {issignedin ? 
        (<button className= "commentbutton" onClick={handlecmt}> Comment </button>):
        <Signinbutton/>





      }
      </div>
      <div className="commentlist">
        {reverse (cmts).map((comment) => {
          return (
            <div className="commentitem">
              <img src="data:image/png;base64,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" />
              <div className="cmtinfo">
                <div className="cmtheader">
                  <div className="username">{comment.username}</div>
                  <div className="time">{comment.time}</div>
                </div>
                <div className="content">
                  {comment.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
