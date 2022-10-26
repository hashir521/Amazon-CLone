import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import {auth}  from './firebase';
const Login = () => {
    // const history = useHistory(); this is replaced by useNevigate
     const navigate = useNavigate();
    const[email , setEmail] = useState('');
    const[password, setPassword] = useState('')
    let emailHandler = (event) =>{
            setEmail(event.target.value)

    }
    let passwordHadnler = (event) =>{
        setPassword(event.target.value)
    }
    let signIn = (event) =>{
        event.preventDefault();
        //some fancy firebase
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                navigate('/');
            })
            .catch(error => alert(error.message))
    }
    const register = (event) =>{
        event.preventDefault();
        //do some fancy firebase register
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // if successfully create a user with amail and passs
           console.log(auth);
           if(auth){
            navigate('/');
           }
        })
        .catch(error => alert(error.message)) 
    }
  return (
    <div className='login'>
        {/* <h1>login page</h1> */}
        <Link to='/' >
        <img className='login__logo'
         src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012015/amazon-logo-rgb.png?itok=FZJ5-sKg"  />
        </Link>
        <div className="login__container">
            <h1>sign in</h1>
            
            <form >
                <h5>E-mail</h5>
                <input type="text"  value={email} onChange={emailHandler} />
                <h5>Password</h5>
                <input type="password"  value={password} onChange={passwordHadnler} />
                <button className='login__signInButton' type='submit' onClick={signIn} >sign in</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button className='login__registerButton' onClick={register} >Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login