import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./texteditor.css";
import React from "react";
import Select from "react-select";
import { useState } from "react";
import { firebasefirestore } from "../../firebase";
const options = [
  { value: "films", label: "Films" },
  { value: "writings", label: "Writings" },
  { value: "books", label: "Books" },
];

const modules = {
  toolbar: [
    ["bold"],
    ["italic"],
    ["underline"],
    ["blockquote"],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["image"],
    ["video"],
  ],
};
const formats = [
  "align",
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code",
];

export function Texteditor() {
  const [title, settitle] = useState("");
  const [shortdes, setshortdes] = useState("");
  const [postcontent, setpostcontent] = useState("");
  const [category, setcategory] = useState(undefined);
  
  const handlecategoryChange = (selectedOption) => {
    setcategory(selectedOption);
  };
  const submit = async()=>{
    try{
      const res = await firebasefirestore.collection('posts').add({
        title: title,
        shortdes: shortdes,
        postcontent: postcontent,
        comment: [],
        createdat: new Date().toISOString(),
        like:[],
        category:category.value,
        
      });
      console.log(res)
      

      }
      catch(err){
console.log(err);
      }
  }
  const edittitle = (e) => {
    settitle(e.target.value);
  };
  const editshortdes = (e) => {
    setshortdes(e.target.value);
  };
  const editpostcontent = (value) =>{
    setpostcontent(value);
  };
  

  return (
    <div className="texteditor">
      <label>Title</label> <input onChange={edittitle} />
      <label>Short Description</label> <input onChange={editshortdes} />
      <Select
        value={category}
        onChange={handlecategoryChange}
        options={options}
      />
      <ReactQuill modules={modules} formats={formats} 
      value ={postcontent}
      onChange={editpostcontent} />
      <button 
      onClick={submit}
      >Post </button>
    </div>
  );
}
