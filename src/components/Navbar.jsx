//import React from 'react';
//import Nav from 'react-bootstrap/Nav';
//
//const MyNavbar = () => {
//    const total = 25000;
//    const token = false; 
//
//    return (
//        <nav className="navbar">
//            <div className="logo">Pizzeria Mamma Mia</div>
//            <div className="links">
//                <Nav.Link href="/" className="link">🍕 Home</Nav.Link>
//                {token ? (
//                    <>
//                        <Nav.Link href="" className="link">🔓 Profile</Nav.Link>
//                        <Nav.Link href="" className="link">🔒 Logout</Nav.Link>
//                    </>
//                ) : (
//                    <>
//                        <Nav.Link href="/Login" className="link">🔐 Login</Nav.Link>
//                        <Nav.Link href="/Register" className="link">🔐 Register</Nav.Link>
//                        <Nav.Link href="/Profile" className="link">Profile</Nav.Link>
//                    </>
//                )}
//            </div>
//            <div className="total"> <Nav.Link href='/Cart' className='link'>🛒 Total: ${total.toLocaleString()} </Nav.Link> </div>
//        </nav>
//    );
//};
//
//export default MyNavbar;

//import React from "react";
//import Nav from "react-bootstrap/Nav";
//import { useCart } from "../context/CartContext";
//
//const MyNavbar = () => {
//  const { calculateTotal } = useCart();
//  const total = calculateTotal();
//  const token = false; // Simulación de autenticación
//
//  return (
//    <nav className="navbar">
//      <div className="logo">Pizzeria Mamma Mia</div>
//      <div className="links">
//        <Nav.Link href="/" className="link">🍕 Home</Nav.Link>
//        {token ? (
//          <>
//            <Nav.Link href="" className="link">🔓 Profile</Nav.Link>
//            <Nav.Link href="" className="link">🔒 Logout</Nav.Link>
//          </>
//        ) : (
//          <>
//            <Nav.Link href="/Login" className="link">🔐 Login</Nav.Link>
//            <Nav.Link href="/Register" className="link">🔐 Register</Nav.Link>
//            <Nav.Link href="/Profile" className="link">Profile</Nav.Link>
//          </>
//        )}
//      </div>
//      <div className="total">
//        <Nav.Link href="/cart" className="link">
//          🛒 Total: ${total.toLocaleString()}
//        </Nav.Link>
//      </div>
//    </nav>
//  );
//};
//
//export default MyNavbar;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";
import { useCart } from "../context/CartContext";


const NavigationBar = () => {
  const { token, logout } = useUserContext();
  const { calculateTotal } = useCart();
  const total = calculateTotal();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pizzeria Mamma Mia🍕
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>     
            {/* Mostrar botones según el estado del token */}
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">
                🔓 Profile
                </Nav.Link>
                <Nav.Link onClick={logout}>🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                  <Nav.Link as={Link} to="/login">
                    🔐 Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    🔐 Register
                  </Nav.Link>
              </>
            )}
            <div className="total"><Nav.Link as={Link} to="/cart">
              🛒 Total Carrito: ${total.toLocaleString()}
            </Nav.Link></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
