
import React, { useEffect } from "react";
import { useState } from "react";
import random from "./random.module.css";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  
  const [tag, setTag] = useState('india');

  const{gif,loading,fetchData}=useGif(tag);



  function changeHandler(event){
    setTag(event.target.value)
  }


  return (
    <div className={random.main}>
      <h1 className={random.heading}>Random {tag} GIF</h1>

      {
        loading ? (<Spinner/>):(<img src={gif} alt="gif" />)
      }

      <input type="text"
      className={random.button}
      onChange={changeHandler}
      value={tag} />
      
      <button className={random.button} onClick={()=>fetchData(tag)}>
        Generate
      </button>
    </div>
  );
}

export default Tag
