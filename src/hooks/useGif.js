import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";



const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

  
    async function fetchData(tag) {
      setLoading(true);
      // const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
      const url ="https://api.giphy.com/v1/gifs/random?api_key=UMWEGBYJYnIKuxr7lxlxBI5Q9E73ZHJC";

      
  
      const { data } = await axios.get(tag? `${url}&tag=${tag}` : url);
      const imageSource = data.data.images.downsized_large.url;
      console.log(imageSource);
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData('india');
    }, []);
  
   return{gif,loading,fetchData};
    
}

export default useGif
