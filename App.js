// To address all issues (including breaking changes), run:
//   npm audit fix --force
import './App.css';
import Header from './Header';
import Home from './Home';
import {auth}  from './firebase';
import React, { useState,useEffect } from 'react'
// import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect( ()=>{
    //will only run once when the app componenet loads
    auth.onAuthStateChanged(authUser =>{
      console.log('the user >>>>>>',authUser);
      if(authUser){
        // the user just logged in / user was logged in
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }
      else{
        //the user logged out
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [])
  return (
        <div className="App">
        {/* <Header/> */}
         <Routes> 
            <Route exact path='/' element={ [<Header/>,<Home/>]} >  </Route> 
            <Route exact path='/checkout' element={ [<Header/>,<Checkout/>]} ></Route>
            <Route exact path='/login' element={ <Login/>} ></Route>
         </Routes> 
        </div>
    
  ); }

export default App;
