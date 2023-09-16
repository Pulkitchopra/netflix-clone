import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';


import {
  BrowserRouter as Router,
  Route,
  
  Routes
} from "react-router-dom";


import LoginScreen from './Components/LoginScreen';
import Navbar from './Components/Navbar';


import { auth } from './firebase';

function App() {

  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {


      if(userAuth){

        console.log(userAuth);
      }
      else{

      }
    })
    return unsubscribe;

  }, [] );

  return (

    <div>


    <Navbar/>






    <Router>

    { !user ? (



      <LoginScreen/>

    ) : (

      <Routes>

      <Route exact path='/' element = { <HomeScreen/> } />


      </Routes>
    )}
    </Router>
     
    </div>
  );
}

export default App;
