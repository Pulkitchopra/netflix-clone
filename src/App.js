import React from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';


import {
  BrowserRouter as Router,
  Route,
  
  Routes
} from "react-router-dom";


import LoginScreen from './Components/LoginScreen';
import Navbar from './Components/Navbar';
function App() {

  const user = null;

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
