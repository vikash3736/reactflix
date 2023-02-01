import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className='signup'>
        <form>
            <h1>Sign Up</h1>
            <input type='email' placeholder="Enter Email" />
            <input type='password' placeholder="Enter Password" />
            <button>Sign Up</button>
            <h4>
                <span className='grey'>New to Netflix? </span>
                <span className='link'>Sign Up Now</span>
            </h4>
        </form>
    </div>
  )
}

export default SignUp