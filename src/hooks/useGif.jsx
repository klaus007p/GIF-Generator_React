import React, { useEffect, useState} from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const url =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


function useGif(tag) {
    const [gif, setGif] = useState('');

  return (
    <div>useGif</div>
  )
}

export default useGif