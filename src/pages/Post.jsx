import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { firebasefirestore } from "../firebase";
import {Postdetails} from '../components/postdetails/Postdetails'
import { Footer } from "../components/footer/Footer";
export function Post() {
  const [postinfo, setpostinfo] = useState(undefined);

  const getpost = async (id) => {
    const postref = await firebasefirestore
      .collection("posts")
      .doc(id)
      .get();
    if (postref.exists) {
      setpostinfo({...postref.data(), id});
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    const urlparts = path.split("/");
    const postid = urlparts[urlparts.length-1];
    getpost(postid);
  }, []);

  
  return (
    <>
      <Navbar />
      <Postdetails postinfo= {postinfo} />
      <Footer/>
    </>
  );
}
