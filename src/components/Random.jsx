import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';


const API_KEY = import.meta.env.VITE_API_KEY;

function Random() {

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        try {
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            const { data } = await axios.get(url);
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
        } catch (error) {
            console.error('Failed to load random GIF', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='w-full bg-green-400 rounded-lg border border-black flex 
            flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='text-2xl underline uppercase font-bold pt-2'> Random GIFS</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width="450" />)
            }

            <button onClick={() => fetchData()}
                className='w-10/12 bg-orange-100 hover:bg-orange-300 text-lg py-2 rounded-lg mb-[20px]'>
                Generate
            </button>
        </div>
    )
}

export default Random