import React, { useState } from 'react';
import './MyList.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove, wishList } from '../../features/wishSlice';
import Navbar from '../Navbar/Navbar';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const MyList = () => {

    const dispatch = useDispatch();

  const deleteWish =(id)=>{
    dispatch(remove(id));
  }

  const [trailerUrl,setTrailerUrl] = useState("");

    const isLargeRow = false;

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    const getdata = useSelector(wishList);
    // console.log(getdata);

    const handleTrailer = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || "").then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'));
            }).catch(()=> alert("Temporarly Unavailable"))
        }
    }

    const opts = {
        height: "390px",
        width: "100%",
        playerVar: {
            autoplay: 1
        }
    }

    return (
        <>
            <Navbar />
            <div className='myList'>
                <div>
                    {
                        getdata.length ?
                            <section className="myListPoster">
                                {
                                    getdata.map((movie) =>
                                    <div className='myListDetails'>
                                        <img className={`rowPoster ${isLargeRow && "rowPosterLarge"}`} key={movie.id} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                            }`} alt={movie.name} onClick={()=>handleTrailer(movie)} style={{cursor:"pointer"}} />
                                        <button onClick={()=>deleteWish(movie.id)}>Remove</button>
                                    </div> 
                                    )
                                }
                            </section> : <span className='empty'>List is Empty <i class="fa-solid fa-cart-shopping mx-3" style={{ fontSize:"32px" }}></i></span>
                    }
                </div>
                {
                    trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
                }
            </div>
        </>
    )
}

export default MyList