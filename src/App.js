import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './Components/Screens/HomeScreen';


import {
  BrowserRouter as Router,
  Route,
  
  Routes
} from "react-router-dom";


import LoginScreen from './Components/Authentication/LoginScreen';
import Navbar from './Components/Screens/Navbar';
import { auth } from './firebase';

import { useDispatch, useSelector } from 'react-redux';

import {login, logout, selectUser } from './features/counter/userSlice';

import UserProfile from './Components/UserProfile';
import Cancel from './Components/Payment/Cancel';
import Success from './Components/Payment/Success';
function App() {


  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((userAuth) => {

      if(userAuth){

        dispatch(

          login({

            uid: userAuth.uid,

            email: userAuth.email
          })
        )
      }






      else{
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch] );

  return ( 
    <div>

    <Router>

    <Navbar/>


    { !user ? (






      <LoginScreen/>


    ) : (

      <Routes>

      <Route exact path='/profile' element = { <UserProfile/> } />

      <Route exact path='/' element = { <HomeScreen/> } />

      <Route exact path='/success' element = {<Success/> } />
      <Route exact path='/cancel' element = { <Cancel/> } />
      </Routes>
    )}
    </Router>
     
    </div>
  );
}
export default App;
