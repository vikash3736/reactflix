import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login'>
        <div className="loginBackground">
            <span className='loginLogo'>REACTFLIX</span>
            {/* <img src='https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg' alt='' /> */}
            <button className='loginBtn'>Sign In</button>
            <div className="loginGradient" />
        </div>
        <div className="loginBody">
            <>
            <h1>Unlimited Films, TV Programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="loginInput">
                <form>
                    <input type='email' placeholder="Email Address" />
                    <button>GET STARTED</button>
                </form>
            </div>
            </>
        </div>
    </div>
  )
}

export default Login