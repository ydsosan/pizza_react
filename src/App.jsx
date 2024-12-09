import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0)
    return (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    )
  }
export default App