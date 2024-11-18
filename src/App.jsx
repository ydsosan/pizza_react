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
import Cart from './components/Cart';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

const App = () => {
  return (
    <div>
      <Navbar/>
      <Cart />
      <Footer/>
    </div>
  );
};

export default App;
