import React, { useState } from 'react'
import '../Authentication/login.css'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../firebase';
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
 const [email ,setemail]=useState();
 const[password, setpassword]=useState();
 const navigate = useNavigate();
    const login = e=>{
        e.preventDefault();
        signInWithEmailAndPassword( auth , email , password)
        .then((auth)=>{
         navigate('/')
        })
        .catch((e)=>alert(e.message));
    }   

    const register = e=>{
        e.preventDefault();
      createUserWithEmailAndPassword( auth , email, password)
        .then(auth=>{
            navigate('/')
        })
        .catch((e)=>alert(e.message));
        
    }
  return (
    <div className='login'>
      <Link to ='/'>
        <img className='login-logo'
        src='ama-logo.png'
        alt='img'
        ></img>
      </Link>

      <div className='login-container'>
        <h1 className='login-h1'>Sign in</h1>
        <form>
            <h5 className='login-h5'>E-mail</h5>
            <input className='login-input ' type='email' value={email} onChange={(e)=>{
               setemail(e.target.value )
            }}/>
            <h5 className='login-h5'>Password</h5>
            <input className='login-input ' type='password' value={password} onChange={(e)=>{
                setpassword(e.target.value)
            }}/>
            <button onClick={login} className='login-button'>Sign in</button>
        </form>
        <p className='login-p'> By signing-in you agree to amazon-clone's conditions of Use & Sale. Please see our Privacy notice , or Cookies notice and our internet based Ads Notice</p>
        <button onClick={register} type='submit' className='login-button2'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
