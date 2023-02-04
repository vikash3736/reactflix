import React from 'react';
import './MyList.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove, wishList } from '../../features/wishSlice';
import Navbar from '../Navbar/Navbar';

const MyList = () => {

    const dispatch = useDispatch();

  const deleteWish =(id)=>{
    dispatch(remove(id));
  }

    const isLargeRow = false;

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    const getdata = useSelector(wishList);
    // console.log(getdata);

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
                                            }`} alt={movie.name} />
                                        <button onClick={()=>deleteWish(movie.id)}>Remove</button>
                                    </div> 
                                    )
                                }
                            </section> : <h1 style={{ color: "white" }}>Empty</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default MyList