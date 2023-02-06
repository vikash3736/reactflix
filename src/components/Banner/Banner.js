import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../api/axios.js'
import requests from '../../api/requests';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  const navigate = useNavigate();

  const [movie,setMovie] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  },[]);

  console.log(movie);

  function truncate(str,n){
    return str.length > n ? str.substring(0,n-1) + '.....' : str;
  }
  return (
    <header className='banner' 
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: 'center center'
    }}>
      
      <div className="bannerContent">
        <h1 className="bannerTitle">
          { movie?.title || movie?.name || movie?.original_name }
        </h1>
        <div className="bannerButtons">
          <button className='bannerBtn' onClick={()=> navigate("/player")}>Play</button>
          <button className='bannerBtn' onClick={()=>navigate("/mylist")}>My List</button>
        </div>
        <div className="bannerDescription">
          {truncate(`${movie?.overview}`,200)}
        </div>
      </div>

      <div className="bannerFadeBottom" />
    </header>
  )
}

export default Banner