import axios from 'axios'

import React, { useEffect, useState } from 'react'



const API_KEY = ""

function Random() {

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData (){
        setLoading(true);
        const url = ``;
        console.log(url);
        console.log(url.data);
        
        const imageSource = ""
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div>Random</div>
  )
}

export default Random