import React, { useEffect, useState } from "react";
import { firebasefirestore } from "../../firebase";
import './highlightpostsmanager.css'
export function Highlightpostsmanager() {
  const [newthumbnailinfo, setnewthumbnailinfo] = useState({
    postid: "",
    template: "",
    thumbnailimagelink: "",
  });
  const [highlightpostslist, sethighlightpostslist] = useState([]);

  const createhighlights = async () => {
    // const highlightpostinfo = decodehighlights(highlightpostcode);
    try {
        if (newthumbnailinfo.postid && newthumbnailinfo.template && newthumbnailinfo.thumbnailimagelink){
      var postref = firebasefirestore
        .collection("highlightposts")
        .add(newthumbnailinfo);
      console.log(postref);
      gethighlightposts();
    }} catch (err) {
      console.log(err);
    }
  };
  //   const gethighlightposts = async () => {
  //     const postref = await firebasefirestore
  //       .collection("highlightposts")
  //       .get();
  //     // if (postref.exists) {
  //     //   console.log(postref.data());
  //     //   sethighlightpostcode(encode(postref.data().posts));
  //     // }
  //   };
  const gethighlightposts = async () => {
    const highlightpostsnapshot = await firebasefirestore
      .collection("highlightposts")
      .get();
    const highlightpostsinfo = [];
    highlightpostsnapshot.forEach((doc) => {
      highlightpostsinfo.push({ ...doc.data(), id: doc.id });
    });
    console.log(highlightpostsinfo);
    sethighlightpostslist(highlightpostsinfo);
  };

  useEffect(() => {
    gethighlightposts();
  }, []);
  const updatenewhighlighpostsform = (field, newvalue) => {
    setnewthumbnailinfo({
      ...newthumbnailinfo,
      [field]: newvalue,
    });
  };
  const deletehighlightpost = async (postid) => {
    const response = await firebasefirestore
      .collection("highlightposts")
      .doc(postid)
      .delete();
    gethighlightposts();
  };

  return (
    <div className= "highlightpostsmanagercontainer">
        <div className="sectiontitle"> Create Highlight Post </div>
      <div>
        <input 
          placeholder="Post ID"
          onChange={(e) => {
            updatenewhighlighpostsform("postid", e.target.value);
          }}
        />
      </div>
      <div>
        <input 
          placeholder="Template ID "
          onChange={(e) => {
            updatenewhighlighpostsform("template", e.target.value);
          }}
        />
      </div>
      <div>
        <input 
          placeholder="Thumbnail Image Link"
          onChange={(e) => {
            updatenewhighlighpostsform("thumbnailimagelink", e.target.value);
          }}
        />
      </div>
      <button className="savebutton" onClick={createhighlights}>Add</button>
      <div className="sectiontitle"> Current Highlight Posts</div>
      {highlightpostslist.map((post) => {
        console.log(post);
        return (
          <div className="display">
            
            <span>Post ID:</span> <span className="span1"> {post.postid} </span>
            <span>Template ID:</span> <span className="span1"> {post.template} </span>
            <img className="tnimage" src={post.thumbnailimagelink}/>
            <i
              onClick={() => {
                {
                  deletehighlightpost(post.id);
                }
              }}
              class="fas fa-trash"
            ></i>
          </div>
        );
      })}
    </div>
  );
}
