import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [show,handleShow] = useState(false);

    const navigate = useNavigate();

    const transitionNavbar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar);
        return  ()=> window.removeEventListener('scroll',transitionNavbar);
    },[])
    return (
        <div className={`navbar ${show && 'navbarBlack'}`}>
            <div className="navbarLogo">
                <span onClick={()=> navigate('/')}>REACTFLIX</span>
                <img onClick={()=> navigate('/profile')} src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
            </div>

        </div>
    )
}

export default Navbar