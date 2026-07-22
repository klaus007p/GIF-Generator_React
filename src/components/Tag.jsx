import axios from 'axios'
import React, { useState, useEffect} from 'react'
import Spinner from './Spinner'




const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);


function Tag() {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState("");
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` 

    async function fetchData() {
        setLoading(true)
        const {data} = await axios.get(url);
        const imageSource = data.data.images.download_large.url;
        setGif(imageSource)
        setLoading(false);
    }

  return (
    <div>Tag</div>
  )
}

export default Tag