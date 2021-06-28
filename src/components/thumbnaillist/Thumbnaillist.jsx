import React, {useState,useEffect} from "react";
import {Thumbnail} from '../thumbnail/Thumbnail';
import {firebasefirestore} from '../../firebase.js';
export function Thumbnaillist(props) {
  const [postslist, setpostslist] = useState([]);
  const getpostsinfo = async () => {
    const postsnapshot = await firebasefirestore.collection("posts").where('category', '==', props.category ).get();
    const postsinfo = [];
    postsnapshot.forEach((doc) => {
      postsinfo.push({...doc.data(), id: doc.id});
      
      
    });
    setpostslist(postsinfo);
  };

  const getthumbnailimage = (content) => {
    let parser = new DOMParser();
    let parsedDoccument = parser.parseFromString(content, "text/html");
    let contentImage = parsedDoccument.getElementsByTagName("img");
    if (contentImage.length > 0) {
      return contentImage[0].src;
    } else {
      return "https://htmlcolorcodes.com/assets/images/colors/dark-purple-color-solid-background-1920x1080.png";
    }
  };

  useEffect(() => {
    getpostsinfo();
  }, []);

  useEffect(() => {}, [postslist]);

  return (
    <>
      {postslist.map((post) => {
        console.log(post)
        return (
          <Thumbnail
            bgcolor= "#232C2F"
            color= "#fcfae3"
            title={post.title}
            shortdes={post.shortdes}
            imagelink={getthumbnailimage(post.postcontent)}
            postid={post.id}
          />
        );
      })}
    </>
  );
}
