import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'

const API_KEY = import.meta.env.VITE_API_KEY;

function Tag() {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState("");
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

    async function fetchData() {
        setLoading(true)
        const { data } = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource)
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='w-full bg-blue-400 rounded-lg border border-black flex 
          flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='text-2xl underline uppercase font-bold pt-2'>
                CUSTOMIZE YOUR {tag} GIF
            </h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width="450" />)
            }
            <input
                className='w-10/12 text-lg py-2 rounded-lg bg-yellow-300 text-center'
                placeholder='Type your mood for GIF...'
                value={tag}
                onChange={(event) => setTag(event.target.value)}
            />
            <button onClick={() => fetchData()}
                className='w-10/12 bg-orange-100 hover:bg-orange-300 text-lg py-2 rounded-lg mb-[20px]'>
                Generate
            </button>
        </div>
    )
}

export default Tag