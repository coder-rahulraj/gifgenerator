import React, { useEffect } from "react";
import { useState } from "react";
import random from "./random.module.css";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const{gif,loading,fetchData}=useGif();

  function clickHandler() {
    fetchData();
  }

  
  return (
    <div className={random.main}>
      <h1 className={random.heading}>A Random GIF</h1>

      {
        loading ? (<Spinner/>):(<img src={gif} alt="gif" />)
      }
      
      <button className={random.button} onClick={clickHandler}>
        Generate
      </button>
    </div>
  );
};

export default Random;
