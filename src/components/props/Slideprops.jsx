import React, { useEffect , useState} from "react";
import {firebasefirestore} from '../../firebase'
import { Link } from "react-router-dom";
import Aos from "aos";
import './Slideprops.css'
import "aos/dist/aos.css";


const templates = [{
  backgroundsize:"100%",
  backgroundpositiony:"-30px",
  dotcolor:"#FFFFFF",
  filmtitlestyle:{
    fontFamily: "'Fredericka the Great', cursive",
    fontSize: "6rem",
    textAlign: "center",
    color: "#C2ACAC",
    textShadow: "-4px -4px #912C2C, 4px 4px #1F394F",
  },
  filmdesbox:{
    marginLeft: "27%",
    marginRight: "27%",
  },
  filmdescriptionstyle:{
    textAlign: "center",
    fontSize: "1.4rem",
    fontFamily: "'Lobster', cursive",
    color: "#D6BFBF",
  },
  buttonframe:{
    backgroundColor: "#6A0909",
    borderRadius: "28px",
  },
  readmorecolor:"#F9F7F7",
},
{
  
        backgroundsize:"100%",
        dotcolor:"#FFFFFF",
        
        filmtitlestyle:{
          fontFamily: "'Pacifica', cursive",
          fontSize: "7rem",
          textAlign: "center",
          color: "#EBE8A3",

          textShadow: "-3px -3px #C27065, 3px 3px #538E91",
        },
        filmdesbox:{
          marginLeft: "30%",
          marginRight: "30%",
          Width: "400px",
        },
        
        filmdescriptionstyle:{
         
          textAlign: "center",
          fontSize: "1.7rem",
          fontFamily: "'Linotype Didot', cursive",
          color: "#F7F5E1",
          fontStyle: "italic",
        },
        buttonframe:{
          backgroundColor: "#96933A",

         boxShadow: "3px 3px #336159",
        },
        readmorecolor:"#FFFFFF",
        
}

];


export function Slideprops(props) {
  const {
    postid, template, thumbnailimagelink
  } = props;
  

  useEffect(() => {
    Aos.init();
    setTimeout(()=> {
    console.log("refresh"); 
      Aos.refresh();
    }, 5000)
  
  }, []);

  const [postinfo, setpostinfo] = useState({});

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
    
    getpost(postid);
  }, [postid]);


 
  const selectedtemplate = templates[template-1];
  return (
    <div
      style={{
        backgroundImage: `url(${thumbnailimagelink})`,
        height: "600px",
        backgroundSize: selectedtemplate.backgroundsize,
        backgroundPositionX: selectedtemplate.backgroundpositionx,
        backgroundPositionY: selectedtemplate.backgroundpositiony,
      }}
      className="filmframe"
    >
      <div
        style={{
          color: selectedtemplate.dotcolor,
          textAlign: "center",
          fontSize: "0.5rem",
          marginTop: "30px",
        }}
      >
        ⚪⚪⚪⚪
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2300"
       
        data-aos-offset="0"
        style={selectedtemplate.filmtitlestyle}
      >
        {" "}
        {postinfo.title||""}{" "}
      </div>
      <div
        
        className="filmdesboxbigger"
      >
        <div
          data-aos="fade-left"
          data-aos-duration="2100"
         
          data-aos-offset="0"
          data-aos-delay="300"
          style={selectedtemplate.filmdesbox}
        >
          <div style={selectedtemplate.filmdescriptionstyle}> {postinfo.shortdes||""}</div>
        </div>
      </div>
      <Link
        style={{
          textDecoration: "none",
        }}
        to={`/post/${postinfo.id}`}
      >
        <div
          data-aos="fade-left"
          data-aos-duration="2300"
      
          data-aos-offset="0"
          data-aos-delay="100"
          className="readmorebutton"
          style={{...selectedtemplate.buttonframe, color: selectedtemplate.readmorecolor}}
         
        >


            Read More
        </div>
      </Link>
    </div>
  );
}
