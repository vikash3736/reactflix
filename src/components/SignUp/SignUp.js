import React, { useRef } from 'react';
import { auth } from '../../firebase';
import './SignUp.css';

const SignUp = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message);
    })
  }

  const signIn = (e) =>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message);
    })
  }
  return (
    <div className='signup'>
        <form>
            <h1>Sign Up</h1>
            <input ref={emailRef} type='email' placeholder="Enter Email" />
            <input ref={passwordRef} type='password' placeholder="Enter Password" />
            <button onClick={signIn}>Sign Up</button>
            <h4>
                <span className='grey'>New to Netflix? </span>
                <span className='link' onClick={register}>Sign Up Now</span>
            </h4>
        </form>
    </div>
  )
}

export default SignUp