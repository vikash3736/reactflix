import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Navbar from '../Navbar/Navbar';
import './Profile.css';

const Profile = () => {

    const user = useSelector(selectUser);

    return (
        <div className='profile'>
            <Navbar />
            <div className='profileBody'>
                <h1>Edit Profile</h1>
                <div className='profileContent'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
                    <div className='profileDetails'>
                        <h2>{user.email}</h2>
                        <div className='profilePlans'>
                            <button className='signOutBtn' onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile