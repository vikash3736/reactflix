import React from 'react';
import './Player.css';
import {BsArrowLeft} from 'react-icons/bs';
import video from '../../assets/promo.mp4';
import { useNavigate } from 'react-router-dom';

const Player = () => {

    const navigate = useNavigate();

  return (
    <div className='player'>
        <div className='back'>
            <BsArrowLeft onClick={()=> navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted></video>
    </div>
  )
}

export default Player