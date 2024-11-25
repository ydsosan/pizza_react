//import { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './components/Home';
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";


//function App() {
  //const [count, setCount] = useState(0)

  //return (
    //<>
     //<Navbar/>
     //<Home/>
     //<Footer/>
    //</>
  //)
//}

//export default App//


import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Pizza from './components/pizzas'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Pizza/>
      <Footer/>
    </div>
  );
};

export default App;

